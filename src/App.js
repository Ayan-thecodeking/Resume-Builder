import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [resumes, setResumes] = useState([
    {
      id: '1',
      name: 'Ayan Gupta',
      title: 'Frontend Developer',
      experience: [],
      skills: [],
      education: [],
      specialties: [],
    },
  ]);
  const [activeResumeId, setActiveResumeId] = useState('1');

  const updateResumeData = (resumeId, section, data) => {
    setResumes((prevResumes) =>
      prevResumes.map((resume) =>
        resume.id === resumeId ? { ...resume, [section]: data } : resume
      )
    );
  };

  const addNewResume = () => {
    const newResume = {
      id: Date.now().toString(),
      name: 'New Resume',
      title: 'Job Title',
      experience: [],
      skills: [],
      education: [],
      specialties: [],
    };
    setResumes((prevResumes) => [...prevResumes, newResume]);
    setActiveResumeId(newResume.id);
  };

  const activeResume = resumes.find((resume) => resume.id === activeResumeId);

  return (
    <div className="App">
      <Dashboard
        resumes={resumes}
        activeResume={activeResume}
        updateResumeData={updateResumeData}
        addNewResume={addNewResume}
        setActiveResumeId={setActiveResumeId}
      />
    </div>
  );
}

export default App;