import React from 'react';
import './SkillsCard.scss'


const SkillsCard = ({ logo, name }) => {
    return (
        <div className="skill-card">
            <img src={logo} alt={`Logo ${name}`} className="skill-logo" />
            <p className="skill-name">{name}</p>
        </div>
    );
};

export default SkillsCard;