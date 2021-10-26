import React from 'react'
import styles from '../../styles/TechMenu.module.scss'

import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";

import Image from 'next/image'
import express from '../../public/svg/express.svg'
import jest from '../../public/svg/jest.svg'
import node from '../../public/svg/node.svg'
import react from '../../public/svg/react.svg'
import mysql from '../../public/svg/mysql.svg'
import redux from '../../public/svg/redux.svg'
import strapi from '../../public/svg/strapi.svg'
import sass from '../../public/svg/sass.svg'
import handlebars from '../../public/svg/handlebars.svg'
import mongo from '../../public/svg/mongo.svg'
import next from '../../public/svg/next-js.svg'

export default function Webdev(props) {
    const { handleClickWeb } = props
    return (
        <div className={styles.container}>
            <a className={styles.close} onClick={() => handleClickWeb()}><h1>Close</h1></a>
            <div className={styles.layout}>
                <h1 className={styles.header}>Web developement</h1>
                <div className={styles.section}>
                    <h1>Program Languages</h1>
                    <div className={styles.icons}>
                        <div><i>{<SiJavascript />}</i></div>
                        <div><i>{<SiTypescript />}</i></div>
                    </div>
                </div>
                <div className={styles.section}>
                    <h1>Front end </h1>
                    <div className={styles.icons}>
                        <Image width={60} alt="react logo" src={react} />
                        <Image width={60} alt="nextjs logo" src={next} />
                        <Image width={60} alt="redux logo" src={redux} />
                        <Image width={60} alt="sass logo" src={sass} />
                        <Image width={60} alt="handlebars logo" src={handlebars} />
                    </div>
                </div>
                <div className={styles.section}>
                    <h1>Back end</h1>
                    <div className={styles.icons}>
                        <Image width={60} alt="node logo" src={node} />
                        <Image width={60} alt="express logo" src={express} />
                        <Image width={60} alt="mongodb logo" src={mongo} />
                        <Image width={60} alt="mysql logo" src={mysql} />
                        <Image width={60} alt="strapi logo" src={strapi} />
                        <Image width={60} alt="jest logo" src={jest} />
                    </div>
                </div>
            </div>
        </div>
    )
}
