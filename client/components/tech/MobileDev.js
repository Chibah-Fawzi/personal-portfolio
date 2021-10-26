import React from 'react'
import { SiDart } from "@react-icons/all-files/si/SiDart";
import { SiFlutter } from "@react-icons/all-files/si/SiFlutter";
import styles from '../../styles/TechMenu.module.scss'
import react from '../../public/svg/react.svg'
import Image from 'next/image'


export default function MobileDev(props) {
    const { handleClickMobile } = props

    return (
        <div className={styles.container}>
            <a className={styles.close} onClick={() => handleClickMobile()}><h1>Close</h1></a>
            <div className={styles.layout}>
                <h1 className={styles.header}>Mobile developement</h1>
                <div className={styles.section}>
                    <div className={styles.mobileIcons}>
                        <div><i>{<SiDart />}</i></div>
                        <div><i>{<SiFlutter />}</i></div>
                        <Image width={150} alt="React logo" src={react} />
                    </div>
                </div>
            </div>
        </div>
    )
}
