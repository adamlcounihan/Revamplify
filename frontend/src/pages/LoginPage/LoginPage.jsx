import styles from './LoginPageStyles.module.css';
import logo from '/logo.png';

const isProduction = process.env.NODE_ENV === 'production';
const backendUrl = isProduction ? process.env.PROD_BACKEND_URL : 'http://localhost:5000';
const LoginPage = () => {
    const handleLogin = () => {
        window.location.href = `${backendUrl}/login`;
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
