import JBlogo from '../../assets/logo-black.png'
import './Nav.scss'
import NavList from '../NavList/NavList'

function Nav() {
    return (
        <div className='jb-nav'>
            <div className='nav'>
                <a href="/" className='jb-text'>JB</a>
                <NavList />
            </div>
        </div>
    )
}

export default Nav