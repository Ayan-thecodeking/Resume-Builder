import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Skills = ({ skills, updateResumeData }) => {
  const [newSkill, setNewSkill] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      updateResumeData('skills', [...skills, { id: uuidv4(), name: newSkill }]);
      setNewSkill('');
    }
  };

  const handleEditSkill = (id) => {
    const skillToEdit = skills.find((skill) => skill.id === id);
    setNewSkill(skillToEdit.name);
    setEditingId(id);
  };

  const handleUpdateSkill = () => {
    const updatedSkills = skills.map((skill) =>
      skill.id === editingId ? { ...skill, name: newSkill } : skill
    );
    updateResumeData('skills', updatedSkills);
    setEditingId(null);
    setNewSkill('');
  };

  const handleDeleteSkill = (id) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    updateResumeData('skills', updatedSkills);
  };

  return (
    <div className="skills">
      <h3>Skills</h3>
      <div>
        <input
          type="text"
          placeholder="Skill"
          value={newSkill}
          onChange={handleInputChange}
        />
        {editingId ? (
          <button onClick={handleUpdateSkill}>Update Skill</button>
        ) : (
          <button onClick={handleAddSkill}>Add Skill</button>
        )}
      </div>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name}
            <button onClick={() => handleEditSkill(skill.id)}>Edit</button>
            <button onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;