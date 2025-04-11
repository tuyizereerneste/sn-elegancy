import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import CreateBlogForm from "./CreateBlogForm";
import { Link } from "react-router-dom";
import axios from "axios";

interface Blog {
  id: string;
  author: string;
  sector: string;
  title: string;
  content: string;
  image: string; // Corrected property name to match the response
  createdAt: string; // Added createdAt property
}

const Blogs: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get<{ blogs: Blog[] }>("https://sn-elegancy-project.onrender.com/blogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Access the blogs array from the response
        setBlogs(response.data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-6 h-6 mr-2" />
          Create Blog
        </button>
      </div>

      {/* Create Blog Form Modal */}
      {isOpen && <CreateBlogForm onClose={() => setIsOpen(false)} />}

      {/* List of Blogs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={`/dashboard/blogs/${blog.id}`} key={blog.id}>
              {/* Blog Card */}
              <div className="border rounded-lg p-4 shadow">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-700">{blog.content}</p>
                <p className="text-gray-500 mt-2">Author: {blog.author}</p>
                <p className="text-gray-500">Sector: {blog.sector}</p>
                <p className="text-gray-500">Created At: {new Date(blog.createdAt).toLocaleDateString()}</p>  
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;