import React from 'react';
import './ProjectCard.scss'


const ProjectCard = ({ cover, title, onClick }) => {
    return (
        <div className="project-card"  onClick={onClick}>
            <img src={cover} alt={`${title}`} className="project-cover" />
        </div>
    );
};

export default ProjectCard;