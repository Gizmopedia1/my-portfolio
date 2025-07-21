import './Socials.scss'
import { useTranslation } from 'react-i18next';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const logoLinkedin = <FontAwesomeIcon icon={faLinkedin} />
const logoGithub = <FontAwesomeIcon icon={faGithub} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />


function Socials() {
    const { t } = useTranslation();

    return (
        <div className='my-socials'>
            <a href="mailto:jbisselele.dev@gmail.com?subject=Message depuis le portfolio" target="_blank" title={t('socials_email_title')} className="my-socials-link email">{envelope}</a>
            <a href="https://www.linkedin.com/in/joël-bisselele-1611202a9/" target="_blank" title={t('socials_linkedin_title')} className="my-socials-link linkedin" >{logoLinkedin}</a>
            <a href="https://github.com/Gizmopedia1/" target="_blank" title={t('socials_github_title')} className="my-socials-link github">{logoGithub}</a>
        </div>
    )
}

export default Socials