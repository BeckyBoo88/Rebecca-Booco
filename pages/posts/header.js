import styles from '../../styles/Home.module.css'

export default function Header() {
    return (
      <section className='header'>
          <div className='topBackground' style={{ background: "url('../public/mtnHike.JPG')"}}>
            <div id='topDiv' style={{ background: 'rgba(133, 91, 116, 0.2)', padding: '2%', color: 'rgba(218, 219, 192, 1)' }}>
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

  <style jsx>{`
    #topDiv {
      background: rgba(133, 91, 116, 0.2);
      padding: 2%;
      color: rgba(218, 219, 192, 1);
    }

  `}</style>