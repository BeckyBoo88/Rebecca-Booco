import styles from '../../styles/Home.module.css'

export default function Projects() {
    return (
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
    )
}


{/* <style jsx>{`
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
        

      `}</style> */}