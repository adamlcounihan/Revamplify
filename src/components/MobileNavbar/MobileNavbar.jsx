import styles from './MobileNavbarStyles.module.css';
import { MdHome, MdSearch, MdLibraryMusic, MdSettings } from 'react-icons/md';

function MobileNavbar() {
    return (
        <nav className={styles.mobileNavbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>
                        <MdHome className={styles.icon} />
                        <span className={styles.label}>Home</span>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>
                        <MdSearch className={styles.icon} />
                        <span className={styles.label}>Search</span>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>
                        <MdLibraryMusic className={styles.icon} />
                        <span className={styles.label}>Library</span>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>
                        <MdSettings className={styles.icon} />
                        <span className={styles.label}>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MobileNavbar;
