import { useEffect, useState } from "react";
import styles from "./HomeStyles.module.css";

const Home = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Get the profile from localStorage
        const storedProfile = localStorage.getItem("profile");

        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

    return (
        <main className={styles.home}>
            {profile ? (
                <div>
                    <h1>Welcome, {profile.display_name}!</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};

export default Home;
