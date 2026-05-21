"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const project1Img = "/assets/project1.jpg";
const project2Img = "/assets/project2.jpg";
const project3Img = "/assets/project3.jpg";
const project4Img = "/assets/project4.jpg";
const project5Img = "/assets/project5.jpg";
const project6Img = "/assets/project6.jpg";

const portfolioProjects = [
    {
        id: 'p1',
        title: 'Luminous City Residence',
        category: 'Residential',
        location: 'Bengaluru',
        shortDesc: 'A contemporary apartment design focusing on natural light and open spaces.',
        imageUrl: project1Img,
    },
    {
        id: 'p2',
        title: 'Tech Hub Office Space',
        category: 'Commercial',
        location: 'Gurugram',
        shortDesc: 'An inspiring and collaborative workspace designed for a leading tech startup.',
        imageUrl: project2Img,
    },
    {
        id: 'p3',
        title: 'Heritage Home Kitchen Remodel',
        category: 'Renovation',
        location: 'Hyderabad',
        shortDesc: 'Blending traditional charm with modern functionality in a heritage property kitchen.',
        imageUrl: project3Img,
    },
    {
        id: 'p4',
        title: 'Suburban Villa Refinement',
        category: 'Residential',
        location: 'Pune',
        shortDesc: 'An elegant interior refresh for a spacious suburban villa, emphasizing comfort and luxury.',
        imageUrl: project4Img,
    },
    {
        id: 'p5',
        title: 'Boutique Retail Experience',
        category: 'Commercial',
        location: 'Chennai',
        shortDesc: 'Crafting a unique and inviting retail environment for a high-end fashion boutique.',
        imageUrl: project5Img,
    },
    {
        id: 'p6',
        title: 'Spa & Wellness Center Transformation',
        category: 'Renovation',
        location: 'Goa',
        shortDesc: 'A serene and rejuvenating transformation of an existing wellness facility.',
        imageUrl: project6Img,
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const verticalLineVariants = {
    hidden: { scaleY: 0, originY: 1, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
};

const PortfolioPage = () => {
    const HeadingWithLine = ({ Tag, children, className = '' }) => (
        <div className={`relative flex items-center ${Tag === 'h1' ? 'justify-center mb-6 text-center' : 'mb-12'}`}>
            {Tag === 'h2' && (
                <motion.div
                    className="absolute left-0 h-10 w-0.5 bg-gray-900 md:h-12 md:w-1 mr-4"
                    variants={verticalLineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
            )}
            {React.createElement(
                Tag,
                { className: `${className} relative z-10 ${Tag === 'h2' ? 'pl-6 md:pl-8' : ''}` },
                children
            )}
        </div>
    );

    return (
        <div className="pt-24 pb-12 bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <HeadingWithLine Tag="h1" className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Our Inspiring Portfolio
                    </HeadingWithLine>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        Explore a curated selection of our most distinctive interior design projects. Each space tells a unique story, crafted with passion, precision, and a deep understanding of our clients' aspirations.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
                    >
                        Start Your Project
                    </Link>
                </motion.div>

                <hr className="my-12 border-gray-300" />

                {/* Portfolio Grid Section */}
                <motion.section
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                >
                    <HeadingWithLine Tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
                        Featured Projects
                    </HeadingWithLine>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {portfolioProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group cursor-pointer border border-gray-200"
                                variants={projectCardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", transition: { duration: 0.3 } }}
                            >
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-10 drop-shadow-md">{project.title}</h3>
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-sm text-indigo-700 font-semibold mb-2">{project.category} | {project.location}</p>
                                    <p className="text-gray-700 mb-4">{project.shortDesc}</p>
                                    <Link
                                        href={`/portfolio/${project.id}`}
                                        className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-900 transition-colors"
                                    >
                                        View Details
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <hr className="my-12 border-gray-300" />

                {/* Custom Project CTA */}
                <section className="text-center bg-indigo-700 text-white p-12 rounded-xl mt-20 shadow-xl">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Envision Your Space?
                    </motion.h2>
                    <motion.p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our portfolio showcases just a glimpse of what's possible. We're excited to learn about your unique project and bring your dream space to life.
                    </motion.p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Schedule a Consultation
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default PortfolioPage;
