import JBlogo from '../../assets/logo-black.png'
import './Nav.scss'
import NavList from '../NavList/NavList'

function Nav() {
    return (
        <header className='jb-nav'>
            <div className='nav'>
                <p className='jb-text'>JB</p>
                <NavList />
            </div>
        </header>
    )
}

export default Nav