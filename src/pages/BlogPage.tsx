import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "2024 Interior Design Trends: Blending Comfort with Sophistication",
      excerpt: "Discover the latest interior design trends that are shaping homes and workspaces in 2024. From sustainable materials to smart home integration, we explore how modern design is evolving.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
      author: "Sarah Norton",
      date: "March 15, 2024",
      category: "Design Trends"
    },
    {
      id: 2,
      title: "Maximizing Small Spaces: Smart Design Solutions",
      excerpt: "Learn innovative approaches to make the most of compact living spaces. Our expert designers share their top tips for creating functional and beautiful small-space interiors.",
      image: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=1000&auto=format&fit=crop",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Space Planning"
    }
  ];

  return (
    <div className="pt-20">
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
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;