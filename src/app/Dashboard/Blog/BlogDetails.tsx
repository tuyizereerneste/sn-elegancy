import React, { useState } from "react";
import axios from "axios";

interface CreateBlogFormProps {
  onClose: () => void;
}

const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [sector, setSector] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sectors = ["Technology", "Health", "Education", "Entertainment"];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);

      // Generate a preview for the selected image
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("sector", sector);
    if (image) {
      formData.append("image", image);
    }

    try {
      const token = localStorage.getItem('token'); // Assuming you have a token stored
      const response = await axios.post("http://localhost:3000/blog/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Blog created successfully:", response.data);

      // Clear the form and close it after submission
      setTitle("");
      setContent("");
      setAuthor("");
      setSector("");
      setImage(null);
      setImagePreview(null);
      onClose();
    } catch (err) {
      console.error("Error creating blog:", err);
      setError("Failed to create blog. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
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

          {/* Content */}
          <div>
            <label className="block text-gray-700">Content</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-gray-700">Author</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          {/* Sector */}
          <div>
            <label className="block text-gray-700">Sector</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              required
            >
              <option value="" disabled>Select a sector</option>
              {sectors.map((sec) => (
                <option key={sec} value={sec}>{sec}</option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-2 p-2 border rounded-lg bg-gray-100 text-sm">
                <strong>Selected Image:</strong>
                <div className="flex justify-center mt-1">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-24 object-cover rounded"
                  />
                </div>
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

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;