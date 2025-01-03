const express = require('express');
const axios = require('axios');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const frontendUrl = isProduction ? process.env.PROD_FRONTEND_URL: 'http://localhost:5173';

// CORS configuration
app.use(cors({
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(cookieParser());
app.use(helmet());

// Rate limiting configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiter to all requests
app.use(limiter);

const redirect_uri = isProduction ? process.env.PROD_SPOTIFY_URI : process.env.SPOTIFY_URI;
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

// Middleware to check token validity
const checkTokenValidity = (req, res, next) => {
    const access_token = req.cookies.spotify_access_token;
    const refresh_token = req.cookies.spotify_refresh_token;
    const token_expiry = req.cookies.spotify_token_expiry;

    if (!access_token || !token_expiry) {
        return res.status(401).json({ error: 'No valid access token' });
    }

    if (Date.now() > token_expiry) {
        if (refresh_token) {
            return refreshAccessToken(refresh_token, req, res, next);
        } else {
            return res.status(401).json({ error: 'Access token expired and no refresh token available' });
        }
    } else {
        next();
    }
};

// Function to refresh the access token using the refresh token
const refreshAccessToken = async (refresh_token, req, res, next) => {
    const tokenUrl = 'https://accounts.spotify.com/api/token';

    const data = querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
        client_id,
        client_secret,
    });

    try {
        const response = await axios.post(tokenUrl, data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const { access_token, expires_in } = response.data;

        const expiration_time = Date.now() + expires_in * 1000;

        res.cookie('spotify_access_token', access_token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: expires_in * 1000,
        });

        res.cookie('spotify_token_expiry', expiration_time, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: expires_in * 1000,
        });

        next();
    } catch (error) {
        console.error('Error refreshing access token.');
        res.status(500).json({ error: 'Error refreshing access token' });
    }
};

// Route to redirect users to Spotify login page
app.get('/login', (req, res) => {
    const access_token = req.cookies.spotify_access_token;

    if (access_token) {
        return res.redirect(`${frontendUrl}/main`);
    }

    const scope = 'user-read-private user-read-email user-follow-read user-top-read';
    const authUrl = `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
    })}`;

    res.redirect(authUrl);
});

// Callback route that Spotify redirects to after login
app.get('/callback', async (req, res) => {
    const code = req.query.code || null;
    const tokenUrl = 'https://accounts.spotify.com/api/token';

    const data = querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        client_id,
        client_secret,
    });

    if (!code) {
        return res.status(400).send('Authorization code not found');
    }

    try {
        const response = await axios.post(tokenUrl, data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const { access_token, refresh_token, expires_in } = response.data;
        const expiration_time = Date.now() + expires_in * 1000;

        res.cookie('spotify_access_token', access_token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: expires_in * 1000,
        });

        res.cookie('spotify_refresh_token', refresh_token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        res.cookie('spotify_token_expiry', expiration_time, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: expires_in * 1000,
        });

        res.redirect(`${frontendUrl}/main`);
    } catch (error) {
        console.error('Error during Spotify authentication.');
        res.status(500).send('Error during Spotify authentication');
    }
});

// Route to refresh access token using refresh token
app.get('/refresh-token', async (req, res) => {
    const refresh_token = req.cookies.spotify_refresh_token;

    if (!refresh_token) {
        return res.status(401).json({ error: 'No refresh token found' });
    }

    const data = querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
        client_id,
        client_secret,
    });

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const { access_token, expires_in } = response.data;
        const expiration_time = Date.now() + expires_in * 1000;

        res.cookie('spotify_access_token', access_token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: expires_in * 1000,
        });

        res.cookie('spotify_token_expiry', expiration_time, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'None' : 'Lax',
            maxAge: expires_in * 1000,
        });

        res.json({ message: 'Token refreshed successfully' });
    } catch (error) {
        console.error('Error refreshing token.');
        res.status(500).json({ error: 'Error refreshing token' });
    }
});

// Route to get Spotify user data using access token
app.get('/spotify-data', checkTokenValidity, async (req, res) => {
    const access_token = req.cookies.spotify_access_token;

    try {
        const spotifyResponse = await axios.get('https://api.spotify.com/v1/me', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        res.json(spotifyResponse.data);
    } catch (error) {
        console.error('Error fetching data from Spotify:', error.response ? error.response.data : error.message);

        const status = error.response?.status || 500;
        const errorMessage = error.response?.data?.error?.message || 'Error fetching data from Spotify';
        res.status(status).json({ error: errorMessage });
    }
});

// Route to clear the access and refresh token and logout
app.get('/logout', (req, res) => {
    res.clearCookie('spotify_access_token', { path: '/' });
    res.clearCookie('spotify_refresh_token', { path: '/' });
    res.clearCookie('spotify_token_expiry', { path: '/' });

    res.json({ message: 'Logout successful' });
});

app.get('/spotify-playlists', checkTokenValidity, async (req, res) => {
    const access_token = req.cookies.spotify_access_token;

    try {
        const spotifyResponse = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        res.json(spotifyResponse.data.items); // Send playlists
    } catch (error) {
        console.error('Error fetching playlists from Spotify:', error.response ? error.response.data : error.message);

        const status = error.response?.status || 500;
        const errorMessage = error.response?.data?.error?.message || 'Error fetching playlists from Spotify';
        res.status(status).json({ error: errorMessage });
    }
});

app.get('/spotify-following', checkTokenValidity, async (req, res) => {
    const access_token = req.cookies.spotify_access_token;

    try {
        // Fetch the list of artists the user is following
        const spotifyResponse = await axios.get('https://api.spotify.com/v1/me/following?type=artist', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        // The response contains an array of artists the user follows, we return the count
        const followingCount = spotifyResponse.data.artists.items.length;

        res.json({ followingCount });
    } catch (error) {
        console.error('Error fetching followed artists:', error.response ? error.response.data : error.message);

        const status = error.response?.status || 500;
        const errorMessage = error.response?.data?.error?.message || 'Error fetching followed artists';
        res.status(status).json({ error: errorMessage });
    }
});

// Route to get the user's top artist
app.get('/spotify-top-artist', checkTokenValidity, async (req, res) => {
    const access_token = req.cookies.spotify_access_token;

    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/artists?limit=1&time_range=long_term', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        res.json(response.data.items[0]); // Send the top artist
    } catch (error) {
        console.error('Error fetching top artist from Spotify:', error.response ? error.response.data : error.message);

        const status = error.response?.status || 500;
        const errorMessage = error.response?.data?.error?.message || 'Error fetching top artist from Spotify';
        res.status(status).json({ error: errorMessage });
    }
});

// Route to get the user's top track
app.get('/spotify-top-track', checkTokenValidity, async (req, res) => {
    const access_token = req.cookies.spotify_access_token;

    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=long_term', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        res.json(response.data.items[0]); // Send the top track
    } catch (error) {
        console.error('Error fetching top track from Spotify:', error.response ? error.response.data : error.message);

        const status = error.response?.status || 500;
        const errorMessage = error.response?.data?.error?.message || 'Error fetching top track from Spotify';
        res.status(status).json({ error: errorMessage });
    }
});


// Start the server
app.listen(5000, () => {
    console.log('Backend server running on port 5000');
});
