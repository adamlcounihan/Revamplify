import { useState, useEffect } from "react";
import styles from './NavbarStyles.module.css';
import { MdOutlineSearch, MdClose, MdOutlineNotifications } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [searchValue, setSearchValue] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('http://localhost:5000/spotify-data', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.images && data.images.length > 0) {
                        setProfilePic(data.images[0].url);
                    }
                } else {
                    console.error('Failed to fetch profile data:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        fetchProfileData();
    }, []);

    const handleClearSearch = () => {
        setSearchValue("");
    };

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
                <a href="/main" aria-label="Home" className={styles.logoWrapper}>
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
                <div
                    className={styles.iconContainer}
                    onMouseEnter={() => setHoveredIcon("notification")}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <button className={styles.notificationButton} aria-label="Notifications">
                        <MdOutlineNotifications className={styles.notificationIcon} />
                    </button>
                    {hoveredIcon === "notification" && (
                        <div className={styles.tooltip}>Notifications</div>
                    )}
                </div>

                {profilePic ? (
                    <div
                        className={styles.iconContainer}
                        onMouseEnter={() => setHoveredIcon("profile")}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <div className={styles.profileMenu}>
                            <img
                                src={profilePic}
                                alt="User profile"
                                className={styles.profileIcon}
                                onClick={() => setShowDropdown(!showDropdown)}
                            />
                            {/* Tooltip should only appear if the dropdown is not shown */}
                            {hoveredIcon === "profile" && !showDropdown && (
                                <div className={styles.tooltip}>Profile</div>
                            )}
                            {showDropdown && (
                                <div className={styles.dropdownMenu} role="menu">
                                    <button
                                        className={styles.dropdownItem}
                                        aria-label="Profile"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        className={styles.dropdownItem}
                                        onClick={handleLogout}
                                        aria-label="Log out"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
            </section>
        </nav>
    );
}

export default Navbar;
