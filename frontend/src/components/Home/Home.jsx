import PropTypes from 'prop-types';

const Home = ({ spotifyData }) => {
    if (!spotifyData) return <p>Loading...</p>;

    return (
        <div className="home">
            <h2>Welcome, {spotifyData.display_name}</h2>
            <p>Email: {spotifyData.email}</p>
            {spotifyData.images?.[0]?.url && (
                <img src={spotifyData.images[0].url} alt="Profile" width="100" />
            )}
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
    }),
};

export default Home;