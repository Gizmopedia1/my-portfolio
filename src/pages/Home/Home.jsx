import './Home.scss'
import Nav from '../../components/Nav/Nav'
import Intro from '../../components/Intro/Intro'
import MySkills from '../../components/MySkills/MySkills'
import Projects from '../../components/Projects/Projects'


function Home() {
  return (
    <>
      <div>
        <Nav />
        <Intro />
        <MySkills />
        <Projects />
      </div>
    </>
  )
}

export default Home
