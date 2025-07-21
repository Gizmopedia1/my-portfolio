import './NavList.scss'

import { useTranslation } from 'react-i18next';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const logoLinkedin = <FontAwesomeIcon icon={faLinkedin} />
const logoGithub = <FontAwesomeIcon icon={faGithub} />


function NavList() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    const { t } = useTranslation();

    return (
        <nav className='navlist'>
            <a href="#bio" title="Bio">{t('navlist_bio')}</a>
            <a href="#portfolio" title="Portfolio">{t('navlist_portfolio')}</a>
            <a href="#contact" title="Contact">{t('navlist_contact')}</a>
            <div className="socials">
                <a href="https://www.linkedin.com/in/joël-bisselele-1611202a9/" target="_blank" title={t('socials_linkedin_title')} className="social-link linkedin" >{logoLinkedin}</a>
                <a href="https://github.com/Gizmopedia1/" target="_blank" title={t('socials_github_title')} className="social-link github">{logoGithub}</a>
            </div>
            <div className='lang-buttons'>
                <button
                    onClick={() => changeLanguage('fr')}
                    className={`lang-toggle ${i18n.language === 'fr' ? 'active' : ''}`}
                >
                    FR
                </button>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`lang-toggle ${i18n.language === 'en' ? 'active' : ''}`}
                >
                    EN
                </button>
            </div>

        </nav>
    )
}

export default NavList