import React, { useState, useEffect } from 'react';
import './ProjectsGallery.scss'
import ProjectCard from '../ProjectCard/ProjectCard'
import Slider from '../Slider/Slider'
import SkillLogos from '../SkillLogos/SkillLogos'
import Projects from '../../data/Projects.json';
import ButtonWebsite from '../ButtonWebsite/ButtonWebsite'



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
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (selectedItem) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedItem]);

    return (
        <div className="gallery">
            {items.map(item => (
                <ProjectCard key={item.id} id={item.id} cover={item.cover} title={item.title} alt={item.title} onClick={() => handleCardClick(item.id)} />
            ))}
            {selectedItem && (
                <aside className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>×</button>
                        <div className='modal-content'>
                            <Slider slides={selectedItem.pictures}/>
                            <h3 className='modal-title'>{selectedItem.title}</h3>
                            <p className='modal-subtitle'>{selectedItem.subtitle}</p>
                            <div className='modal-description-skills-buttons'>
                                <div className='modal-description'>
                                    <p className='modal-description-text'>{selectedItem.description}</p>
                                    {selectedItem.objectives && selectedItem.objectives.length > 0 && (
                                        <ul className="modal-description-list">
                                            {selectedItem.objectives.map((objective, index) => (
                                            <li key={index}>{objective}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className='skills-buttons'>
                                    <SkillLogos skillNames={selectedItem.skills} />
                                    <ButtonWebsite website={selectedItem.pagelink} github={selectedItem.github} />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            )}
        </div>
    );
};


export default ProjectsGallery