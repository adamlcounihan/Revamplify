import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
    return (
        <div className="layout">
            <Navbar className="nav"/>
            <Sidebar className="aside"/>
            <Home className="main"/>
        </div>
    );
}

export default App;
