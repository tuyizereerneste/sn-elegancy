import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
}

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get<Project>(
          `https://sn-elegancy-project.onrender.com/project/${id}`
        );
        setProject(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-center">Loading project...</div>;
  }

  if (!project) {
    return <div className="p-6 text-center text-red-500">Project not found.</div>;
  }

  return (
    <div className="pt-20 px-6 mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((imgUrl, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={imgUrl}
              alt={`Project Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;