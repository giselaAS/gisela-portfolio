import { useState } from 'react'
import styles from './Hero.module.css'
import heroImg from './../../assets/chatgpt_image_3.png'
import sun from './../../assets/sun.svg'
import moon from './../../assets/moon.svg'
import githubLight from './../../assets/github-light.svg'
import githubDark from './../../assets/github-dark.svg'
import LinkedinLight from './../../assets/linkedin-light.svg'
import linkedinDark from './../../assets/linkedin-dark.svg'
import mailLight from './../../assets/mail_light.svg'
import mailDark from './../../assets/mail_dark.svg'
import curriculo from './../../assets/Gisela currículo.pdf'
import { useTheme } from '../../components/ThemeContext'
import Modal from '../../components/modal/Modal'
import Contact from '../contact/Contact'

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? LinkedinLight : linkedinDark
    const mailIcon = theme === 'light' ? mailLight : mailDark

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
    setIsModalOpen(true)
    }
    const closeModal = () => {
    setIsModalOpen(false)
    }


    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt='Profile picture of Gisela'/>
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
                    Desenvolvedor Frontend
                </h2>
                <span>
                    <a href='#' onClick={openModal} style={{ cursor: 'pointer' }}>
                        <img src={mailIcon}/>
                    </a>

                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <Contact />
                        <a href='#' onClick={closeModal}></a>
                    </Modal>

                    <a href='https://github.com/giselaAS' target='_blank'>
                        <img src={githubIcon} alt="GitHub icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/gisela-ara%C3%BAjo-066456290/' target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Olá, clique no currículo abaixo para saber mais sobre mim.
                </p>
                <a href={curriculo} download>
                    <button className='hover'> Currículo </button>
                </a>
            </div>
        </section>
    )
}

export default Hero