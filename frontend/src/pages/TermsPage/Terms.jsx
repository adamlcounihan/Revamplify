import styles from './TermsStyles.module.css';

const Terms = () => {
    return (
        <div className={styles.termsContainer}>
            <h1 className={styles.title}>Terms and Conditions</h1>
            <p className={styles.date}>Last Updated: 3rd January 2025</p>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>1. Introduction</h2>
                <p>
                    These Terms and Conditions (&quot;Terms&quot;) govern your use of the Revamplify project
                    website (&quot;Website&quot;). By accessing or using this Website, you agree to comply
                    with these Terms. If you do not agree, you must not use the Website.
                </p>

                <h2 className={styles.sectionTitle}>2. Disclaimer</h2>
                <p>
                    Revamplify is a personal, non-commercial project and is not affiliated with or
                    endorsed by Spotify, Inc. All design elements and content are original and
                    intended solely for experimental and educational purposes. Any resemblance to
                    Spotify&apos;s user interface is unintentional and purely coincidental.
                </p>
                <p>
                    This project is provided on an &quot;as is&quot; basis, with no warranties or guarantees
                    of functionality, reliability, or suitability for any purpose. Use it at your
                    own risk.
                </p>

                <h2 className={styles.sectionTitle}>3. Spotify Authentication</h2>
                <p>
                    To enable functionality, the Website uses OAuth2 authentication, which is a
                    secure method of allowing third-party applications (like Revamplify) to access
                    your Spotify account data with your consent. By logging in with your Spotify
                    account, you authorize the Website to access specific data associated with your
                    account, including but not limited to your playlists, top artists, and tracks.
                </p>
                <p>
                    This authentication process is powered by Spotify&apos;s OAuth2 mechanism, and the
                    Website does not store or process your Spotify login credentials. Instead, the
                    Website relies on Spotify&apos;s API to retrieve user data after you grant access.
                </p>
                <p>
                    By using this feature, you agree to Spotify&apos;s <a href="https://www.spotify.com/uk/legal/end-user-agreement/" target="_blank" className={styles.link}>Terms of Service</a> and
                    <a href="https://www.spotify.com/uk/legal/privacy-policy/" target="_blank" className={styles.link}> Privacy Policy</a>, and you acknowledge that the Website does not control how
                    Spotify handles your personal data. The Website only receives the data necessary
                    to provide the services and functionalities you use.
                </p>

                <h2 className={styles.sectionTitle}>4. Data Usage</h2>
                <p>
                    This Website does not store, collect, or process your personal data beyond what
                    is required for Spotify authentication. All user data is securely handled by
                    Spotify, and the Website does not retain or access this data.
                </p>

                <h2 className={styles.sectionTitle}>5. Limitations of Use</h2>
                <p>
                    The Website is intended for personal, non-commercial use only. You must not
                    attempt to reverse-engineer, reproduce, or misuse any part of the Website or its
                    functionality.
                </p>

                <h2 className={styles.sectionTitle}>6. Modifications to the Website</h2>
                <p>
                    The author reserves the right to modify or discontinue the Website at any time
                    without prior notice.
                </p>

                <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted under UK law, the author disclaims any liability
                    for damages, losses, or issues arising from your use or inability to use the
                    Website.
                </p>

                <h2 className={styles.sectionTitle}>8. Governing Law</h2>
                <p>
                    These Terms are governed by and construed in accordance with the laws of England
                    and Wales. Any disputes arising in connection with these Terms shall be subject
                    to the exclusive jurisdiction of the courts of England and Wales.
                </p>
            </div>
        </div>
    );
};

export default Terms;
