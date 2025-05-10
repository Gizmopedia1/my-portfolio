import './Projects.scss'
import ProjectsGallery from '../ProjectsGallery/ProjectsGallery'


function Projects() {
    return (
        <div className='projets'>
            <h2 className='sous-titre'>Mes projets</h2>
            <ProjectsGallery />
        </div>
    )
}

export default Projects