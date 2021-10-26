import React from 'react'
import { SiAdobeillustrator } from "@react-icons/all-files/si/SiAdobeillustrator";
import { SiAdobephotoshop } from "@react-icons/all-files/si/SiAdobephotoshop";
import { SiAdobexd } from "@react-icons/all-files/si/SiAdobexd";
import { SiFigma } from "@react-icons/all-files/si/SiFigma";


import { SiGit } from "@react-icons/all-files/si/SiGit";
import { SiPostman } from "@react-icons/all-files/si/SiPostman";
import { SiGitlab } from "@react-icons/all-files/si/SiGitlab";

import { SiHeroku } from "@react-icons/all-files/si/SiHeroku";
import vercel from '../../public/svg/vercel.svg'

import styles from '../../styles/TechMenu.module.scss'
import Image from 'next/image'


export default function MobileDev(props) {
    const { handleClickTools } = props

    return (
        <div className={styles.container}>
            <a className={styles.close} onClick={() => handleClickTools()}><h1>Close</h1></a>
            <div className={styles.layout}>
                <h1 className={styles.header}>Tools</h1>
                <div className={styles.toolsLayout}>
                    <div className={styles.section}>
                        <h1>Coding tools </h1>
                        <div className={styles.toolsIcons}>
                            <div><i>{<SiGit />}</i></div>
                            <div><i>{<SiPostman />}</i></div>
                            <div><i>{<SiGitlab />}</i></div>
                            <div><i>{<SiHeroku />}</i></div>
                            <Image src={vercel} width={60} alt="Vercel logo" />
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h1>Design tools </h1>
                        <div className={styles.toolsIcons}>
                            <div><i>{<SiAdobeillustrator />}</i></div>
                            <div><i>{<SiAdobephotoshop />}</i></div>
                            <div><i>{<SiAdobexd />}</i></div>
                            <div><i>{<SiFigma />}</i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
