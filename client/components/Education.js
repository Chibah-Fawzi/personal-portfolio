import React from 'react'
import styles from '../styles/Education.module.scss'


export default function Education() {
    return (
        <div className={styles.container}>
            <div id='education' className={styles.layout}>
                <div className={styles.header}>
                    <h1>Education</h1>
                </div>
                <div className={styles.items}>
                    <div className={styles.itemsUp}>
                        <div className={styles.item}>
                            <h1>Google UX Design Professional Certificate</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                        </div>
                        <div className={styles.item}>
                            <h1>GoMyCode Algeria full-stack web bootcamp</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                    <div className={styles.itemsDown}>
                        <div className={styles.item}>
                            <h1>Harvards computer science programs (2020&2021)</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                        </div>
                        <div className={styles.item}>
                            <h1>YouTube programming courses</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                        </div>
                        <div className={styles.item}>
                            <h1>Coursera courses</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
