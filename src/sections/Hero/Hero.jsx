import React, { useState } from 'react'
import styles from './Hero.module.css'
import './contact/Contact.css'
import heroImg from './../../assets/chatgpt_image_3.png'
import sun from './../../assets/sun.svg'
import moon from './../../assets/moon.svg'
import githubLight from './../../assets/github-light.svg'
import githubDark from './../../assets/github-dark.svg'
import LinkedinLight from './../../assets/linkedin-light.svg'
import linkedinDark from './../../assets/linkedin-dark.svg'
import mailLight from './../../assets/mail_light.svg'
import mailDark from './../../assets/mail_dark.svg'
import curriculo from './../../assets/Currículo-Gisela.pdf'
import { useTheme } from '../../common/ThemeContext'
import Modal from './modal/Modal'

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
                                            {/* Contact */}
                    <a href='#' onClick={openModal} style={{ cursor: 'pointer' }}>
                        <img src={mailIcon}/>
                    </a>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <section id="contact" className={styles.containerContact}>
                            <h1 className="sectionTitle">Contato</h1>
                            <form action='https://formspree.io/f/mrbpvgqn' method='post'>
                                <div className='formGroup'>
                                    <label htmlFor='name' hidden> Nome </label>
                                    <input 
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Nome'
                                        required 
                                     />
                                </div>
                                <div className='formGroup'>
                                    <label htmlFor='email' hidden> Email </label>
                                    <input 
                                        type='text'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                        required 
                                     />
                                </div>
                                <div className='formGroup'>
                                    <label htmlFor='message' hidden> Menssagem </label>
                                    <textarea 
                                        type='text'
                                        name='message'
                                        id='message'
                                        placeholder='Mensagem' 
                                        required>
                                    </textarea>              
                                </div>
                                <input className="hover btn" type="submit" value="Enviar" />
                            </form>
                        </section>
                        <a href='#' onClick={closeModal}></a>
                    </Modal>
                                            {/* Contact */}
                    <a href='https://github.com/giselaAS' target='_blank'>
                        <img src={githubIcon} alt="GitHub icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/gisela-ara%C3%BAjo-066456290/' target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Olá, se você quiser saber mais, confira meu currículo abaixo.
                </p>
                <a href={curriculo} download>
                    <button className='hover'> Currículo </button>
                </a>
            </div>
        </section>
    )
}

export default Hero