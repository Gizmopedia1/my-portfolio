import './Socials.scss'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const logoLinkedin = <FontAwesomeIcon icon={faLinkedin} />
const logoGithub = <FontAwesomeIcon icon={faGithub} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />


function Socials() {
    return (
        <div className='my-socials'>
            <a href="mailto:jbisselele.dev@gmail.com?subject=Message depuis le portfolio" target="_blank" title="Envoyez-moi un e-mail!" className="my-socials-link email">{envelope}</a>
            <a href="https://www.linkedin.com/in/joël-bisselele-1611202a9/" target="_blank" title="Lien vers ma page Linkedin" className="my-socials-link linkedin" >{logoLinkedin}</a>
            <a href="https://github.com/Gizmopedia1/" target="_blank" title="Lien vers ma page GitHub" className="my-socials-link github">{logoGithub}</a>
        </div>
    )
}

export default Socials