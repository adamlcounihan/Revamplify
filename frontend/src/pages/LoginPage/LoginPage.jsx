
const LoginPage = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:5000/login';
    };

    return (
        <div className="login-page">
            <h1>Login to Spotify</h1>
            <button onClick={handleLogin}>Log In with Spotify</button>
        </div>
    );
};

export default LoginPage;
