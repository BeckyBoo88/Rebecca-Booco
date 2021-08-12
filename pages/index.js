import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../pages/navbar'
import Navbar2 from '../pages/navbar2'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Rebecca Booco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id='topBackground'>
          <div id='topDiv'>
            <h1 className={styles.title}>
              Rebecca Booco
            </h1>

            <p className={styles.description}>
              Software Engineer | Colorado Native | Life-long Student
            </p>
          </div>
        </div>
        <hr />
       
        <div id='aboutMe'>
          <h1 className={styles.description}>
            About Me
          </h1>

          <p id='meStuff'>
          I am a healthcare worker turned software engineer.  Seems like an odd leap, I know but I have found that my passion for helping others is amplified through technology.  I can help millions of people a day instead of a couple dozen.  It has given me the ability to truly think outside of the box when it comes to finding solutions and offered me a creative outlet in my free time.  I love that the sky is the limit and glass ceilings don’t exist in the realm. Becoming a software engineer has been the best decision I've made, and I can't wait to share my passion with you.
          </p>
        </div>

       <div id='techSkills'>
          <h4 className={styles.description}>
            Technical Skills
          </h4>

          <p id='skillSet'>
          JavaScript | React | NodeJS | HTML5 | CSS3 | Bootstrap | REST API | PostgreSQL | MongoDB | Mongoose | Express | Python | Flask | Git | Command Line | Heroku | Netlify | Postman
          </p>
        </div>

        <div id='cardStuff'>
          <h4 className={styles.description}>
            Projects
          </h4>

          <div id='projectStuff'>
            <div className={styles.grid}>
              <a href="https://beckyboo88.github.io/The-Colorado-Trail/" target='_blank' className={styles.card}>
                <h1>The Colorado Trail &rarr;</h1>
                <p>Interactive game similar to Oregon Trail.  Uses: HTML, CSS, and JavaScript</p>
              </a>

              <a href="https://find-your-national-park.herokuapp.com" target='_blank' className={styles.card2}>
                <h1>Find Your Trail &rarr;</h1>
                <p>Web App that helps you find national parks in your state. Uses: Sequelize, Express, and EJS</p>
              </a>

              <a
                href="https://determined-nightingale-c0072d.netlify.app" target='_blank' className={styles.card3}>
                <h1>Viberant &rarr;</h1>
                <p>Web App to help people find fun activities they can meet people at or create their own event. Uses: React, Bootstrap, Mongo, Mongoose, Express, Node </p>
              </a>

              <a
                href="https://github.com/BeckyBoo88/Project-4" target='_blank' className={styles.card4}>
                <h1>Remake of Find Your Trail using Flask and Jinja &rarr;</h1>
                <p>
                  Taught myself how to use Flask and Jinja but remaking the 'Find Your Trail' project.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <h2 id='findMe'> Find Me At: </h2>

      <Navbar2 />

      <style jsx>{`
       #topDiv {
        background: rgba(133, 91, 116, 0.2);
        padding: 2%;
        color: rgba(218, 219, 192, 1);
      }
      
      #topBackground {
        background: url('../public/mtnHike.JPG');
        width: 100%;
        padding: 10%;
      }
        
        #aboutMe {
          width: 100%;
          padding: 4%;
          background: #dfdfc7;
          color: #926680;
        }

        #meStuff {
          width: 70%;
          margin: 0 auto;
        }

        #techSkills {
          width: 100%;
          background: #926680;
          padding: 7%;
          color: #dfdfc7;
          margin-top: 2%;
        }

        #skillSet {
          width: 70%;
          margin: 0 auto;
        }

        #cardStuff {
          width: 100%;
          background: #dfdfc7;
          color: #926680;
          margin-top: 2%;
        }

        #findMe {
          margin-top: -4%;
        }

        #projectStuff {
          display: flex;
          justify-content: center;
          margin-top: -5%;
        }
        

      `}</style>

    </div>
    
  )
}
