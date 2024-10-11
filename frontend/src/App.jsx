import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages//LoginPage/LoginPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;
