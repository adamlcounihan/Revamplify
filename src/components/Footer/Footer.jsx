import { useState } from "react";
import styles from "./FooterStyles.module.css";
import { MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled, MdFastRewind, MdFastForward,
    MdVolumeUp, MdVolumeOff, MdOutlineShuffle, MdOutlineRepeat } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
    const [progress, setProgress] = useState(0);
    const [isShuffleActive, setIsShuffleActive] = useState(false);
    const [isLoopActive, setIsLoopActive] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

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
                <FaRegHeart
                    className={`${styles.icon} ${isLiked ? styles.active : ''}`}
                    onClick={() => setIsLiked(!isLiked)}
                />
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
                <MdOutlineShuffle
                    className={`${styles.icon} ${isShuffleActive ? styles.active : ''}`}
                    onClick={() => setIsShuffleActive(!isShuffleActive)}
                />
                <MdFastRewind className={styles.icon} />
                {isPlaying ? (
                    <MdOutlinePauseCircleFilled
                        className={styles.playIcon}
                        onClick={() => setIsPlaying(false)}
                    />
                ) : (
                    <MdOutlinePlayCircleFilled
                        className={styles.playIcon}
                        onClick={() => setIsPlaying(true)}
                    />
                )}
                <MdFastForward className={styles.icon} />
                <MdOutlineRepeat
                    className={`${styles.icon} ${isLoopActive ? styles.active : ''}`}
                    onClick={() => setIsLoopActive(!isLoopActive)}
                />
            </section>

            <section className={styles.rightSection}>
                {isMuted ? (
                    <MdVolumeOff
                        className={styles.icon}
                        onClick={() => setIsMuted(false)}
                    />
                ) : (
                    <MdVolumeUp
                        className={styles.icon}
                        onClick={() => setIsMuted(true)}
                    />
                )}
                <input
                    type="range"
                    min="0"
                    max="100"
                    className={styles.volumeControl}
                    aria-label="Volume Control"
                    disabled={isMuted}
                />
            </section>
        </footer>
    );
};

export default Footer;
