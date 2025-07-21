import JBlogo from '../../assets/logo-white.png'
import './Footer.scss'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='footer'>
            <div className='contacts'>

            </div>
                <img src={JBlogo} alt={t('JBlogo')} className="jb-logo" />
                <p className='copyright'>{t('footer_copyright')}</p>
        </footer>
    )
}

export default Footer