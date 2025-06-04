import JBlogo from '../../assets/logo-white.png'
import './Nav.scss'
import NavList from '../NavList/NavList'

function Nav() {
    return (
        <header className='jb-nav'>
            <div className='nav'>
                <img src={JBlogo} alt='Logo JB blanc' className="jb-text" />
                <NavList />
            </div>
        </header>
    )
}

export default Nav