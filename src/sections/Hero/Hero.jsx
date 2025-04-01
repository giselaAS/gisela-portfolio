import styles from './HeroStyles.module.css';
import heroImg from './../../assets/hero-img.png'
import themeIcon from './../../assets/sun.svg'
import threadsIcon from './../../assets/twitter-light.svg'
import githubIcon from './../../assets/github-light.svg'
import linkedinIcon from './../../assets/linkedin-light.svg'
import curriculo from './../../assets/Currículo - Gisela.pdf'

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
                <a href='https://www.threads.net/@g154gisa' target='_blank'>
                    <img src={threadsIcon} alt="Threads icon" />
                </a>
                <a href='https://github.com/giselaAS' target='_blank'>
                    <img src={githubIcon} alt="GitHub icon" />
                </a>
                <a href='https://www.linkedin.com/in/gisela-ara%C3%BAjo-066456290/' target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>With a passing for developing modern React web apps.</p>
            <a href={curriculo} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero