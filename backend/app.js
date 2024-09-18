const express = require('express');
const axios = require('axios');
const cors = require('cors');
const querystring = require('querystring');
require('dotenv').config();

const app = express();
app.use(cors());

const redirect_uri = 'http://localhost:5000/callback';
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

app.get('/login', (req, res) => {
    const scope = 'user-read-private user-read-email';
    const authUrl = `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
    })}`;
    res.redirect(authUrl);
});

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

    try {
        const response = await axios.post(tokenUrl, data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const { access_token } = response.data;
        res.redirect(`http://localhost:5173/main?access_token=${access_token}`);
    } catch (error) {
        res.send(error);
    }
});

app.listen(5000, () => {
    console.log('Backend server running on port 5000');
});
