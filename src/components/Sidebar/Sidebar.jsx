import styles from './SidebarStyles.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.section}>
                <ul>
                    <li>Home</li>
                    <li>History</li>
                    <li>DJ</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.sectionHeading}>Library</h3>
                <ul>
                    <li>Playlists</li>
                    <li>Artists</li>
                    <li>Albums</li>
                    <li>Liked Songs</li>
                    <li>Your Podcasts</li>
                    <li>Your Audiobooks</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.sectionHeading}>Discover</h3>
                <ul>
                    <li>New Releases</li>
                    <li>Charts</li>
                    <li>Genres</li>
                    <li>New Podcasts</li>
                    <li>New Audiobooks</li>
                </ul>
            </div>
            <div className={styles.section}>
                <ul>
                    <li>Account Settings</li>
                    <li>Help &amp; Support</li>
                    <li>What&apos;s New</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
