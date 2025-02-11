import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Education = ({ education, updateResumeData }) => {
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    startDate: '',
    endDate: '',
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      updateResumeData('education', [
        ...education,
        { ...newEducation, id: uuidv4() },
      ]);
      setNewEducation({
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const handleEditEducation = (id) => {
    const eduToEdit = education.find((edu) => edu.id === id);
    setNewEducation(eduToEdit);
    setEditingId(id);
  };

  const handleUpdateEducation = () => {
    const updatedEducation = education.map((edu) =>
      edu.id === editingId ? newEducation : edu
    );
    updateResumeData('education', updatedEducation);
    setEditingId(null);
    setNewEducation({
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleDeleteEducation = (id) => {
    const updatedEducation = education.filter((edu) => edu.id !== id);
    updateResumeData('education', updatedEducation);
  };

  return (
    <div className="education">
      <h3>Education</h3>
      <div>
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={newEducation.institution}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={newEducation.startDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={newEducation.endDate}
          onChange={handleInputChange}
        />
        {editingId ? (
          <button onClick={handleUpdateEducation}>Update Education</button>
        ) : (
          <button onClick={handleAddEducation}>Add Education</button>
        )}
      </div>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.institution}</strong> - {edu.degree} ({edu.startDate} to {edu.endDate})
            <button onClick={() => handleEditEducation(edu.id)}>Edit</button>
            <button onClick={() => handleDeleteEducation(edu.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;