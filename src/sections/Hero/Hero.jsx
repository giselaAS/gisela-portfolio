import styles from './HeroStyles.module.css';
import heroImg from './../../assets/hero-img.png'
import themeIcon from './../../assets/sun.svg'

function Hero() {
  return (
    <section id='hero' className='styles.container'>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='Profile picture of me'/>
            <img className={styles.clorMode} src={themeIcon} alt='Color mode icon'/>
        </div>
        <div className={styles.info}>
            <h1>
                Gisela <br/> Araújo
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href='' target='_blank'></a>
            </span>
        </div>
    </section>
  )
}

export default Hero