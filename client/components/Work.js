import React, { useEffect, useState } from 'react'
import styles from '../styles/Work.module.scss'
import axios from 'axios'
import Preview from './work/Preview'
export default function Work() {
    const [work, setWork] = useState([])
    const [toggle, setToggle] = useState(false)
    const [selected, setSelected] = useState(0)


    const getData = () => {
        axios.get('http://localhost:1337/works')
            .then(res => {
                setWork(res.data)
            }).catch(err => console.log(err))
    }

    const handleToggle = (index) => {
        setToggle(!toggle)
        setSelected(index)
    }
    useEffect(() => {
        getData();
    })
    return (
        <div className={styles.container}>
            <div id='work' className={styles.layout}>
                {toggle ? <Preview handleToggle={handleToggle} work={work} selected={selected} /> :
                    <div>
                        <div className={styles.header}>
                            <h1>My Work</h1>
                        </div>
                        <div className={styles.items}>
                            {work.map((e, i) => {
                                return (
                                    <>
                                        <div className={styles.item}>
                                            <a key={i} onClick={() => handleToggle(i)}>
                                                <h1><span>{e.Name}</span> : {e.def}</h1>
                                            </a>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
