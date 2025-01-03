import styles from './PrivacyStyles.module.css';

const Privacy = () => {
    return (
        <div className={styles.privacyContainer}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.date}>Last Updated: 3rd January 2025</p>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                <p>
                    We collect minimal personal information from you, specifically related to the use of Spotify’s
                    authentication services.
                    When you log in via Spotify, we access your Spotify account information as permitted by their API.
                    This includes:
                </p>
                <ul>
                    <li>Your Spotify username</li>
                    <li>Your public profile information (such as display name and profile picture)</li>
                    <li>Your playlists and music preferences</li>
                    <li>Authentication tokens for the session</li>
                </ul>

                <h2 className={styles.sectionTitle}>2. Cookies</h2>
                <p>
                    This website uses essential <strong>functional cookies</strong> to ensure core functionalities, such
                    as Spotify account authentication. These cookies are mandatory for the website to operate properly
                    and cannot be disabled. By using this website, you consent to the use of these cookies.
                </p>
                <p><strong>Types of Cookies Used:</strong></p>
                <ul>
                    <li><strong>Authentication Cookies</strong>: Used for authenticating users and ensuring you remain
                        logged in during your session.
                    </li>
                    <li><strong>Session Cookies</strong>: Allow you to maintain session integrity while using the
                        website.
                    </li>
                </ul>
                <p><strong>No tracking, marketing, or analytics cookies</strong> are used on this website. We do not
                    collect any data for advertising or analytics purposes.</p>

                <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
                <p>
                    We use the information collected through Spotify authentication solely to provide the following
                    services:
                </p>
                <ul>
                    <li>Allow users to authenticate with their Spotify account.</li>
                    <li>Display playlists, song preferences, and other personalized data from your Spotify account.</li>
                    <li>Ensure a secure and functioning user experience during interactions with the website.</li>
                </ul>

                <h2 className={styles.sectionTitle}>4. Third-Party Services</h2>
                <p>
                    This website integrates with <strong>Spotify</strong> for user authentication and access to your
                    Spotify account data. Spotify’s privacy practices govern how your data is handled during
                    authentication. Please refer to Spotify’s <a href="https://www.spotify.com/uk/legal/privacy-policy/"
                                                                 target="_blank" className={styles.link}>Privacy
                    Policy</a> for more details.
                </p>

                <h2 className={styles.sectionTitle}>5. Data Security</h2>
                <p>
                    We take reasonable precautions to protect the information provided by you, including the use of
                    secure encryption protocols during Spotify authentication. However, no website or online service can
                    be fully secure, and we cannot guarantee the absolute security of your information.
                </p>

                <h2 className={styles.sectionTitle}>6. Your Rights</h2>
                <p>As a user, you have the following rights regarding your data:</p>
                <ul>
                    <li><strong>Access</strong>: You have the ability to view and manage the data stored in your
                        browser’s cookies (e.g., authentication tokens such as `spotifyaccesstoken`,
                        `spotifyrefreshtoken`, and `spotifytokenexpiry`).
                    </li>
                    <li><strong>Correction</strong>: Since all data is stored locally in your browser’s cookies, you can
                        manage this data by clearing the cookies in your browser. We do not have control over or access
                        to these cookies, so we cannot correct or modify the data stored in them.
                    </li>
                    <li><strong>Deletion</strong>: As no personal data is stored on our servers, you have the ability to
                        clear or delete any data stored in your browser’s cookies (e.g., authentication tokens). You can
                        do this by clearing cookies through your browser settings.
                    </li>
                </ul>


                <h2 className={styles.sectionTitle}>7. Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated "Last Updated" date. We encourage you to review this policy periodically to stay informed
                    about how we are protecting your information.
                </p>
            </div>
        </div>
    );
};

export default Privacy;
