import styles from '../../styles/Home.module.css'

export default function FirstPost() {
    return (
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
      
    )
  }

  <style jsx>{`
  #topDiv {
    background: rgba(133, 91, 116, 0.2);
    padding: 2%;
    color: rgba(218, 219, 192, 1);
  }
  
  #topBackground {
    background: url('../public/mtnHike.JPG');
    background-size: cover;
    width: 100%;
    padding: 10%;
  }

  `}</style>