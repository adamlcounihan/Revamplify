import { useState } from "react";
import styles from "./FooterStyles.module.css";
import {
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdFastRewind,
    MdFastForward,
    MdVolumeUp,
    MdVolumeOff,
    MdOutlineShuffle,
    MdOutlineRepeat,
} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(100);
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

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
    };

    const currentTime = formatTime((progress / 100) * totalDuration);
    const progressPercent = (progress / 100) * 100;
    const volumePercent = (volume / 100) * 100;

    return (
        <footer className={styles.footer}>
            <section className={styles.leftSection}>
                <img src="/TameImpala.webp" alt="Album Cover" className={styles.albumCover} />
                <div className={styles.trackInfo}>
                    <p className={styles.trackTitle}>Borderline</p>
                    <p className={styles.artistName}>Tame Impala</p>
                </div>
                <div className={styles.iconContainer}>
                    <FaRegHeart
                        className={`${styles.heartIcon} ${styles.icon} ${isLiked ? styles.active : ''}`}
                        onClick={() => setIsLiked(!isLiked)}
                    />
                    <div className={styles.tooltip}>{isLiked ? "Unlike" : "Like"}</div>
                </div>
                <div className={styles.progressContainer}>
                    <span className={styles.currentTime}>{currentTime}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleProgressChange}
                        className={styles.trackProgress}
                        style={{
                            background: `linear-gradient(to right, green ${progressPercent}%, gray ${progressPercent}%)`
                        }} // Dynamic background color based on progress
                        aria-label="Track Progress"
                    />
                    <span className={styles.trackLength}>{formatTime(totalDuration)}</span>
                </div>
            </section>

            <section className={styles.centerSection}>
                <div className={styles.iconContainer}>
                    <MdOutlineShuffle
                        className={`${styles.icon} ${isShuffleActive ? styles.active : ''}`}
                        onClick={() => setIsShuffleActive(!isShuffleActive)}
                    />
                    <div className={styles.tooltip}>Shuffle</div>
                </div>
                <div className={styles.iconContainer}>
                    <MdFastRewind className={styles.icon} />
                    <div className={styles.tooltip}>Previous</div>
                </div>
                <div className={styles.iconContainer}>
                    {isPlaying ? (
                        <MdOutlinePauseCircleFilled
                            className={styles.playIcon}
                            onClick={() => setIsPlaying(false)}
                            aria-label="Pause"
                            role="button"
                        />
                    ) : (
                        <MdOutlinePlayCircleFilled
                            className={styles.playIcon}
                            onClick={() => setIsPlaying(true)}
                            aria-label="Play"
                            role="button"
                        />
                    )}
                    <div className={styles.tooltip}>{isPlaying ? "Pause" : "Play"}</div>
                </div>
                <div className={styles.iconContainer}>
                    <MdFastForward className={styles.icon} />
                    <div className={styles.tooltip}>Next</div>
                </div>
                <div className={styles.iconContainer}>
                    <MdOutlineRepeat
                        className={`${styles.icon} ${isLoopActive ? styles.active : ''}`}
                        onClick={() => setIsLoopActive(!isLoopActive)}
                    />
                    <div className={styles.tooltip}>Repeat</div>
                </div>
            </section>

            <section className={styles.rightSection}>
                <div className={styles.iconContainer}>
                    {isMuted ? (
                        <MdVolumeOff
                            className={styles.icon}
                            onClick={() => setIsMuted(false)}
                            aria-label="Unmute"
                        />
                    ) : (
                        <MdVolumeUp
                            className={styles.icon}
                            onClick={() => setIsMuted(true)}
                            aria-label="Mute"
                        />
                    )}
                    <div className={styles.tooltip}>{isMuted ? "Unmute" : "Mute"}</div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className={styles.volumeControl}
                    style={{
                        background: `linear-gradient(to right, green ${volumePercent}%, gray ${volumePercent}%)`
                    }} // Dynamic background color based on volume
                    aria-label="Volume Control"
                    disabled={isMuted}
                />
            </section>
        </footer>
    );
};

export default Footer;
