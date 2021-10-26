import React, { useEffect, useState } from 'react'
import styles from '../styles/Tech.module.scss'
import Webdev from './tech/WebDev'
import MobileDev from './tech/MobileDev'
import Tools from './tech/Tools'

export default function Tech() {

    const [menuWeb, setMenuWeb] = useState(false)
    const [menuMobile, setMenuMobile] = useState(false)
    const [menuTools, setMenuTools] = useState(false)


    const handleClickWeb = () => {
        setMenuWeb(!menuWeb)
    }
    const handleClickMobile = () => {
        setMenuMobile(!menuMobile)
    }
    const handleClickTools = () => {
        setMenuTools(!menuTools)
    }

    return (
        <div className={styles.container}>
            {menuWeb ? <Webdev handleClickWeb={handleClickWeb} /> :
                menuMobile ? <MobileDev handleClickMobile={handleClickMobile} /> :
                    menuTools ? <Tools handleClickTools={handleClickTools} /> :
                        <div id='tech' className={styles.layout}>
                            <div className={styles.header}>
                                <h1>Technologies</h1>
                            </div>
                            <div className={styles.items}>
                                <a onClick={() => handleClickWeb()}><h1>Web devlopement</h1></a>
                                <a onClick={() => handleClickMobile()}><h1>Mobile developement</h1></a>
                                <a onClick={() => handleClickTools()}><h1>Tools</h1></a>
                            </div>
                        </div>
            }
        </div>
    )
}
