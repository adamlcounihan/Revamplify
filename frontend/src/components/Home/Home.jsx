import PropTypes from 'prop-types';
import styles from './HomeStyles.module.css';

const Home = ({ spotifyData, artistFollowingCount }) => {
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
};

export default Home;
