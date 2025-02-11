import React from 'react';

const ResumeList = ({ resumes, activeResumeId, setActiveResumeId, addNewResume }) => {
  return (
    <div className="resume-list">
      <h3>Resumes</h3>
      <ul>
        {resumes.map((resume) => (
          <li
            key={resume.id}
            className={resume.id === activeResumeId ? 'active' : ''}
            onClick={() => setActiveResumeId(resume.id)}
          >
            {resume.name}
          </li>
        ))}
      </ul>
      <button onClick={addNewResume}>Add New Resume</button>
    </div>
  );
};

export default ResumeList;