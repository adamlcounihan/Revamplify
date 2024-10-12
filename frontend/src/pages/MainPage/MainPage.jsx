import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/Footer.jsx';
import MobileNavbar from '../../components/MobileNavbar/MobileNavbar.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Home from '../../components/Home/Home.jsx';
import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from './MainPageStyles.module.css';

const MainPage = () => {
    const [spotifyData, setSpotifyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const isProduction = import.meta.env.MODE === 'production';
    const backendUrl = isProduction ? import.meta.env.VITE_PROD_BACKEND_URL : 'http://localhost:5000';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/spotify-data`, {
                    withCredentials: true,
                });
                setSpotifyData(response.data);
            } catch (error) {
                console.error('Error fetching Spotify data:', error);
                setError('Failed to fetch Spotify data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return (
        <div className={styles.error}>
            <div className={styles.messageContainer}>
                {error}
                <button className={styles.retryButton} onClick={() => navigate("/")}>
                    Return to Login Page
                </button>
            </div>
        </div>
    );

    return (
        <div className={styles.mainPage}>
            <Navbar className={styles.nav} />
            <Sidebar className={styles.aside} />
            <Home className={styles.main} spotifyData={spotifyData} />
            <Footer className={styles.footer} />
            <MobileNavbar className={styles.mobileNavbar} />
        </div>
    );
};

export default MainPage;
