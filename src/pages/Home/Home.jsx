import './Home.scss'
import Nav from '../../components/Nav/Nav'
import Intro from '../../components/Intro/Intro'
import Skills from '../../components/Skills/Skills'


function Home() {
  return (
    <>
      <div>
        <Nav />
        <Intro />
        <Skills />
      </div>
    </>
  )
}

export default Home
