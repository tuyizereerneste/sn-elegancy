import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Testimonial {
  id: string;
  image?: string;
  name: string;
  role: string;
  message: string;
  work?: string;
  createdAt: string;
}

const TestimonyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [testimony, setTestimony] = useState<Testimonial | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    work: '',
    image: '',
  });

  useEffect(() => {
    const fetchTestimony = async () => {
      try {
        const token = localStorage.getItem("token");
  
        const res = await axios.get<{ testimony: Testimonial }>(`https://sn-elegancy-project.onrender.com/testimonies/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const data = res.data.testimony;
        setTestimony(data);
        setFormData({
          name: data.name,
          role: data.role,
          message: data.message,
          work: data.work || '',
          image: data.image || '',
        });
      } catch (error) {
        console.error("Failed to fetch testimony:", error);
      }
    };
  
    if (id) fetchTestimony();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = URL.createObjectURL(e.target.files[0]);
      setFormData((prev) => ({
        ...prev,
        image: imageFile,
      }));
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://sn-elegancy-project.onrender.com/testimonies/${id}`);
      navigate('/dashboard/testimonials');
    } catch (err) {
      console.error("Failed to delete testimony:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://sn-elegancy-project.onrender.com/testimonies/${id}`, formData);
      setTestimony({ ...testimony!, ...formData });
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update testimony:", error);
    }
  };

  if (!testimony) {
    return <div className="p-6 text-red-500">Testimonial not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {isEditing ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Edit Testimonial</h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Name"
          />
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Role"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Message"
            rows={4}
          />
          <input
            name="work"
            value={formData.work}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Work"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Testimonial cover"
              className="w-32 h-20 object-cover rounded mb-4"
            />
          )}
          <button onClick={handleUpdate} className="btn-primary mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-2">{testimony.name}</h1>
          <p className="mb-2 text-gray-600">{testimony.role} | {testimony.work}</p>
          <p className="mb-4">{testimony.message}</p>
          {testimony.image && (
            <img
              src={testimony.image}
              alt="Testimonial cover"
              className="w-[300px] h-[200px] object-cover rounded mb-4"
            />
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

export default TestimonyDetails;