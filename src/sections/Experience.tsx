import React from 'react';
import { resumeData } from '../data/resumeData';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2>🏢 경력</h2>
      <div className="experience-list">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="company">{exp.company}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <div className="position">{exp.position}</div>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;