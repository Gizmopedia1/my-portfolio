import React, { useState } from 'react';
import './Skills.scss'
import SkillsCard from '../SkillsCard/SkillsCard'
import competences from '../../data/competences.json';

const Skills = () => {
    const [items] = useState(competences);
    return (
        <div className="skills">
            {items.map(item => (
                <SkillsCard key={item.id} id={item.id} logo={item.logo} name={item.name} />
            ))}
        </div>
    );
};

export default Skills