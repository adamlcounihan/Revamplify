import { useState, useEffect } from 'react';
import styles from './SidebarStyles.module.css';
import { MdHome, MdHistory, MdOutlinePlaylistPlay, MdOutlinePersonOutline, MdAlbum, MdFavoriteBorder,
    MdOutlinePodcasts, MdOutlineMenuBook, MdOutlineNewReleases, MdInsertChartOutlined, MdOutlineMusicNote,
    MdOutlineSettings, MdHelpOutline, MdOutlineLineWeight} from "react-icons/md";
import axios from 'axios';

const Sidebar = () => {
    const [isPlaylistsOpen, setPlaylistsOpen] = useState(false);
    const [playlists, setPlaylists] = useState([]); // State to hold the playlists

    const togglePlaylists = () => {
        setPlaylistsOpen(!isPlaylistsOpen);
    };

    // Fetch playlists when the component mounts
    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get('http://localhost:5000/spotify-playlists', { withCredentials: true });
                setPlaylists(response.data); // Set the fetched playlists to state
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <aside className={styles.sidebar}>
            <section className={styles.section}>
                <header>
                    <h3 className={styles.sectionHeading}>Library</h3>
                </header>

                <ul>
                    <li><MdHome className={styles.icon}/> Home</li>
                    <li onClick={togglePlaylists}>
                        <MdOutlinePlaylistPlay className={styles.icon}/>Playlists
                        <span className={`${styles.arrow} ${isPlaylistsOpen ? styles.open : ''}`}>▼</span>
                    </li>
                    {isPlaylistsOpen && (
                        <ul className={styles.submenu}>
                            {playlists && playlists.length > 0 ? (
                                playlists.map((playlist) => (
                                    <li key={playlist.id}>
                                        <div>{playlist.name}</div>
                                        <div className={styles.playlistDescription}>by {playlist.owner.display_name}</div>
                                    </li>
                                ))
                            ) : (
                                <li>No playlists found</li> // Handle case when no playlists are fetched
                            )}
                        </ul>
                    )}
                    <li><MdOutlinePersonOutline className={styles.icon}/>Artists</li>
                    <li><MdAlbum className={styles.icon}/>Albums</li>
                    <li><MdFavoriteBorder className={styles.icon}/>Liked Songs</li>
                    <li><MdOutlinePodcasts className={styles.icon}/>Your Podcasts</li>
                    <li><MdOutlineMenuBook className={styles.icon}/>Your Audiobooks</li>
                    <li><MdHistory className={styles.icon}/>Listening History</li>
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
