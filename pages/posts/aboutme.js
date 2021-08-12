import styles from '../../styles/Home.module.css'

export default function AboutMe() {
    return (
        <div id='aboutMe'>
          <h1 className={styles.description}>
            About Me
          </h1>

          <p id='meStuff'>
          I am a healthcare worker turned software engineer.  Seems like an odd leap, I know but I have found that my passion for helping others is amplified through technology.  I can help millions of people a day instead of a couple dozen.  It has given me the ability to truly think outside of the box when it comes to finding solutions and offered me a creative outlet in my free time.  I love that the sky is the limit and glass ceilings don’t exist in the realm. Becoming a software engineer has been the best decision I've made, and I can't wait to share my passion with you.
          </p>
        </div>
    )
}

{/* <style jsx>{`
       
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
        

      `}</style> */}