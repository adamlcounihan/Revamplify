import styles from './NavbarStyles.module.css';
import { MdOutlineSearch } from "react-icons/md";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
                alt="Spotify Logo"
                className={styles.logo}
            />
            <div className={styles.searchWrapper}>
                <input
                    className={styles.searchInput}
                    type="search"
                    placeholder="What do you want to play?"
                    aria-label="Search"
                />
                <MdOutlineSearch className={styles.searchIcon} />
            </div>
        </div>
    );
}

export default Navbar;
