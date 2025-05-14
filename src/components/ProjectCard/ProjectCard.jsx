import React from 'react';
import './ProjectCard.scss'
import background from '../../assets/bg.png'


const ProjectCard = ({ cover, title, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <img src={cover} alt={`${title}`} title={`${title}`} className="project-cover" />
            <img src={background} alt='Fond de couleur grise' className='project-background'/>
        </div>
    );
};

export default ProjectCard;