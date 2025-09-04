// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for footer sections
  const footerSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.footer
      className="bg-gray-800 text-gray-300 py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10 mb-10">

        {/* Brand Info */}
        <motion.div variants={footerSectionVariants}>
          {/* <h3 className="text-xl font-bold text-white mb-4">
            Ceilora
          </h3> */}
          <img src="/favicon.png" alt="Ceilora Logo" className="h-12 w-auto mb-4" />
          <p className="text-sm leading-relaxed mb-4">
            Crafting inspiring spaces that blend aesthetics with functionality. We bring your design dreams to life.
          </p>
          <p className="text-sm">
            Based in Greater Noida, Uttar Pradesh, India.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={footerSectionVariants} transition={{ delay: 0.1 }}>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about-us" className="hover:text-indigo-400 transition-colors duration-200 text-sm">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Services</Link>
            </li>
            <li className="mb-2">
              <Link to="/client-gallery" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Client Gallery</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact-us" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Contact Us</Link>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={footerSectionVariants} transition={{ delay: 0.2 }}>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul>
            <li className="mb-2">
              <Link to="/services#residential" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Residential Design</Link>
            </li>
            <li className="mb-2">
              <Link to="/services#commercial" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Commercial Design</Link>
            </li>
            <li className="mb-2">
              <Link to="/services#renovation" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Renovation & Remodeling</Link>
            </li>
            <li className="mb-2">
              <Link to="/services#staging" className="hover:text-indigo-400 transition-colors duration-200 text-sm">Home Staging</Link>
            </li>
            {/* Add more specific services if needed */}
          </ul>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div variants={footerSectionVariants} transition={{ delay: 0.3 }}>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <p className="mb-2 text-sm">
            <i className="fas fa-phone mr-2"></i> +91 93581 74038
          </p>
          <p className="mb-2 text-sm">
            <i className="fas fa-envelope mr-2"></i> info@ceilorainterior.com
          </p>
          <p className="mb-4 text-sm">
            <i className="fas fa-map-marker-alt mr-2"></i> A29 Sector Pi 1, Greater Noida, Uttar Pradesh, India
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com/yourdesignstudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://instagram.com/yourdesignstudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://pinterest.com/yourdesignstudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-pinterest-p text-xl"></i>
            </a>
            <a href="https://linkedin.com/company/yourdesignstudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">
        &copy; {currentYear} Ceilora-interior. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;