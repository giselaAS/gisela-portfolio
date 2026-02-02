import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact" >
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
        </div>
    );
};

export default Contact;