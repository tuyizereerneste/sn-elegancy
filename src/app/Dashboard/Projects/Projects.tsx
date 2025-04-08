import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import CreateProjectForm from "./CreateProjectForm";
import { Link } from "react-router-dom";
import axios from "axios";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[]; // Cloudinary URLs
}

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get<{ projects: Project[] }>("http://localhost:3000/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProjects(response.data.projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-6 h-6 mr-2" />
          Create Project
        </button>
      </div>

      {isOpen && <CreateProjectForm onClose={() => setIsOpen(false)} />}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <Link to={`/dashboard/projects/${project.id}`} key={project.id}>
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                {project.images.length > 0 && (
                  <img
                    src={project.images[0]} // Cloudinary URL
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No projects available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;