import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [resumes, setResumes] = useState([
    {
      id: '1',
      name: 'Brandon Kenn',
      title: 'UUI/X Designer',
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

  const deleteResume = (id) => {
    if (resumes.length > 1) {
      const updatedResumes = resumes.filter((resume) => resume.id !== id);
      setResumes(updatedResumes);
      setActiveResumeId(updatedResumes[0].id); // Set the first resume as active
    }
  };

  const activeResume = resumes.find((resume) => resume.id === activeResumeId);

  return (
    <div className="App">
      <Dashboard
        resumes={resumes}
        activeResume={activeResume}
        updateResumeData={updateResumeData}
        addNewResume={addNewResume}
        deleteResume={deleteResume}
        setActiveResumeId={setActiveResumeId}
      />
    </div>
  );
}

export default App;