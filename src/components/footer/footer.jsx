"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const getFooterLinkClass = (path) => {
    // Check if current path matches the link, optionally ignoring hashes
    const isActive = pathname === path || (path.includes('#') && pathname === path.split('#')[0]);
    return `hover:text-indigo-400 transition-colors duration-200 text-sm ${isActive ? 'text-indigo-400 underline decoration-indigo-400 underline-offset-4' : ''}`;
  };

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
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 group mb-6 inline-flex">
            {/* <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg group-hover:shadow-indigo-500/50 transition-shadow duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400" style={{ fontFamily: 'var(--font-poppins)' }}>
              Gyandhar
            </span> */}
            <Image src="/logo-tr.png" alt="Ceilora" className='rounded-xl' width={200} height={200} />
          </Link>
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
              <Link href="/" className={getFooterLinkClass('/')}>Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about-us" className={getFooterLinkClass('/about-us')}>About Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/services" className={getFooterLinkClass('/services')}>Services</Link>
            </li>
            <li className="mb-2">
              <Link href="/client-gallery" className={getFooterLinkClass('/client-gallery')}>Client Gallery</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact-us" className={getFooterLinkClass('/contact-us')}>Contact Us</Link>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={footerSectionVariants} transition={{ delay: 0.2 }}>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul>
            <li className="mb-2">
              <Link href="/services#residential" className={getFooterLinkClass('/services#residential')}>Residential Design</Link>
            </li>
            <li className="mb-2">
              <Link href="/services#commercial" className={getFooterLinkClass('/services#commercial')}>Commercial Design</Link>
            </li>
            <li className="mb-2">
              <Link href="/services#renovation" className={getFooterLinkClass('/services#renovation')}>Renovation & Remodeling</Link>
            </li>
            <li className="mb-2">
              <Link href="/services#staging" className={getFooterLinkClass('/services#staging')}>Home Staging</Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div variants={footerSectionVariants} transition={{ delay: 0.3 }}>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <p className="mb-2 text-sm">
            <i className="fas fa-phone mr-2"></i> +91 93581 74038
          </p>
          <p className="mb-2 text-sm">
            <i className="fas fa-envelope mr-2"></i> info@gyandharinterior.com
          </p>
          <p className="mb-4 text-sm">
            <i className="fas fa-map-marker-alt mr-2"></i> A29 Sector Pi 1, Greater Noida, Uttar Pradesh, India
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com/yourdesignInterio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://instagram.com/yourdesignInterio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://pinterest.com/yourdesignInterio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-pinterest-p text-xl"></i>
            </a>
            <a href="https://linkedin.com/company/yourdesignInterio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
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