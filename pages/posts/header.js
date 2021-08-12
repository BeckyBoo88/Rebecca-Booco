import styles from '../../styles/Home.module.css'

export default function Header() {
    return (
      <section className='header'>
          <div className='topBackground'>
            <div id='topDiv'>
              <h1 className={styles.title}>
                Rebecca Booco
              </h1>

              <p className={styles.description}>
                Software Engineer | Colorado Native | Life-long Student
              </p>
            </div>
          </div>
        </section>
      
    )
  }

 