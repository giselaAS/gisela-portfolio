import styles from './Hero.module.css';
import heroImg from './../../assets/hero-img.png'
import sun from './../../assets/sun.svg'
import moon from './../../assets/moon.svg'
import twitterLight from './../../assets/twitter-light.svg'
import twitterDark from './../../assets/twitter-dark.svg'
import githubLight from './../../assets/github-light.svg'
import githubDark from './../../assets/github-dark.svg'
import LinkedinLight from './../../assets/linkedin-light.svg'
import linkedinDark from './../../assets/linkedin-dark.svg'
import curriculo from './../../assets/Currículo - Gisela.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? LinkedinLight : linkedinDark

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='Profile picture of me'/>
            <img className={styles.colorMode} 
            src={themeIcon} 
            alt='Color mode icon'
            onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Gisela <br/> Araújo
            </h1>
            <h2>
                Frontend Developer
            </h2>
            <span>
                <a href='https://www.threads.net/@g154gisa' target='_blank'>
                    <img src={twitterIcon} alt="Threads icon" />
                </a>
                <a href='https://github.com/giselaAS' target='_blank'>
                    <img src={githubIcon} alt="GitHub icon" />
                </a>
                <a href='https://www.linkedin.com/in/gisela-ara%C3%BAjo-066456290/' target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                With a passing for developing modern React web apps.
            </p>
            <a href={curriculo} download>
                <button className='hover'> Resume </button>
            </a>
        </div>
    </section>
  )
}

export default Hero