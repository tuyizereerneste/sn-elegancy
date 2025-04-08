import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Calendar, User } from "lucide-react";

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

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get<BlogPost>(`http://localhost:3000/blog/${id}`);
        setBlogPost(response.data); // Set blog post state with the fetched data
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlogDetails();
  }, [id]);

  // Function to format the date into a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!blogPost) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600">Blog post not found!</p>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
  {/* Hero Section with blog image */}
  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg mb-12">
    <img
      src={blogPost.image}
      alt={blogPost.title}
      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="mt-6">
    <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
    <div className="flex items-center text-sm text-gray-500 mb-6">
      <User className="h-4 w-4 mr-2" />
      {blogPost.author}
      <span className="mx-2">|</span>
      <Calendar className="h-4 w-4 mr-2" />
      {formatDate(blogPost.createdAt)}
    </div>
    <p className="text-lg text-gray-800 leading-relaxed mb-8">{blogPost.content}</p>
  </div>

  {/* CTA Section */}
  <div className="bg-gray-50 w-full py-20 text-center">
    <h2 className="text-3xl font-semibold mb-4">Enjoyed this article?</h2>
    <p className="text-xl text-gray-600 mb-8">
      Want to learn more about interior design? Explore other insightful articles.
    </p>
    <Link to="/blog" className="btn-primary px-6 py-2 bg-primary text-white rounded-lg text-lg hover:bg-primary-dark transition-colors">
      Back to Blogs
    </Link>
  </div>
</div>

  );
};

export default BlogDetailsPage;