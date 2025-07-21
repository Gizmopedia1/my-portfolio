import './SkillsList.scss'
import SkillsCard from '../SkillsCard/SkillsCard'
import SkillsFR from '../../data/SkillsData.fr.js';
import SkillsEN from '../../data/SkillsData.en.js';
import { useTranslation } from 'react-i18next';

const SkillsList = ({ category }) => {
    const { i18n } = useTranslation();
    
    const competences = i18n.language === 'fr' ? SkillsFR : SkillsEN;

    const filteredItems = competences.filter(item =>item.category.includes(category));

    return (
            <div className="skills-category">
                <h3 className='category'>{category}</h3>
                <div className="skills-list">
                    {filteredItems.map(item => (
                        <SkillsCard key={item.id} id={item.id} logo={item.logo} name={item.name} />
                    ))}
                </div>
            </div>
    );
};

export default SkillsList