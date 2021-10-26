import React from 'react'
import styles from '../styles/Menu.module.scss'

import Link from 'next/link'

export default function Menu(props) {
    return (
        <div className={styles.container}>
            <ul className={styles.items}>
                <a href='#about'><li className={styles.item}>About</li></a>
                <hr />
                <a href='#tech'><li className={styles.item}>Technologies</li></a>
                <hr />
                <a href='#work'><li className={styles.item}><span>Work</span></li></a>
                <hr />
                <a href='#education'><li className={styles.item}>Education</li></a>
                <hr />
                <a href='#contact'><li className={styles.item}>Contact</li></a>
                <hr />
            </ul>
        </div>
    )
}
