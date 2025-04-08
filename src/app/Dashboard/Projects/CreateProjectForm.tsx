import React, { useState } from "react";
import axios from "axios";

interface CreateProjectFormProps {
  onClose: () => void;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const categories = ["Residential", "Commercial", "Hospitality"];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await axios.post("http://localhost:3000/project/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Project created successfully!");
      console.log("Project created:", response.data);
      onClose(); // Close the form after successful submission
    } catch (err) {
      alert("Failed to create project. Please try again.");
      console.error("Error creating project:", err);
      setError("Failed to create project");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create Project</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700">Category</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={handleImageChange}
            />
            {images.length > 0 && (
              <div className="mt-2 p-2 border rounded-lg bg-gray-100 text-sm">
                <strong>Selected Images:</strong>
                <ul className="mt-1">
                  {images.map((file, index) => (
                    <li key={index}>📷 {file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectForm;