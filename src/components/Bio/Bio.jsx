import './Bio.scss'
import { useTranslation } from 'react-i18next';


function Bio() {
      const { t } = useTranslation();

    return (
        <div className='bio' id='bio'>
            <h2 className='sous-titre'>{t('bio_subtitle')}</h2>
            <p className='presentation'>{t('bio_text1')}</p>
            <p className='presentation'>{t('bio_text2')}</p>
            <p className='presentation'>{t('bio_text3')}</p>
        </div>
    )
}

export default Bio