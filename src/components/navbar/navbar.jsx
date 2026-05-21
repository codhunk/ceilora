"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors duration-300 relative group`;
  };

  const getUnderlineClass = (path) => {
    const isActive = pathname === path;
    return `absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`;
  };

  return (
    <motion.nav
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.1 }}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg py-4 px-8 md:py-4 md:px-16"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 group">
          {/* <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg group-hover:shadow-indigo-500/50 transition-shadow duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700" style={{fontFamily: 'var(--font-poppins)'}}>
            Gyandhar
          </span> */}
          <Image src="/logo.png" alt="Ceilora" className='hidden md:block rounded-xl' width={200} height={50} priority />
          <div className="md:hidden flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg font-poppins text-3xl">
            G
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className={getLinkClass('/')}>
            Home
            <motion.span
              className={getUnderlineClass('/')}
              aria-hidden="true"
            ></motion.span>
          </Link>
          <Link href="/about-us" className={getLinkClass('/about-us')}>
            About Us
            <motion.span
              className={getUnderlineClass('/about-us')}
              aria-hidden="true"
            ></motion.span>
          </Link>
          <Link href="/services" className={getLinkClass('/services')}>
            Services
            <motion.span
              className={getUnderlineClass('/services')}
              aria-hidden="true"
            ></motion.span>
          </Link>
          <Link href="/client-gallery" className={getLinkClass('/client-gallery')}>
            Client Gallery
            <motion.span
              className={getUnderlineClass('/client-gallery')}
              aria-hidden="true"
            ></motion.span>
          </Link>
          <Link href="/contact-us" className={getLinkClass('/contact-us')}>
            Contact Us
            <motion.span
              className={getUnderlineClass('/contact-us')}
              aria-hidden="true"
            ></motion.span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          open: { opacity: 1, height: "auto", transition: { ease: "easeOut", duration: 0.4 } },
          closed: { opacity: 0, height: 0, transition: { ease: "easeIn", duration: 0.3 } }
        }}
        className="md:hidden mt-4 overflow-hidden"
      >
        <div className="flex flex-col space-y-3 pb-2">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about-us" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/services" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/client-gallery" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Client Gallery</Link>
          <Link href="/contact-us" className="block text-gray-700 hover:text-indigo-600 px-4 py-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;