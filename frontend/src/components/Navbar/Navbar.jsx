import { useState } from "react";
import styles from './NavbarStyles.module.css';
import { MdOutlineSearch, MdClose, MdOutlineNotifications, MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleClearSearch = () => {
        setSearchValue("");
    };

    // Logout function
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/logout', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                console.log('Logout successful');
                navigate('/');
            } else {
                console.error('Logout failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoWrapper}>
                <a href="/" aria-label="Home" className={styles.logoWrapper}>
                    <img
                        src="/logo.png"
                        alt="Spotify Logo"
                        className={styles.logo}
                    />
                    <span className={styles.brandText}>Revamplify</span>
                </a>
            </div>
            <form className={styles.searchWrapper} role="search">
                <input
                    className={styles.searchInput}
                    type="search"
                    placeholder="What do you want to play?"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <MdOutlineSearch className={styles.searchIcon} aria-hidden="true" />
                {searchValue && (
                    <button
                        type="button"
                        className={styles.clearIcon}
                        onClick={handleClearSearch}
                        aria-label="Clear search"
                    >
                        <MdClose />
                    </button>
                )}
            </form>
            <section className={styles.iconWrapper} aria-label="User navigation">
                <button className={styles.notificationButton} aria-label="Notifications">
                    <MdOutlineNotifications className={styles.notificationIcon} />
                </button>
                <img
                    src="/profile-img.webp"
                    alt="profile icon"
                    className={styles.profileIcon}
                />
                <button
                    className={styles.logoutButton}
                    onClick={handleLogout}
                    aria-label="Logout"
                >
                    <MdLogout />
                </button>
            </section>
        </nav>
    );
}

export default Navbar;
