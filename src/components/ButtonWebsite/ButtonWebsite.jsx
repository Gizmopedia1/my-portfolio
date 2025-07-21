import './ButtonWebsite.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const ButtonWebsite = ({ website, github }) => {
    const { t } = useTranslation();

    return (
        <div className="link-buttons">
            {website && (
                <button className="button" onClick={() => window.open(website, '_blank')}>
                    <p>{t('visitwebsite_button')}</p>
                    <FontAwesomeIcon icon={faLink} />
                </button>
            )}
            {github && (
                <button className="button" onClick={() => window.open(github, '_blank')}>
                    <p>GitHub</p>
                    <FontAwesomeIcon icon={faGithub} />
                </button>
            )}
        </div>
    );
};

export default ButtonWebsite;
