import './Projects.scss'
import ProjectsGallery from '../ProjectsGallery/ProjectsGallery'
import { useTranslation } from 'react-i18next';


function Projects() {
    return (
        <div className='projets' id='portfolio'>
            <h2 className='sous-titre'>Portfolio</h2>
            <ProjectsGallery />
        </div>
    )
}

export default Projects