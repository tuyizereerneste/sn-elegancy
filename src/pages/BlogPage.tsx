import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

// Define the type for the blog post
interface BlogPost {
  id: string;
  author: string;
  sector: string;
  title: string;
  content: string;
  image: string;
  createdAt: string; // Date string from the backend
}

// Define the type for the response from the backend
interface BlogResponse {
  blogs: BlogPost[];
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Explicitly define the response type here
        const response = await axios.get<BlogResponse>("http://localhost:3000/blogs");
        setBlogPosts(response.data.blogs); // TypeScript will now know the structure
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Function to format the date into a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="pt-20 mt-8">
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-200">
              Insights, tips, and inspiration for your interior design journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {post.sector}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(post.createdAt)} {/* Display formatted date */}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-semibold hover:text-primary-dark">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;