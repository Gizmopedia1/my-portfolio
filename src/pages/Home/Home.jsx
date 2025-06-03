import './Home.scss'
import Nav from '../../components/Nav/Nav'
import Intro from '../../components/Intro/Intro'
import Bio from '../../components/Bio/Bio'
import MySkills from '../../components/MySkills/MySkills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import ArrowTop from '../../components/ArrowTop/ArrowTop'
import Footer from '../../components/Footer/Footer'


function Home() {
  console.log("Home component loaded");
  return (
    <>
      <Nav />
      <main className='main-container'>
        <Intro />
        <Bio />
        <Projects />
        <MySkills />
        <Contact />
        <ArrowTop />
      </main>
      <Footer />
    </>
  )
}

export default Home
