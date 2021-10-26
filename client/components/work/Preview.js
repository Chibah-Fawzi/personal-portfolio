import React, { useEffect } from 'react'
import styles from '../../styles/Preview.module.scss'
import Image from 'next/image'

import Carousel from 'framer-motion-carousel'

export default function Preview(props) {

    const { handleToggle, work, selected } = props

    // const images = 


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{work[selected].Name} : {work[selected].def}</h1>
                <a className={styles.close} onClick={() => handleToggle()}>Close</a>
            </div>
            <div className={styles.layout}>
                <div className={styles.carouselSlider}>
                    <Carousel>
                        {work[selected].preview.map((e, i) => {
                            const url = 'http://localhost:1337'
                            const src = url + e.url
                            return (
                                <>
                                    <Image key={i} loader={() => src} src={src} width={700} height={400} alt='project preview' />
                                    <h5 className={styles.type}>{work[selected].type}</h5>
                                </>
                            )
                        })}
                    </Carousel>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.techStack}>
                        {work[selected].tech.map((e, i) => {
                            return (
                                <div key={i} className={styles.item}>
                                    <a><span>{e.tech}</span></a>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.date}>
                        {[work[selected]].map((e, i) => {
                            return (
                                <div key={i} className={styles.itemDate}>
                                    <span>Date : </span>{e.Date}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.description}>
                    <h3>About {work[selected].Name}</h3>
                    {[work[selected]].map((e, i) => {
                        return (
                            <div key={i}>
                                <p>{e.description}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
