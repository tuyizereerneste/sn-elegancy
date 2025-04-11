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
  const [loading, setLoading] = useState(false);

  const sectors = ["Technology", "Health", "Education", "Entertainment"];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("sector", sector);
    if (image) {
      formData.append("image", image); // ✅ single image field matches backend
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("https://sn-elegancy-project.onrender.com/blog/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Blog created:", res.data);
      // Clear form
      setTitle("");
      setContent("");
      setAuthor("");
      setSector("");
      setImage(null);
      setImagePreview(null);
      onClose();
    } catch (err: any) {
      console.error("Error creating blog:", err);
      setError(err?.response?.data?.message || "Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full border rounded p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full border rounded p-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <select
            className="w-full border rounded p-2"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            required
          >
            <option value="" disabled>Select Sector</option>
            {sectors.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-24 object-cover rounded border mt-2"
            />
          )}

          {error && <p className="text-red-600">{error}</p>}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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

export default CreateBlogForm;