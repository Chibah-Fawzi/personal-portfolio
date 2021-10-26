import React from 'react'
import styles from '../styles/Contact.module.scss'


export default function Contact() {
    return (
        <div className={styles.container}>
            <div id='contact' className={styles.layout}>
                <div className={styles.header}>
                    <h1>Contact me</h1>
                </div>
                <div className={styles.main}>
                    <h1>Send me a direct message here</h1>
                    <form className={styles.form}>
                        <div className={styles.formWrapper}>
                            <div className={styles.inputWrapper}>
                                <input type='text' placeholder='Your name' />
                                <input type='text' placeholder='Your Email' />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label>Your message</label>
                                <textarea placeholder='Write your message'></textarea>
                            </div>
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
