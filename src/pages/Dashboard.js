import React from 'react';
import Top from '../components/Layout/Top';
import Left from '../components/Layout/Left';
import Right from '../components/Layout/Right';
// import OneColumn from '../components/Column/OneColumn';
// import TwoColumn from '../components/Column/TwoColumn';
import Experience from '../components/RearrangeSection/Experiance';
import Skills from '../components/RearrangeSection/Skills';
import Education from '../components/RearrangeSection/Education';
import Specialties from '../components/RearrangeSection/Specialties';
import Heading from '../components/Heading';
import ResumeCard from '../components/ResumeCard';
import ResumeList from '../components/ResumeList';
const Dashboard = ({
  resumes,
  activeResume,
  updateResumeData,
  addNewResume,
  setActiveResumeId,
}) => {
  return (
    <div className="dashboard">
      <Top />
      <ResumeList
        resumes={resumes}
        activeResumeId={activeResume.id}
        setActiveResumeId={setActiveResumeId}
        addNewResume={addNewResume}
      />
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
        <ResumeCard
          resumeData={activeResume}
          updateResumeData={(section, data) =>
            updateResumeData(activeResume.id, section, data)
          }
        />
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
      {/* <Heading name={activeResume.name} title={activeResume.title} /> */}
    </div>
  );
};

export default Dashboard;