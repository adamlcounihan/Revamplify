import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Terms from './pages/TermsPage/Terms.jsx';
import Privacy from './pages/PrivacyPage/Privacy.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </Router>
    );
}

export default App;
