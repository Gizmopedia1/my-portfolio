import './Skills.scss'
import SkillsList  from '../SkillsList/SkillsList'
import SkillsFR from '../../data/SkillsData.fr.js';
import SkillsEN from '../../data/SkillsData.en.js';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { i18n } = useTranslation();
      
    const competences = i18n.language === 'fr' ? SkillsFR : SkillsEN;
  
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