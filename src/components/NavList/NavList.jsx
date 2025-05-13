import './NavList.scss'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const logoLinkedin = <FontAwesomeIcon icon={faLinkedin} />
const logoGithub = <FontAwesomeIcon icon={faGithub} />


function NavList() {
    return (
        <div className='navlist'>
            <a href="#bio" title="Bio">À propos</a>
            <a href="#portfolio" title="Portfolio">Portfolio</a>
            <a href="#contact" title="Contact">Contact</a>
            <div className="socials">
                <a href="https://www.linkedin.com/in/joël-bisselele-1611202a9/" target="_blank" title="Lien vers ma page Linkedin" className="social-link linkedin" >{logoLinkedin}</a>
                <a href="https://github.com/Gizmopedia1/" target="_blank" title="Lien vers ma page GitHub" className="social-link github">{logoGithub}</a>
            </div>
        </div>
    )
}

export default NavList