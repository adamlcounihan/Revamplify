import { useState } from "react";
import styles from './NavbarStyles.module.css';
import { MdOutlineSearch, MdClose, MdOutlineNotifications } from "react-icons/md";

function Navbar() {
    const [searchValue, setSearchValue] = useState("");

    const handleClearSearch = () => {
        setSearchValue("");
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
            </section>
        </nav>
    );
}

export default Navbar;
