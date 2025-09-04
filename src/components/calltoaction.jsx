// src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = ({ text, link, primary = true }) => {
  const buttonClasses = primary
    ? "bg-indigo-600 text-white hover:bg-indigo-700"
    : "bg-white text-indigo-700 hover:bg-gray-100 border border-indigo-700";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block" // Ensures motion.div wraps only the button
    >
      <Link
        to={link}
        className={`p-4 rounded-full font-semibold shadow-lg transition-all duration-300 ${buttonClasses}`}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default CallToAction;