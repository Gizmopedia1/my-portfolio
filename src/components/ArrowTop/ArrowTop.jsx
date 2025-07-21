import './ArrowTop.scss'
import { useTranslation } from 'react-i18next';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from '@fortawesome/free-solid-svg-icons';


function ArrowTop() {
    const { t } = useTranslation();

    return (
        <div className='arrow-top'>
            <a href="#intro" alt={t('arrowtop_alt')}>
                <FontAwesomeIcon icon={faUpLong} />
            </a>
        </div>
    )
}

export default ArrowTop