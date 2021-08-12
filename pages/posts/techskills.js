import styles from '../../styles/Home.module.css'

export default function TechSkills() {
    return (
        <div id='techSkills'>
          <h4 className={styles.description}>
            Technical Skills
          </h4>

          <p id='skillSet'>
          JavaScript | React | NodeJS | HTML5 | CSS3 | Bootstrap | REST API | PostgreSQL | MongoDB | Mongoose | Express | Python | Flask | Git | Command Line | Heroku | Netlify | Postman
          </p>
        </div>
    )
}

{/* <style jsx>{`
       
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

      `}</style> */}