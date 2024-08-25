import styles from './SidebarStyles.module.css';
import { MdHome, MdHistory, MdAccountCircle, MdOutlinePlaylistPlay, MdOutlinePersonOutline, MdAlbum, MdFavoriteBorder,
    MdOutlinePodcasts, MdOutlineMenuBook, MdOutlineNewReleases, MdInsertChartOutlined, MdOutlineMusicNote,
    MdOutlineSettings, MdHelpOutline, MdOutlineLineWeight} from "react-icons/md";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.section}>
                <ul>
                    <li><MdHome className={styles.icon}/> Home</li>
                    <li><MdHistory className={styles.icon}/>History</li>
                    <li><MdAccountCircle className={styles.icon}/>Profile</li>
                </ul>
            </div>
            <div className={styles.section}>
            <h3 className={styles.sectionHeading}>Library</h3>
                <ul>
                    <li><MdOutlinePlaylistPlay className={styles.icon}/>Playlists</li>
                    <li><MdOutlinePersonOutline className={styles.icon}/>Artists</li>
                    <li><MdAlbum className={styles.icon}/>Albums</li>
                    <li><MdFavoriteBorder className={styles.icon}/>Liked Songs</li>
                    <li><MdOutlinePodcasts className={styles.icon}/>Your Podcasts</li>
                    <li><MdOutlineMenuBook className={styles.icon}/>Your Audiobooks</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.sectionHeading}>Discover</h3>
                <ul>
                    <li><MdOutlineNewReleases className={styles.icon}/>New Releases</li>
                    <li><MdInsertChartOutlined className={styles.icon}/>Charts</li>
                    <li><MdOutlineMusicNote className={styles.icon}/>Genres</li>
                    <li><MdOutlinePodcasts className={styles.icon}/>New Podcasts</li>
                    <li><MdOutlineMenuBook className={styles.icon}/>New Audiobooks</li>
                </ul>
            </div>
            <div className={styles.section}>
                <ul>
                    <li><MdOutlineSettings className={styles.icon}/>Account Settings</li>
                    <li><MdHelpOutline className={styles.icon}/>Help &amp; Support</li>
                    <li><MdOutlineLineWeight className={styles.icon}/>What&apos;s New</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
