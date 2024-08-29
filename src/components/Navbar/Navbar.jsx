import { useState } from "react";
import styles from './NavbarStyles.module.css';
import { MdOutlineSearch, MdClose } from "react-icons/md";

function Navbar() {
    const [searchValue, setSearchValue] = useState("");

    const handleClearSearch = () => {
        setSearchValue("");
    };

    return (
        <div className={styles.navbar}>
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
                alt="Spotify Logo"
                className={styles.logo}
            />
            <div className={styles.searchWrapper}>
                <input
                    className={styles.searchInput}
                    type="search"
                    placeholder="What do you want to play?"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <MdOutlineSearch className={styles.searchIcon} />
                {searchValue && (
                    <MdClose
                        className={styles.clearIcon}
                        onClick={handleClearSearch}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;
