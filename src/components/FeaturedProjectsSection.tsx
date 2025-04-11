import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  video: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="group relative overflow-hidden rounded-lg shadow-lg"
  >
    <div className="relative aspect-w-16 aspect-h-9">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <video
        src={project.video}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        muted
        loop
        playsInline
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-200">{project.description}</p>
      </div>
    </div>
  </motion.div>
);

const FeaturedProjectsSection: React.FC = () => {
  const featuredProjects = [
    {
      title: 'Luxury Villa Renovation',
      description: 'Complete transformation of a 5000 sq ft residential space',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
      video: '/VIDEO.mp4'
    },
    {
      title: 'Modern Office Design',
      description: 'Contemporary workspace for a tech startup',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      video: 'https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7468c8101c52f3530c08355df3&profile_id=175'
    },
    {
      title: 'Boutique Hotel Lobby',
      description: 'Elegant and welcoming entrance design',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop',
      video: 'https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7468c8101c52f3530c08355df3&profile_id=175'
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest transformations and innovative designs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;