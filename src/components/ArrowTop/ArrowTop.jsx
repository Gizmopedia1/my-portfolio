import './ArrowTop.scss'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from '@fortawesome/free-solid-svg-icons';


function ArrowTop() {
    return (
        <div className='arrow-top'>
            <a href="#intro" title="Retour en haut" alt="Retour en haut">
                <FontAwesomeIcon icon={faUpLong} />
            </a>
        </div>
    )
}

export default ArrowTop