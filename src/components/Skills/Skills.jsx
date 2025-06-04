import './Skills.scss'
import SkillsList  from '../SkillsList/SkillsList'
import competences from '../../data/SkillsData.js';

const Skills = () => {
    const allCategories = Array.from(
    new Set(
      competences.flatMap(item => item.category)
    )
  );

    return (
        <div className="skills-container">
            {allCategories.map(category => (
                <SkillsList  className="skills-list" key={category} category={category} />
            ))}
        </div>
    );
};

export default Skills