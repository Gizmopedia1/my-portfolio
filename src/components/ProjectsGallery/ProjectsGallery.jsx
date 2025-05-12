import React, { useState } from 'react';
import './ProjectsGallery.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import Slider from '../Slider/Slider'
import SkillLogos from '../SkillLogos/SkillLogos'
import Projects from '../../data/Projects.json';

const ProjectsGallery = () => {
    const [items] = useState(Projects);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardClick = (id) => {
        const project = items.find(item => item.id === id);
        setSelectedItem(project);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="gallery">
            {items.map(item => (
                <ProjectCard key={item.id} id={item.id} cover={item.cover} onClick={() => handleCardClick(item.id)} />
            ))}
            {selectedItem && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>×</button>
                        <Slider slides={selectedItem.pictures}/>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        <SkillLogos skillNames={selectedItem.skills} />
                    </div>
                </div>
            )}
        </div>
    );
};


export default ProjectsGallery