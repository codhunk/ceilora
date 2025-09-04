// src/components/Navbar.js
import React, { useState } from 'react'; // Make sure useState is imported
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -150, opacity: 0 }} // More pronounced initial state
      animate={{ y: 0, opacity: 1 }}    // Animate to full visibility
      transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.1 }} // Adjusted for a smoother, slightly slower entry
      className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg py-5 px-8 md:py-6 md:px-16" // Increased padding for more height
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
          Ceilora
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10"> {/* Increased space-x for wider links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors duration-300 relative group`
            }
          >
            Home
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              aria-hidden="true"
            ></motion.span>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors duration-300 relative group`
            }
          >
            About Us
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              aria-hidden="true"
            ></motion.span>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors duration-300 relative group`
            }
          >
            Services
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              aria-hidden="true"
            ></motion.span>
          </NavLink>
          <NavLink
            to="/client-gallery"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors duration-300 relative group`
            }
          >
            Client Gallery
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              aria-hidden="true"
            ></motion.span>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors duration-300 relative group`
            }
          >
            Contact Us
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              aria-hidden="true"
            ></motion.span>
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Increased size */}
              {isOpen ? (
                <motion.path
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></motion.path>
              ) : (
                <motion.path
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></motion.path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", transition: { ease: "easeOut", duration: 0.4 } }, // Smoother opening animation
          closed: { opacity: 0, height: 0, transition: { ease: "easeIn", duration: 0.3 } } // Smoother closing animation
        }}
        className="md:hidden mt-4 overflow-hidden"
      >
        <div className="flex flex-col space-y-3 pb-2">
          <NavLink to="/" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about-us" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/services" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/client-gallery" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Client Gallery</NavLink>
          <NavLink to="/contact-us" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;