import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import MobileNavbar from './components/MobileNavbar/MobileNavbar.jsx';

function App() {
    return (
        <div className="layout">
            <Navbar className="nav"/>
            <Sidebar className="aside"/>
            <Home className="main"/>
            <Footer className="footer"/>
            <MobileNavbar className="mobileNavbar"/>
        </div>
    );
}

export default App;
