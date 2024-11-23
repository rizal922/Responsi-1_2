import React, { useState } from 'react';
import { Trash, Edit, Plus, X, Github, ExternalLink } from 'lucide-react';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  
  // Data proyek default
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Sistem Manajemen Perpustakaan Digital",
      description: "Aplikasi web untuk mengelola perpustakaan digital dengan fitur peminjaman buku online, tracking buku, dan sistem rekomendasi berbasis AI.",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/username/library-management",
      liveUrl: "https://library-management-demo.com",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Aplikasi Pembelajaran Online",
      description: "Platform e-learning dengan fitur video conference, quiz interaktif, dan sistem tracking progres pembelajaran menggunakan teknologi WebRTC.",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "WebRTC"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/username/e-learning",
      liveUrl: "https://elearning-demo.com",
      category: "Education Technology"
    },
    {
      id: 3,
      title: "Sistem IoT Smart Home",
      description: "Sistem pemantauan dan kontrol perangkat rumah pintar menggunakan IoT dengan dashboard realtime dan notifikasi berbasis machine learning.",
      technologies: ["React Native", "Python", "TensorFlow", "MQTT"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/username/smart-home",
      liveUrl: "https://smarthome-demo.com",
      category: "IoT"
    },
    {
      id: 4,
      title: "Aplikasi Analisis Data Kesehatan",
      description: "Dashboard analitik untuk visualisasi dan analisis data kesehatan menggunakan big data dan AI untuk prediksi tren kesehatan.",
      technologies: ["React", "Python", "Apache Spark", "scikit-learn"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/username/health-analytics",
      liveUrl: "https://health-analytics-demo.com",
      category: "Data Science"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: [],
    image: "/api/placeholder/400/300",
    githubUrl: "",
    liveUrl: "",
    category: ""
  });

  // Fungsi untuk menambah proyek baru
  const addProject = () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'error',
        title: 'Akses Ditolak',
        text: 'Anda harus login untuk menambah proyek',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }

    if (!newProject.title || !newProject.description) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judul dan deskripsi harus diisi!',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }

    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setNewProject({
      title: "",
      description: "",
      technologies: [],
      image: "/api/placeholder/400/300",
      githubUrl: "",
      liveUrl: "",
      category: ""
    });
    
    Swal.fire({
      icon: 'success',
      title: 'Proyek Ditambahkan!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  // Fungsi untuk menghapus proyek
  const deleteProject = (id) => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'error',
        title: 'Akses Ditolak',
        text: 'Anda harus login untuk menghapus proyek',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }

    Swal.fire({
      title: 'Anda yakin?',
      text: "Proyek yang dihapus tidak dapat dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3B82F6',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects(projects.filter(project => project.id !== id));
        Swal.fire({
          title: 'Terhapus!',
          text: 'Proyek telah dihapus.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  // Fungsi untuk memulai edit proyek
  const startEdit = (project) => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'error',
        title: 'Akses Ditolak',
        text: 'Anda harus login untuk mengedit proyek',
        confirmButtonColor: '#3B82F6'
      });
      return;
    }
    setIsEditing(true);
    setEditingProject(project);
  };

  // Fungsi untuk menyimpan hasil edit
  const saveEdit = () => {
    setProjects(projects.map(project => 
      project.id === editingProject.id ? editingProject : project
    ));
    setIsEditing(false);
    setEditingProject(null);
    Swal.fire({
      icon: 'success',
      title: 'Perubahan Tersimpan!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>

      {/* Form Edit Proyek */}
      {isEditing && isAuthenticated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Edit Proyek</h4>
              <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={editingProject?.title}
                onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                className="w-full border p-2 rounded"
                placeholder="Judul Proyek"
              />
              <textarea
                value={editingProject?.description}
                onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                className="w-full border p-2 rounded h-32"
                placeholder="Deskripsi Proyek"
              />
              <input
                type="text"
                value={editingProject?.technologies.join(", ")}
                onChange={(e) => setEditingProject({...editingProject, technologies: e.target.value.split(", ")})}
                className="w-full border p-2 rounded"
                placeholder="Teknologi (pisahkan dengan koma)"
              />
              <input
                type="text"
                value={editingProject?.githubUrl}
                onChange={(e) => setEditingProject({...editingProject, githubUrl: e.target.value})}
                className="w-full border p-2 rounded"
                placeholder="URL GitHub"
              />
              <input
                type="text"
                value={editingProject?.liveUrl}
                onChange={(e) => setEditingProject({...editingProject, liveUrl: e.target.value})}
                className="w-full border p-2 rounded"
                placeholder="URL Demo"
              />
              <input
                type="text"
                value={editingProject?.category}
                onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                className="w-full border p-2 rounded"
                placeholder="Kategori"
              />
              <button
                onClick={saveEdit}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Tambah Proyek Baru */}
      {isAuthenticated && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-xl font-bold mb-4">Tambah Proyek Baru</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Judul Proyek"
              className="border p-2 rounded"
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
            />
            <input
              type="text"
              placeholder="Kategori"
              className="border p-2 rounded"
              value={newProject.category}
              onChange={(e) => setNewProject({...newProject, category: e.target.value})}
            />
          </div>
          <textarea
            placeholder="Deskripsi Proyek"
            className="w-full border p-2 rounded mb-4 h-32"
            value={newProject.description}
            onChange={(e) => setNewProject({...newProject, description: e.target.value})}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Teknologi (pisahkan dengan koma)"
              className="border p-2 rounded"
              value={newProject.technologies.join(", ")}
              onChange={(e) => setNewProject({...newProject, technologies: e.target.value.split(", ")})}
            />
            <input
              type="text"
              placeholder="URL GitHub"
              className="border p-2 rounded"
              value={newProject.githubUrl}
              onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
            />
          </div>
          <input
            type="text"
            placeholder="URL Demo"
            className="w-full border p-2 rounded mb-4"
            value={newProject.liveUrl}
            onChange={(e) => setNewProject({...newProject, liveUrl: e.target.value})}
          />
          <button
            onClick={addProject}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Tambah Proyek
          </button>
        </div>
      )}

      {/* Tampilan Grid Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold">{project.title}</h4>
                {isAuthenticated && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(project)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-2">
                {project.category}
              </span>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h5 className="font-semibold mb-2">Teknologi yang Digunakan:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;