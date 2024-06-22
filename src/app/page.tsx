import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.topbar}>
                <p className={styles.text_logo}>Aditya Bavadekar</p>
            </div>
            <h1>Welcome to My GitHub Page</h1>

            <div className={styles.h1_bg_sections_list}>
                <div className={styles.h2_bg_section}>
                    <h2 className={styles.h2_bg_header}>About Me</h2>
                    <div className={styles.h2_bg_description}>
                        <p>
                            Hello! I'm Aditya Bavadekar, CSE Student from India.
                            Always intrested in new technology.
                        </p>
                    </div>
                </div>

                <div className={styles.h2_bg_section}>
                    <h2 className={styles.h2_bg_header}>Intrests</h2>
                    <div className={styles.h2_bg_description}>
                        <p>
                            Kotlin, Android, Python, C++, App Development,
                            Leetcode solving
                        </p>
                    </div>
                </div>

                <div className={styles.h2_bg_section}>
                    <h2 className={styles.h2_bg_header}>Education</h2>
                    <div className={styles.h2_bg_description}>
                        <p>
                            B.Tech. in Computer Science & Engineering (Ongoing)
                        </p>
                    </div>
                </div>

                <div className={styles.h2_bg_section}>
                    <h2 className={styles.h2_bg_header}>Projects</h2>
                    <div className={styles.h2_bg_description}>
                        <p>
                            Hello! I'm Aditya Bavadekar, CSE Student from India.
                            Always intrested in new technology.
                        </p>
                        <p className={styles.h2_bg_description_header}>
                            Messenger
                        </p>
                        <p>
                            - A simple, private, and secure messenger for
                            Android.
                        </p>
                        <p className={styles.h2_bg_description_header}>
                            AndroidProjectGenerator
                        </p>
                        <p>
                            - Python script that generates an Android project
                            provided some information.
                        </p>
                        <p className={styles.h2_bg_description_header}>
                            PinLog
                        </p>
                        <p>
                            - An easy-to-use and powerful Android logging
                            library. It supports storing logs for later
                            retrieval, saving logs in a file, and saving logs in
                            a zip file.
                        </p>
                    </div>
                </div>

                <div className={styles.h2_bg_section}>
                    <h2 className={styles.h2_bg_header}>Contact Me</h2>
                    <div className={styles.h2_bg_description}>
                        <p>
                            Feel free to reach out to me via email for any
                            inquiries or collaborations. You can find me at{" "}
                            <a href="mailto:projectsandstudiesaditya@gmail.com">
                                projectsandstudiesaditya@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <a
                    href="https://github.com/AdityaBavadekar?tab=repositories"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>
                        Projects <span>-&gt;</span>
                    </h3>
                    <p>
                        View Open-Source projects created by me.
                    </p>
                </a>
            </div>

            <footer className={styles.footer}>
                <div className={styles.divider}></div>
                <div className={styles.footer_container}>
                    <div className={styles.text_logo}>
                        <p>Aditya Bavadekar</p>
                    </div>

                    <div className={styles.social_media_container}>
                        <ul className={styles.social_media_list}>
                            <li className={styles.social_media_item}>
                                <a
                                    href="https://github.com/AdityaBavadekar"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-github-fill footer-icon"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        Github
                                    </span>
                                </a>
                            </li>
                            <li className={styles.social_media_item}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-twitter-fill"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        Twitter
                                    </span>
                                </a>
                            </li>
                            <li className={styles.social_media_item}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-facebook-fill footer-icon"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li className={styles.social_media_item}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-telegram-fill footer-icon"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        Telegram
                                    </span>
                                </a>
                            </li>
                            <li className={styles.social_media_item}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-linkedin-fill footer-icon"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        LinkedIn
                                    </span>
                                </a>
                            </li>
                            <li className={styles.social_media_item}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-youtube-fill footer-icon"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        YouTube
                                    </span>
                                </a>
                            </li>
                            <li className={styles.social_media_item}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className={styles.social_media_link}
                                >
                                    <div className={styles.footer_icon}>
                                        <i className="ri-instagram-fill footer-icon"></i>
                                    </div>
                                    <span className="social_media_tooltip">
                                        Instagram
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className={styles.copyright_notice}>
                        Copyright &copy; 2024 Aditya Bavadekar. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
