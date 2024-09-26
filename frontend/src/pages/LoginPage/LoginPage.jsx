import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginPageStyles.module.css';
import logo from '/logo.png';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/check-auth', { withCredentials: true });

                if (response.data.authenticated) {
                    // If authenticated, redirect to the main page
                    navigate('/main');
                }
            } catch (error) {
                console.error('User not authenticated, staying on login page', error);
            }
        };

        checkAuth();
    }, [navigate]);

    const handleLogin = () => {
        window.location.href = 'http://localhost:5000/login';
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <img src={logo} alt="Revamplify Logo" className={styles.logo} />
                <h1 className={styles.title}>Welcome to Revamplify</h1>
                <p className={styles.subtitle}>Revamp Your Music Experience</p>
                <button className={styles.loginButton} onClick={handleLogin}>
                    Log In with Spotify
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
