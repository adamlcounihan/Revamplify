import { useState } from "react";
import styles from "./FooterStyles.module.css";
import { MdOutlinePlayCircleFilled, MdFastRewind, MdFastForward,
    MdVolumeUp, MdOutlineShuffle, MdOutlineRepeat } from "react-icons/md";
import { FaRegHeart  } from "react-icons/fa";

const Footer = () => {
    const [progress, setProgress] = useState(0);
    const totalDuration = 237; // Total duration in seconds

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleProgressChange = (e) => {
        const newProgress = e.target.value;
        setProgress(newProgress);
    };

    const currentTime = formatTime((progress / 100) * totalDuration);

    return (
        <footer className={styles.footer}>
            <section className={styles.leftSection}>
                <img src="src/assets/TameImpala.webp" alt="Album Cover" className={styles.albumCover} />
                <div className={styles.trackInfo}>
                    <p className={styles.trackTitle}>Borderline</p>
                    <p className={styles.artistName}>Tame Impala</p>
                </div>
                <FaRegHeart className={styles.icon}/>
                <div className={styles.progressContainer}>
                    <span className={styles.currentTime}>{currentTime}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleProgressChange}
                        className={styles.trackProgress}
                        aria-label="Track Progress"
                    />
                    <span className={styles.trackLength}>{formatTime(totalDuration)}</span>
                </div>
            </section>

            <section className={styles.centerSection}>
                    <MdOutlineShuffle className={styles.icon} />
                    <MdFastRewind className={styles.icon} />
                    <MdOutlinePlayCircleFilled className={styles.playIcon} />
                    <MdFastForward className={styles.icon} />
                    <MdOutlineRepeat className={styles.icon} />
            </section>

            <section className={styles.rightSection}>
                    <MdVolumeUp className={`${styles.icon} ${styles.volumeIcon}`}/>
                <input
                    type="range"
                    min="0"
                    max="100"
                    className={styles.volumeControl}
                    aria-label="Volume Control"
                />
            </section>
        </footer>
    );
};

export default Footer;
