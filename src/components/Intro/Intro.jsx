import './Intro.scss'
import JB from '../../assets/joel-bisselele.png'
import { useTranslation } from 'react-i18next';

function Intro() {
    const { t } = useTranslation();

    return (
        <div className='intro' id='intro'>
            <div className='intro-text'>
                <h1>JOEL BISSELELE</h1>
                <img src={JB} className="myname" alt='JOEL BISSELELE'/>
                <h2 className='sous-titre'>{t('intro_subtitle')}</h2>
                <p className='presentation'>{t('intro_text')}</p>
            </div>
        </div>
    )
}

export default Intro