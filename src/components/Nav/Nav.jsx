import JBlogo from '../../assets/logo-black.png'
import './Nav.scss'
import NavList from '../NavList/NavList'

function Nav() {
    return (
        <div className='jb-nav'>
            < a href="/"><img src={JBlogo} alt='Joel B.' className='jb-logo' /></a>
            <NavList />
        </div>
    )
}

export default Nav