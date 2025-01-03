import PropTypes from 'prop-types';
import styles from './HomeStyles.module.css';

const Home = ({ spotifyData, artistFollowingCount, topArtist, topTrack }) => {
    if (!spotifyData) return <div className={styles.loadingContainer}>Loading...</div>;

    return (
        <div className={styles.homeContainer}>
            <div className={styles.profileBanner}>
                {spotifyData.images?.[0]?.url && (
                    <img
                        src={spotifyData.images[0].url}
                        alt="Profile"
                        className={styles.profileImage}
                    />
                )}
                <div className={styles.profileInfo}>
                    <h2 className={styles.welcomeMessage}>
                        Welcome, <span className={styles.username}>{spotifyData.display_name}</span>
                    </h2>
                    <p className={styles.followers}>Followers: {spotifyData.followers?.total}</p>
                    <p className={styles.following}>Following Artists: {artistFollowingCount}</p>
                </div>

                <div className={styles.topSectionsContainer}>
                    {topArtist && (
                        <div className={styles.topArtistContainer}>
                            <p className={styles.topArtistLabel}>
                                Top Artist: <br/>
                                <span>{topArtist.name}</span>
                            </p>
                            {topArtist.images?.[0]?.url && (
                                <img
                                    src={topArtist.images[0].url}
                                    alt={topArtist.name}
                                    className={styles.artistImage}
                                />
                            )}
                        </div>
                    )}
                    {topTrack && (
                        <div className={styles.topTrackContainer}>
                            <p className={styles.topTrackLabel}>
                                Top Song: <br/>
                                <span>{topTrack.name}</span>
                            </p>
                            {topTrack.album?.images?.[0]?.url && (
                                <img
                                    src={topTrack.album.images[0].url}
                                    alt={topTrack.name}
                                    className={styles.trackImage}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.featuredPlaylists}>
                <h3 className={styles.playlistTitle}>Featured Playlists</h3>
                <div className={styles.playlists}>
                    {spotifyData.playlists?.map((playlist, index) => (
                        <div key={index} className={styles.playlistCard}>
                            <img
                                src={playlist.images?.[0]?.url || 'https://via.placeholder.com/150'}
                                alt={playlist.name}
                                className={styles.playlistImage}
                            />
                            <h4 className={styles.playlistName}>{playlist.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    spotifyData: PropTypes.shape({
        display_name: PropTypes.string,
        email: PropTypes.string,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
            })
        ),
        followers: PropTypes.shape({
            total: PropTypes.number,
        }),
        playlists: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string,
                    })
                ),
            })
        ),
    }),
    artistFollowingCount: PropTypes.number,
    topArtist: PropTypes.shape({
        name: PropTypes.string,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
            })
        ),
    }),
    topTrack: PropTypes.shape({
        name: PropTypes.string,
        album: PropTypes.shape({
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string,
                })
            ),
        }),
    }),
};

export default Home;
