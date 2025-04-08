import React, { useState } from "react";
import axios from "axios";

interface CreateTestimonyFormProps {
  onClose: () => void;
}

const CreateTestimonyForm: React.FC<CreateTestimonyFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [work, setWork] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Authentication token not found.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("message", message);
    if (work) formData.append("work", work);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/testimonies/create", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Testimony created:", response.data);
      onClose();
    } catch (error) {
      console.error("Failed to create testimony:", error);
      alert("Failed to create testimony.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create Testimonial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Work</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={handleImageChange}
            />
            {image && (
              <div className="mt-2 p-2 border rounded-lg bg-gray-100 text-sm">
                <strong>Selected Image:</strong>
                <p>📷 {image.name}</p>
              </div>
            )}
          </div>

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
              disabled={loading}
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTestimonyForm;