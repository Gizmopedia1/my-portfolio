import React from 'react';
import './ProjectCard.scss'


const ProjectCard = ({ cover, title }) => {
    return (
        <div className="project-card">
            <img src={cover} alt={`${title}`} className="project-cover" />
        </div>
    );
};

export default ProjectCard;