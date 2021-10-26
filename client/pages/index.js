import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, { useState } from 'react'
import Menu from '../components/Menu'
import About from '../components/About'
import Tech from '../components/Tech'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'

import Link from 'next/link'


export default function Home() {

  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Fawzi Chibah Portfolio</title>
        <link rel="stylesheet" href="https://use.typekit.net/jks4frt.css"></link>
      </Head>
      {!menu ?
        <Navbar handleClick={handleClick} />
        : <CloseMenu handleClick={handleClick} />}
      <Main menu={menu} />
      <About />
      <Tech />
      <Work />
      <Education />
      <div className={styles.transition} style={{ textAlign: 'center', fontSize: '40px', fontWeight: '900', padding: '8%' }}>Transition?</div>
      <Contact />
      <Footer />
    </div>
  )
}

const Main = (props) => {
  const { menu } = props
  return (
    <div className={styles.container}>

      <div className={styles.layout}>
        {!menu ?
          <div className={styles.header}>
            <h1>Hi,<br /> My name&apos;s <span>Fawzi Chibah</span> and i&apos;m a<br /> <span>Software Engineer</span> & <span>Full-Stack Web Developer</span>.</h1>
            <q>It all starts with a problem</q>
          </div>
          : <Menu />}
      </div>

      <style global jsx>{`
        body {
          background: var(--bg);
        }
      `}</style>
    </div>
  )
}

const Navbar = (props) => {
  const { handleClick } = props
  return (
    <nav className={styles.nav}>

      <div className={styles.brand}>
        <Link href='/'><a>
          <h1>FC</h1>
        </a></Link>
      </div>
      <div className={styles.menu}>
        <h1><a onClick={() => handleClick()}>Menu</a></h1>
      </div>
    </nav >
  )
}
const CloseMenu = (props) => {
  const { handleClick } = props
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link href='/'><a>
          <h1>FC</h1>
        </a></Link>
      </div>
      <div className={styles.menu}>
        <h1><a onClick={() => handleClick()}>Close</a></h1>
      </div>
    </nav >
  )
}

const SideBar = () => {
  return (
    <div className={styles.layout}>
      <ul className={styles.list}>
        <li>Mail</li>
        <li>Git</li>
        <li>LinkedIn</li>
        <li>WhatsApp</li>
        <li>Upwork</li>
      </ul>
    </div>
  )
} 