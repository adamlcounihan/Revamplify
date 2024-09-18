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

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get('access_token');

        if (accessToken) {
            axios
                .get('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    setSpotifyData(response.data);
                })
                .catch((error) => console.error('Error fetching Spotify data:', error));
        }
    }, []);

    return (
        <div className={styles.mainPage}>
            <Navbar className={styles.nav}/>
            <Sidebar className={styles.aside}/>
            <Home className={styles.main} spotifyData={spotifyData} />
            <Footer className={styles.footer}/>
            <MobileNavbar className={styles.mobileNavbar}/>
        </div>
    );
};

export default MainPage;
