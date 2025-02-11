import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Experience = ({ experience, updateResumeData }) => {
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = () => {
    if (newExperience.company && newExperience.position) {
      updateResumeData('experience', [
        ...experience,
        { ...newExperience, id: uuidv4() },
      ]);
      setNewExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    }
  };

  const handleEditExperience = (id) => {
    const expToEdit = experience.find((exp) => exp.id === id);
    setNewExperience(expToEdit);
    setEditingId(id);
  };

  const handleUpdateExperience = () => {
    const updatedExperience = experience.map((exp) =>
      exp.id === editingId ? newExperience : exp
    );
    updateResumeData('experience', updatedExperience);
    setEditingId(null);
    setNewExperience({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleDeleteExperience = (id) => {
    const updatedExperience = experience.filter((exp) => exp.id !== id);
    updateResumeData('experience', updatedExperience);
  };

  return (
    <div className="experience">
      <h3>Experience</h3>
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={newExperience.company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newExperience.position}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={newExperience.startDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={newExperience.endDate}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newExperience.description}
          onChange={handleInputChange}
        />
        {editingId ? (
          <button onClick={handleUpdateExperience}>Update Experience</button>
        ) : (
          <button onClick={handleAddExperience}>Add Experience</button>
        )}
      </div>
      <ul>
        {experience.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.company}</strong> - {exp.position} ({exp.startDate} to {exp.endDate})
            <p>{exp.description}</p>
            <button onClick={() => handleEditExperience(exp.id)}>Edit</button>
            <button onClick={() => handleDeleteExperience(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;