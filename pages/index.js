import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../pages/navbar'
import Navbar2 from '../pages/navbar2'
import Header from './posts/header'
import AboutMe from './posts/aboutme'
import TechSkills from './posts/techskills'
import Projects from './posts/projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Rebecca Booco</title>
      </Head>

      <main className={styles.main}>
        <Header />
        
        <hr />
        <AboutMe />
        
        <TechSkills />
       
        <Projects />
        
      </main>

      <h2 id='findMe'> Find Me At: </h2>

      <Navbar2 />

    </div>
    
  )
}
