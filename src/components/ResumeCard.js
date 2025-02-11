import React, { useState } from 'react';

const ResumeCard = ({ resumeData, updateResumeData }) => {
  const [name, setName] = useState(resumeData.name);
  const [title, setTitle] = useState(resumeData.title);

  const handleNameChange = (e) => {
    setName(e.target.value);
    updateResumeData('name', e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    updateResumeData('title', e.target.value);
  };

  return (
    <div className="resume-card">
      <h2>Resume Preview</h2>
      <div className="name-section">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Job Title"
        />
      </div>
      <h3>Experience</h3>
      <ul>
        {resumeData.experience.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.company}</strong> - {exp.position} ({exp.startDate} to {exp.endDate})
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {resumeData.skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <h3>Education</h3>
      <ul>
        {resumeData.education.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.institution}</strong> - {edu.degree} ({edu.startDate} to {edu.endDate})
          </li>
        ))}
      </ul>
      <h3>Specialties</h3>
      <ul>
        {resumeData.specialties.map((specialty) => (
          <li key={specialty.id}>{specialty.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeCard;