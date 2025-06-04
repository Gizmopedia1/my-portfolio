import JBlogo from '../../assets/logo-white.png'
import './Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className='contacts'>

            </div>
                <img src={JBlogo} alt='Logo JB blanc' className="jb-logo" />
                <p className='copyright'>© 2025 Joël Bisselele. Réalisé avec React et Sass.</p>
        </footer>
    )
}

export default Footer