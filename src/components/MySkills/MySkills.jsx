import './MySkills.scss'
import Skills  from '../Skills/Skills'
import CV_FR from '../../assets/CV-JB-FR.pdf';
import CV_EN from '../../assets/CV-JB-EN.pdf';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const logoPDF = <FontAwesomeIcon icon={faFilePdf} />

function MySkills() {
    const { i18n, t } = useTranslation();

    const currentCV = i18n.language === 'fr' ? CV_FR : CV_EN;
    const cvFileName = i18n.language === 'fr' ? 'joel-bisselele-CV' : 'joel-bisselele-Resume';

    return (
        <div className='my-skills'>
            <h2 className='sous-titre'>{t('myskills_subtitle')}</h2>
            <Skills />
            <a 
                href={currentCV} 
                className='download-btn' 
                title={t('download_cv_title')} 
                download={cvFileName}>{logoPDF} {t('download_cv')}
            </a>
        </div>
    )
}

export default MySkills