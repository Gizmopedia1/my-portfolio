import './SkillsList.scss'
import SkillsCard from '../SkillsCard/SkillsCard'
import competences from '../../data/competences.json';

const SkillsList = ({ category }) => {
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