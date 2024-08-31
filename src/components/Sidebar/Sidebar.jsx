import { useState } from 'react';
import styles from './SidebarStyles.module.css';
import { MdHome, MdHistory, MdAccountCircle, MdOutlinePlaylistPlay, MdOutlinePersonOutline, MdAlbum, MdFavoriteBorder,
    MdOutlinePodcasts, MdOutlineMenuBook, MdOutlineNewReleases, MdInsertChartOutlined, MdOutlineMusicNote,
    MdOutlineSettings, MdHelpOutline, MdOutlineLineWeight} from "react-icons/md";

const Sidebar = () => {
    const [isPlaylistsOpen, setPlaylistsOpen] = useState(false);

    const togglePlaylists = () => {
        setPlaylistsOpen(!isPlaylistsOpen);
    };

    return (
        <aside className={styles.sidebar}>
            <section className={styles.section}>
                <header>
                    <h3 className={styles.sectionHeading}>Overview</h3>
                </header>
                <ul>
                    <li><MdHome className={styles.icon}/> Home</li>
                    <li><MdHistory className={styles.icon}/>History</li>
                    <li><MdAccountCircle className={styles.icon}/>Profile</li>
                </ul>
            </section>
            <section className={styles.section}>
                <header>
                    <h3 className={styles.sectionHeading}>Library</h3>
                </header>
                <ul>
                    <li onClick={togglePlaylists}>
                        <MdOutlinePlaylistPlay className={styles.icon}/>Playlists
                        <span className={`${styles.arrow} ${isPlaylistsOpen ? styles.open : ''}`}>▼</span>
                    </li>
                    {isPlaylistsOpen && (
                        <ul className={styles.submenu}>
                            <li>
                                <div>2000s Mix</div>
                                <div className={styles.playlistDescription}>by Spotify</div>
                            </li>
                            <li>
                                <div>Your Top Songs 2023</div>
                                <div className={styles.playlistDescription}>by Spotify</div>
                            </li>
                            <li>
                                <div>Folk &amp; Acoustic Mix</div>
                                <div className={styles.playlistDescription}>by Adam</div>
                            </li>
                            <li>
                                <div>Happy Mix</div>
                                <div className={styles.playlistDescription}>by Spotify</div>
                            </li>
                            <li>
                                <div>Driving</div>
                                <div className={styles.playlistDescription}>by John Smith</div>
                            </li>
                        </ul>
                    )}
                    <li><MdOutlinePersonOutline className={styles.icon}/>Artists</li>
                    <li><MdAlbum className={styles.icon}/>Albums</li>
                    <li><MdFavoriteBorder className={styles.icon}/>Liked Songs</li>
                    <li><MdOutlinePodcasts className={styles.icon}/>Your Podcasts</li>
                    <li><MdOutlineMenuBook className={styles.icon}/>Your Audiobooks</li>
                </ul>
            </section>
            <section className={styles.section}>
                <header>
                    <h3 className={styles.sectionHeading}>Discover</h3>
                </header>
                <ul>
                    <li><MdOutlineNewReleases className={styles.icon}/>New Releases</li>
                    <li><MdInsertChartOutlined className={styles.icon}/>Charts</li>
                    <li><MdOutlineMusicNote className={styles.icon}/>Genres</li>
                    <li><MdOutlinePodcasts className={styles.icon}/>New Podcasts</li>
                    <li><MdOutlineMenuBook className={styles.icon}/>New Audiobooks</li>
                </ul>
            </section>
            <section className={styles.section}>
                <header>
                    <h3 className={styles.sectionHeading}>User Services</h3>
                </header>
                <ul>
                    <li><MdOutlineSettings className={styles.icon}/>Account Settings</li>
                    <li><MdHelpOutline className={styles.icon}/>Help &amp; Support</li>
                    <li><MdOutlineLineWeight className={styles.icon}/>What&apos;s New</li>
                </ul>
            </section>
        </aside>
    );
};

export default Sidebar;
