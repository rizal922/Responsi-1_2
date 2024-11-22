import React, { useState } from 'react';
import { Trash } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: "E-Commerce Website", 
      description: "Developed full-stack e-commerce platform using MERN stack", 
      tech: ["React", "Node.js", "MongoDB"]
    }
  ]);
  
  const [newProject, setNewProject] = useState({ title: "", description: "", tech: "" });

  const addProject = () => {
    if (!newProject.title || !newProject.description || !newProject.tech) return;
    setProjects([...projects, { 
      ...newProject, 
      id: Date.now(),
      tech: newProject.tech.split(",").map(t => t.trim())
    }]);
    setNewProject({ title: "", description: "", tech: "" });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Project Title"
            className="border p-2 rounded"
            value={newProject.title}
            onChange={(e) => setNewProject({...newProject, title: e.target.value})}
          />
          <textarea
            placeholder="Project Description"
            className="border p-2 rounded"
            value={newProject.description}
            onChange={(e) => setNewProject({...newProject, description: e.target.value})}
          />
          <input
            type="text"
            placeholder="Technologies (comma-separated)"
            className="border p-2 rounded"
            value={newProject.tech}
            onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
          />
        </div>
        <button 
          onClick={addProject}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-xl">{project.title}</h4>
              <button 
                onClick={() => deleteProject(project.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;