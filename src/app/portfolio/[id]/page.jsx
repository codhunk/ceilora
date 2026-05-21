"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        fullDesc: 'This project transformed a compact city apartment into a spacious, light-filled haven. By removing non-structural walls and utilizing a palette of light oak, soft greys, and reflective surfaces, we created a seamless flow between the living, dining, and kitchen areas. Smart storage solutions were integrated to maintain a clutter-free environment, while large windows were framed to maximize city views and bring the outdoors in.',
        keyFeatures: ['Open Concept Layout', 'Smart Home Integration', 'Custom Woodwork', 'Panoramic Views', 'Seamless Indoor-Outdoor Flow', 'Luxury Finishes'],
    },
    {
        id: 'p2',
        title: 'Tech Hub Office Space',
        category: 'Commercial',
        location: 'Gurugram',
        shortDesc: 'An inspiring and collaborative workspace designed for a leading tech startup.',
        imageUrl: project2Img,
        fullDesc: 'Designed to foster creativity and collaboration, this office space features a mix of open work areas, private meeting pods, and relaxed breakout zones. We incorporated biophilic design elements, such as living green walls and natural timber accents, to enhance employee well-being and productivity. A bold, brand-aligned color scheme adds energy and identity to the space, while acoustic panels ensure a comfortable working environment.',
        keyFeatures: ['Biophilic Design', 'Flexible Workstations', 'Acoustic Soundproofing', 'Creative Breakout Zones', 'Interactive Presentation Walls', 'Energy-Efficient Systems'],
    },
    {
        id: 'p3',
        title: 'Heritage Home Kitchen Remodel',
        category: 'Renovation',
        location: 'Hyderabad',
        shortDesc: 'Blending traditional charm with modern functionality in a heritage property kitchen.',
        imageUrl: project3Img,
        fullDesc: 'This renovation carefully preserved the original architectural features of a heritage home kitchen, such as exposed brickwork and high ceilings, while introducing state-of-the-art appliances and custom cabinetry. A large central island serves as both a culinary prep station and a social gathering spot. We selected materials like carrara marble and antique brass hardware to bridge the gap between historic elegance and contemporary convenience.',
        keyFeatures: ['Preserved Historic Architecture', 'Custom Cabinetry', 'Carrara Marble Countertops', 'Professional Grade Appliances', 'Integrated Smart Storage', 'Bespoke Pendant Lighting'],
    },
    {
        id: 'p4',
        title: 'Suburban Villa Refinement',
        category: 'Residential',
        location: 'Pune',
        shortDesc: 'An elegant interior refresh for a spacious suburban villa, emphasizing comfort and luxury.',
        imageUrl: project4Img,
        fullDesc: 'This project focused on elevating the interior design of a spacious suburban villa to create a luxurious yet welcoming family retreat. We introduced a rich palette of deep blues, warm gold accents, and velvet textures. Custom-designed furniture pieces were curated to fit the scale of the rooms, while a layered lighting plan provides warmth and highlights key art pieces and architectural details throughout the home.',
        keyFeatures: ['Bespoke Curated Furniture', 'Layered Lighting Design', 'Velvet & Silk Textiles', 'Rich Harmonious Color Palette', 'Grand Entrance Styling', 'Home Theater Integration'],
    },
    {
        id: 'p5',
        title: 'Boutique Retail Experience',
        category: 'Commercial',
        location: 'Chennai',
        shortDesc: 'Crafting a unique and inviting retail environment for a high-end fashion boutique.',
        imageUrl: project5Img,
        fullDesc: 'To create a memorable shopping experience, we designed a minimalist and elegant space that highlights the boutique\'s curated collection. Custom display racks, integrated LED lighting, and polished concrete floors create a sleek and modern backdrop. A plush lounge area invites customers to relax, while the overall layout guides visitors seamlessly through the store, encouraging engagement with the products.',
        keyFeatures: ['Minimalist Aesthetic', 'Integrated LED Shelving', 'Polished Concrete Flooring', 'Curated Customer Lounge', 'Custom Brass Racks', 'Aesthetic Window Displays'],
    },
    {
        id: 'p6',
        title: 'Spa & Wellness Center Transformation',
        category: 'Renovation',
        location: 'Goa',
        shortDesc: 'A serene and rejuvenating transformation of an existing wellness facility.',
        imageUrl: project6Img,
        fullDesc: 'Inspired by natural elements, we transformed this space into a sanctuary of calm. Utilizing a soothing color scheme of soft earth tones, natural stone finishes, and water features, the design promotes relaxation from the moment clients enter. We paid careful attention to sensory details, incorporating subtle aromatherapy systems, soft ambient lighting, and soundproofing to ensure a peaceful escape from the outside world.',
        keyFeatures: ['Soothing Earth Tones', 'Natural Stone & Wood Finishes', 'Integrated Water Features', 'Ambient Sensory Lighting', 'Soundproof Treatment Rooms', 'Custom Relaxation Lounge'],
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

const PortfolioProjectDetailPage = () => {
    const { id } = useParams();
    const project = portfolioProjects.find((p) => p.id === id);

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
                    <Link href="/portfolio" className="text-indigo-700 hover:underline text-lg font-semibold">
                        Back to Portfolio
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
                    href="/portfolio"
                    className="inline-flex items-center text-indigo-700 hover:text-indigo-900 transition-colors mb-8 font-semibold"
                >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to Portfolio
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
                        {project.category} | {project.location}
                    </motion.p>

                    <motion.p
                        className="text-gray-700 text-lg mb-8 leading-relaxed"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {project.fullDesc}
                    </motion.p>

                    {project.keyFeatures && (
                        <motion.div
                            className="mb-8"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.keyFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700 text-base">
                                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

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

export default PortfolioProjectDetailPage;
