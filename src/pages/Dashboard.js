import React from 'react';
import Top from '../components/Layout/Top';
import Left from '../components/Layout/Left';
import Right from '../components/Layout/Right';
import Experience from '../components/RearrangeSection/Experiance';
import Skills from '../components/RearrangeSection/Skills';
import Education from '../components/RearrangeSection/Education';
import Specialties from '../components/RearrangeSection/Specialties';
import ResumeCard from '../components/ResumeCard';
// import ResumeList from '../components/ResumeList';

import { FaPlus, FaTrash } from 'react-icons/fa';

const Dashboard = ({
  resumes,
  activeResume,
  updateResumeData,
  addNewResume,
  deleteResume,
  setActiveResumeId,
}) => {
  return (
    <div className="dashboard">
      <Top />
      <div className="resume-grid">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            className={`resume-card-container ${
              resume.id === activeResume.id ? 'active' : ''
            }`}
            onClick={() => setActiveResumeId(resume.id)}
          >
            <ResumeCard resumeData={resume} updateResumeData={updateResumeData} />
            {resumes.length > 1 && (
              <button
                className="delete-resume-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  deleteResume(resume.id);
                }}
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
        <div className="add-resume-btn" onClick={addNewResume}>
          <FaPlus />
        </div>
      </div>
      <div className="main-content">
        <Left>
          <Experience
            experience={activeResume.experience}
            updateResumeData={(section, data) =>
              updateResumeData(activeResume.id, section, data)
            }
          />
          <Skills
            skills={activeResume.skills}
            updateResumeData={(section, data) =>
              updateResumeData(activeResume.id, section, data)
            }
          />
        </Left>
        <Right>
          <Education
            education={activeResume.education}
            updateResumeData={(section, data) =>
              updateResumeData(activeResume.id, section, data)
            }
          />
          <Specialties
            specialties={activeResume.specialties}
            updateResumeData={(section, data) =>
              updateResumeData(activeResume.id, section, data)
            }
          />
        </Right>
      </div>
    </div>
  );
};

export default Dashboard;