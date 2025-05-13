import './ButtonWebsite.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ButtonWebsite = ({ website, github }) => {
    return (
        <div className="link-buttons">
            {website && (
                <button className="button" onClick={() => window.open(website, '_blank')}>
                    Visitez le site <FontAwesomeIcon icon={faLink} />
                </button>
            )}
            {github && (
                <button className="button" onClick={() => window.open(github, '_blank')}>
                    GitHub <FontAwesomeIcon icon={faGithub} />
                </button>
            )}
        </div>
    );
};

export default ButtonWebsite;
