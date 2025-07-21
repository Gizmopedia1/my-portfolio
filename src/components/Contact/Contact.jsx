import './Contact.scss'
import ContactForm  from '../ContactForm/ContactForm'
import Socials  from '../Socials/Socials'
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <section className='contact-section' id='contact'>
            <div className='contact'>
                <h2 className='sous-titre'>{t('contact_subtitle')}</h2>
                <ContactForm />
                <Socials />
            </div>
        </section>
    )
}

export default Contact