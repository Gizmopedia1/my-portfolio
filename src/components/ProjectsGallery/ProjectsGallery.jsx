import React, { useState } from 'react';
import './ProjectsGallery.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import Projects from '../../data/Projects.json';

const ProjectsGallery = () => {
    const [items] = useState(Projects);
    return (
        <div className="gallery">
            {items.map(item => (
                <ProjectCard key={item.id} id={item.id} cover={item.cover} />
            ))}
        </div>
    );
};

export default ProjectsGallery