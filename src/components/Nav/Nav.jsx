import JBlogo from '../../assets/logo-white.png'
import './Nav.scss'
import NavList from '../NavList/NavList'
import { useTranslation } from 'react-i18next';

function Nav() {
    const { t } = useTranslation();

    return (
        <header className='jb-nav'>
            <div className='nav'>
                <img src={JBlogo} alt={t('JBlogo')} className="jb-text" />
                <NavList />
            </div>
        </header>
    )
}

export default Nav