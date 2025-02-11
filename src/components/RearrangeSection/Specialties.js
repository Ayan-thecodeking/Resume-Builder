import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Specialties = ({ specialties, updateResumeData }) => {
  const [newSpecialty, setNewSpecialty] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setNewSpecialty(e.target.value);
  };

  const handleAddSpecialty = () => {
    if (newSpecialty.trim()) {
      updateResumeData('specialties', [
        ...specialties,
        { id: uuidv4(), name: newSpecialty },
      ]);
      setNewSpecialty('');
    }
  };

  const handleEditSpecialty = (id) => {
    const specialtyToEdit = specialties.find((specialty) => specialty.id === id);
    setNewSpecialty(specialtyToEdit.name);
    setEditingId(id);
  };

  const handleUpdateSpecialty = () => {
    const updatedSpecialties = specialties.map((specialty) =>
      specialty.id === editingId ? { ...specialty, name: newSpecialty } : specialty
    );
    updateResumeData('specialties', updatedSpecialties);
    setEditingId(null);
    setNewSpecialty('');
  };

  const handleDeleteSpecialty = (id) => {
    const updatedSpecialties = specialties.filter((specialty) => specialty.id !== id);
    updateResumeData('specialties', updatedSpecialties);
  };

  return (
    <div className="specialties">
      <h3>Specialties</h3>
      <div>
        <input
          type="text"
          placeholder="Specialty"
          value={newSpecialty}
          onChange={handleInputChange}
        />
        {editingId ? (
          <button onClick={handleUpdateSpecialty}>Update Specialty</button>
        ) : (
          <button onClick={handleAddSpecialty}>Add Specialty</button>
        )}
      </div>
      <ul>
        {specialties.map((specialty) => (
          <li key={specialty.id}>
            {specialty.name}
            <button onClick={() => handleEditSpecialty(specialty.id)}>Edit</button>
            <button onClick={() => handleDeleteSpecialty(specialty.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specialties;