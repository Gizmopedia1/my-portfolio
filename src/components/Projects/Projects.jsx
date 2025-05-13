import './Projects.scss'
import ProjectsGallery from '../ProjectsGallery/ProjectsGallery'


function Projects() {
    return (
        <div className='projets' id='portfolio'>
            <h2 className='sous-titre'>Portfolio</h2>
            <ProjectsGallery />
        </div>
    )
}

export default Projects