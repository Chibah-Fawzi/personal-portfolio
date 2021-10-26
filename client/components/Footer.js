
import React from 'react'
import styles from '../styles/Footer.module.scss'


export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <div className={styles.header}>
                    <h1>F.C</h1>
                </div>
                <hr />
                <div className={styles.infos}>
                    <ul className={styles.links}>
                        <h1>Links</h1>
                        <div className={styles.linksList}>
                            <div className={styles.left}>
                                <li>Work</li>
                                <li>Technologies</li>
                            </div>
                            <div className={styles.right}>
                                <li>About</li>
                                <li>Education</li>
                                <li>Contact</li>
                            </div>
                        </div>
                    </ul>
                    <ul className={styles.contact}>
                        <h1>Get in touch</h1>
                        <div className={styles.contactList}>
                            <div className={styles.left}>
                                <li>(email)fawzichibah@gmail.com</li>
                                <li>(git)Fawzi Chibah</li>
                            </div>
                            <div className={styles.right}>
                                <li>(linkedIn)Fawzi Chibah</li>
                                <li>(whatsApp)0201201201</li>
                                <li>(upwork)Fawzi Chibah</li>
                            </div>
                        </div>
                    </ul>
                </div>
                <hr />
                <div className={styles.copyright}>
                    <h6>Copyright Fawzi Chibah. 2021.</h6>
                </div>
            </div>
        </div>
    )
}
