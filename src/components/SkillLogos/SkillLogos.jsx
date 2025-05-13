import React from 'react';
import competences from '../../data/competences.json';
import './SkillLogos.scss'

const SkillLogos = ({ skillNames = [] }) => {
    const filteredSkills = competences.filter(skill => skillNames.includes(skill.name));

    return (
        <div className="project-skill-logos">
            {filteredSkills.map(skill => (
                <div key={skill.id} className="project-skill-logo">
                    <img src={skill.logo} alt={skill.name} title={skill.name} />
                </div>
            ))}
        </div>
    );
};

export default SkillLogos;
