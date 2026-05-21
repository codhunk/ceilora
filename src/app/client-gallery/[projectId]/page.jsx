"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'project-id-1',
    title: 'Urban Oasis Apartment',
    category: 'Residential',
    style: 'Modern',
    imageUrl: '/assets/project1.jpg',
    description: 'A sleek, modern apartment design focusing on minimalist aesthetics and functional living. Features custom built-ins, energy-efficient lighting, and a serene, neutral color palette that maximizes spatial perception.',
  },
  {
    id: 'project-id-2',
    title: 'Innovate Co-Working Hub',
    category: 'Commercial',
    style: 'Contemporary',
    imageUrl: '/assets/project2.jpg',
    description: 'A vibrant co-working space designed to foster collaboration and creativity. Equipped with modern workstations, green walls, soundproof meeting rooms, and state-of-the-art presentation facilities.',
  },
  {
    id: 'project-id-3',
    title: 'Serene Master Suite',
    category: 'Residential',
    style: 'Luxury',
    imageUrl: '/assets/project3.jpg',
    description: 'A luxurious bedroom suite designed for ultimate comfort and tranquility. Featuring plush textiles, bespoke task lighting, custom walk-in wardrobe, and a spa-like en suite bathroom.',
  },
  {
    id: 'project-id-4',
    title: 'Chic Cafe Interior',
    category: 'Commercial',
    style: 'Industrial',
    imageUrl: '/assets/project4.jpg',
    description: 'A cozy cafe with an industrial-chic aesthetic. Combines exposed brickwork, steel frames, and reclaimed timber to create a warm and inviting neighborhood gathering spot.',
  },
  {
    id: 'project-id-5',
    title: 'Family Home Makeover',
    category: 'Residential',
    style: 'Transitional',
    imageUrl: '/assets/project5.jpg',
    description: 'A complete home renovation balancing traditional charm with modern comfort. Tailored to an active family, prioritizing durable materials, smart storage, and open-plan living.',
  },
  {
    id: 'project-id-6',
    title: 'Boutique Retail Space',
    category: 'Commercial',
    style: 'Minimalist',
    imageUrl: '/assets/project6.jpg',
    description: 'An elegant retail space designed to highlight products with clean lines, concealed storage, and custom spotlighting that creates a memorable shopping experience.',
  },
  {
    id: 'project-id-7',
    title: 'Cozy Coffee Corner',
    category: 'Commercial',
    style: 'Industrial',
    imageUrl: '/assets/project4.jpg',
    description: 'Another inviting cafe interior featuring a bold industrial design with metallic accents, warm filament bulb illumination, and custom barista counters.',
  },
  {
    id: 'project-id-8',
    title: 'Stylish Family Retreat',
    category: 'Residential',
    style: 'Transitional',
    imageUrl: '/assets/project5.jpg',
    description: 'Renovated family home blending classic warmth with contemporary style. Thoughtful layouts create cozy private spaces alongside a spacious central hub.',
  },
  {
    id: 'project-id-9',
    title: 'Luxury Product Display',
    category: 'Commercial',
    style: 'Minimalist',
    imageUrl: '/assets/project6.jpg',
    description: 'Modern minimalist store layout emphasizing product visibility, sleek geometric shelving, and a clean, high-contrast monochrome aesthetic.',
  },
];

const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

const ClientProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="pt-24 pb-12 bg-gray-100 min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-gray-700"
                >
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-lg mb-6">The project you are looking for does not exist.</p>
                    <Link href="/client-gallery" className="text-indigo-700 hover:underline text-lg font-semibold">
                        Back to Client Gallery
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="pt-24 pb-12 bg-gray-100 min-h-screen font-sans"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <Link
                    href="/client-gallery"
                    className="inline-flex items-center text-indigo-700 hover:text-indigo-900 transition-colors mb-8 font-semibold"
                >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to Client Gallery
                </Link>

                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-200">
                    <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-80 md:h-96 object-cover rounded-lg mb-8 shadow-md"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-indigo-700 font-semibold mb-6"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {project.category} | {project.style}
                    </motion.p>

                    <motion.p
                        className="text-gray-700 text-lg mb-8 leading-relaxed"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {project.description}
                    </motion.p>

                    <div className="text-center mt-12">
                        <Link
                            href="/contact-us"
                            className="inline-block bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ClientProjectDetailPage;
