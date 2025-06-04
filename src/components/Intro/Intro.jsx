import './Intro.scss'
import JB from '../../assets/joel-bisselele.png'

function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='intro-text'>
                <img src={JB} className="myname" />
                <h2 className='sous-titre'>Développeur Web - Front-End</h2>
                <p className='presentation'>Passionné du web depuis toujours et avide de nouvelles expériences.</p>
            </div>
        </div>
    )
}

export default Intro