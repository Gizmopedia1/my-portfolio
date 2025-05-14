import './Contact.scss'
import ContactForm  from '../ContactForm/ContactForm'
import Socials  from '../Socials/Socials'

function Contact() {
    return (
        <section className='contact-section' id='contact'>
            <div className='contact'>
                <h2 className='sous-titre'>Contactez-moi!</h2>
                <ContactForm />
                <Socials />
            </div>
        </section>
    )
}

export default Contact