import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'project-id-1',
    title: 'Urban Oasis Apartment',
    category: 'Residential',
    style: 'Modern',
    imageUrl: '/assets/project1.jpg',
    description: 'A sleek, modern apartment design focusing on minimalist aesthetics and functional living.',
  },
  {
    id: 'project-id-2',
    title: 'Innovate Co-Working Hub',
    category: 'Commercial',
    style: 'Contemporary',
    imageUrl: '/assets/project2.jpg',
    description: 'A vibrant co-working space designed to foster collaboration and creativity.',
  },
  {
    id: 'project-id-3',
    title: 'Serene Master Suite',
    category: 'Residential',
    style: 'Luxury',
    imageUrl: '/assets/project3.jpg',
    description: 'A luxurious bedroom suite designed for ultimate comfort and tranquility.',
  },
  {
    id: 'project-id-4',
    title: 'Chic Cafe Interior',
    category: 'Commercial',
    style: 'Industrial',
    imageUrl: '/assets/project4.jpg',
    description: 'A cozy cafe with an industrial-chic aesthetic, perfect for casual meetups.',
  },
  {
    id: 'project-id-5',
    title: 'Family Home Makeover',
    category: 'Residential',
    style: 'Transitional',
    imageUrl: '/assets/project5.jpg',
    description: 'A complete home renovation balancing traditional charm with modern comfort.',
  },
  {
    id: 'project-id-6',
    title: 'Boutique Retail Space',
    category: 'Commercial',
    style: 'Minimalist',
    imageUrl: '/assets/project6.jpg',
    description: 'An elegant retail space designed to highlight products with clean lines.',
  },
  {
    id: 'project-id-7',
    title: 'Cozy Coffee Corner',
    category: 'Commercial',
    style: 'Industrial',
    imageUrl: '/assets/project4.jpg',
    description: 'Another inviting cafe interior featuring a bold industrial design.',
  },
  {
    id: 'project-id-8',
    title: 'Stylish Family Retreat',
    category: 'Residential',
    style: 'Transitional',
    imageUrl: '/assets/project5.jpg',
    description: 'Renovated family home blending classic warmth with contemporary style.',
  },
  {
    id: 'project-id-9',
    title: 'Luxury Product Display',
    category: 'Commercial',
    style: 'Minimalist',
    imageUrl: '/assets/project6.jpg',
    description: 'Modern minimalist store layout emphasizing product visibility and elegance.',
  },
];

const ClientGalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [styleFilter, setStyleFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Residential', 'Commercial'];
  const styles = ['All', 'Modern', 'Contemporary', 'Luxury', 'Industrial', 'Transitional', 'Minimalist'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = filter === 'All' || project.category === filter;
    const styleMatch = styleFilter === 'All' || project.style === styleFilter;
    return categoryMatch && styleMatch;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Client Gallery
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our diverse portfolio of completed interior design projects, showcasing our passion for transforming spaces into personalized havens.
        </motion.p>

        {/* Filter Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${filter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
              onClick={() => {
                setFilter(cat);
                setShowAll(false); // Reset showAll on filter change
              }}
            >
              {cat}
            </button>
          ))}
          {styles.map(sty => (
            <button
              key={sty}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${styleFilter === sty ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
              onClick={() => {
                setStyleFilter(sty);
                setShowAll(false); // Reset showAll on style change
              }}
            >
              {sty}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden group cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Link to={`/client-gallery/${project.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.category} - {project.style}</p>
                </div>
              </Link>
            </motion.div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-500 text-xl py-10">
              No projects found for the selected filters.
            </div>
          )}
        </div>

        {/* Read More Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 text-center">
            <button
              className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Read More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientGalleryPage;
