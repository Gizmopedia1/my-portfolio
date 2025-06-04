import './MySkills.scss'
import Skills  from '../Skills/Skills'
import CV from '../../assets/CV-JB.jpg'
import PDF from '../../assets/CV-JB.pdf'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const logoPDF = <FontAwesomeIcon icon={faFilePdf} />

function MySkills() {
    return (
        <div className='my-skills'>
            <h2 className='sous-titre'>Mes compétences</h2>
            <Skills />
            <a href={PDF} className='download-btn' download="joel-bisselele-CV">{logoPDF} Télécharger CV</a>
        </div>
    )
}

export default MySkills