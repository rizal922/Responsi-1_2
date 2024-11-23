import React, { useState } from 'react';
import { Trash } from 'lucide-react';
import Swal from 'sweetalert2';

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: "React JS", level: "Advanced" },
    { id: 2, name: "Node.js", level: "Intermediate" },
    { id: 3, name: "Python", level: "Intermediate" }
  ]);
  
  const [newSkill, setNewSkill] = useState({ name: "", level: "" });

  const addSkill = () => {
    if (!newSkill.name || !newSkill.level) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Skill Added!',
      text: `${newSkill.name} has been added to your skills`,
      showConfirmButton: false,
      timer: 1500
    });

    setSkills([...skills, { ...newSkill, id: Date.now() }]);
    setNewSkill({ name: "", level: "" });
  };

  const deleteSkill = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3B82F6',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setSkills(skills.filter(skill => skill.id !== id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your skill has been deleted.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Skill Name"
            className="border p-2 rounded"
            value={newSkill.name}
            onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
          />
          <select
            className="border p-2 rounded"
            value={newSkill.level}
            onChange={(e) => setNewSkill({...newSkill, level: e.target.value})}
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <button 
          onClick={addSkill}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Skill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="font-bold">{skill.name}</h4>
              <p className="text-gray-600">{skill.level}</p>
            </div>
            <button 
              onClick={() => deleteSkill(skill.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;