import React from 'react';
import { resumeData } from '../data/resumeData';

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h2>🎓 학력</h2>
      <div className="education-list">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="school">{edu.school}</h3>
              <span className="period">{edu.period}</span>
            </div>
            <div className="education-details">
              <span className="major">{edu.major}</span>
              <span className="degree">{edu.degree}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;