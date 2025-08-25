import React from 'react';
import { resumeData } from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>🛠️ 기술 스택</h2>
      <div className="skills-grid">
        {resumeData.skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;