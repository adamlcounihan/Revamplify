import { useEffect, useState } from 'react';
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/spotify-data', {
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
    if (error) return <div className={styles.error}>{error}</div>;

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
