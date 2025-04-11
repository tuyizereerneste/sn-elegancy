import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Project {
  title: string;
  description: string;
  category: string;
  images: string[];
}


const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    images: [] as string[],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch project details from the backend
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        const response = await axios.get<Project>(`https://sn-elegancy-project.onrender.com/project/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Log the entire response to verify its structure
        console.log('API Response:', response);
  
        // Adjust the code to match the actual response structure
        if (response.data) {
          setProject(response.data);
          setFormData({
            title: response.data.title,
            description: response.data.description,
            category: response.data.category,
            images: response.data.images,
          });
        } else {
          setError('Project data is missing in the response');
        }
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to fetch project details');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFiles = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...imageFiles],
      }));
    }
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put<{ project: Project }>(
        `https://sn-elegancy-project.onrender.com/project/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProject(response.data.project);
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update project details');
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://sn-elegancy-project.onrender.com/project/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/dashboard/projects');
    } catch (error) {
      setError('Failed to delete project');
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  if (!project) {
    return <div className="p-6 text-red-500">Project not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {isEditing ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Title"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Description"
            rows={4}
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
          >
            <option value="">Select Category</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Hospitality">Hospitality</option>
          </select>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mb-4"
          />
          <div className="flex gap-2 flex-wrap mb-4">
            {formData.images.map((img, i) => (
              <img key={i} src={img} alt={`img-${i}`} className="w-32 h-20 object-cover rounded" />
            ))}
          </div>
          <button onClick={handleUpdate} className="btn-primary mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="mb-2 text-gray-600">{project.category}</p>
          <p className="mb-4">{project.description}</p>
          {project.images.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-[300px] h-[200px] object-cover rounded mb-4"
              />
            ))}
          </div>
        )}
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="btn-primary">Edit</button>
            <button onClick={handleDelete} className="btn-danger">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;