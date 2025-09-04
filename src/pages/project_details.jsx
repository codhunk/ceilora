import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import all your project images (or dynamically load them if you have many)
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import project4Img from '../assets/project4.jpg';
import project5Img from '../assets/project5.jpg';
import project6Img from '../assets/project6.jpg';

// Re-define your portfolio projects data here for simplicity,
// but for larger apps, consider moving this to a shared data file
// (e.g., src/data/portfolioData.js) and importing it everywhere needed.
const portfolioProjects = [
    {
        id: 'p1',
        title: 'Luminous City Residence',
        category: 'Residential',
        location: 'Bengaluru',
        shortDesc: 'A contemporary apartment design focusing on natural light and open spaces.',
        imageUrl: project1Img,
        fullDesc: 'This project transformed a compact city apartment into a spacious, light-filled haven. We utilized a minimalist approach with warm wood tones, sleek finishes, and integrated smart home technology. Custom joinery ensures every inch is maximized for both aesthetics and functionality. The living area opens up to a panoramic city view, making it an ideal space for both relaxation and entertaining.',
        keyFeatures: ['Open Concept Layout', 'Smart Home Integration', 'Custom Woodwork', 'Panoramic Views', 'Seamless Indoor-Outdoor Flow', 'Luxury Finishes'],
    },
    {
        id: 'p2',
        title: 'Tech Hub Office Space',
        category: 'Commercial',
        location: 'Gurugram',
        shortDesc: 'An inspiring and collaborative workspace designed for a leading tech startup.',
        imageUrl: project2Img,
        fullDesc: 'Our goal for this commercial project was to create a dynamic and flexible environment that fosters creativity and collaboration. The design features open-plan workstations, sound-insulated meeting pods, a vibrant breakout area, and ergonomic furniture throughout. Brand colors are subtly integrated, creating a strong identity while maintaining a professional atmosphere. Advanced lighting systems reduce eye strain, and modular furniture allows for reconfigurable team spaces.',
        keyFeatures: ['Collaborative Zones', 'Ergonomic Workstations', 'Acoustic Panels', 'Brand Integration', 'Flexible Layouts', 'Advanced Lighting'],
    },
    {
        id: 'p3',
        title: 'Heritage Home Kitchen Remodel',
        category: 'Renovation',
        location: 'Hyderabad',
        shortDesc: 'Blending traditional charm with modern functionality in a heritage property kitchen.',
        imageUrl: project3Img,
        fullDesc: 'This challenging yet rewarding renovation involved updating a kitchen in a heritage home without losing its classic charm. We carefully selected materials like natural stone countertops and custom-paneled cabinetry that complement the existing architecture, while integrating state-of-the-art appliances and a highly efficient layout. The result is a timeless space that serves modern culinary needs. Original architectural details were preserved and enhanced, offering a seamless blend of old-world elegance and contemporary convenience.',
        keyFeatures: ['Custom Cabinetry', 'Natural Stone Countertops', 'Integrated Appliances', 'Period-Sensitive Design', 'Smart Storage Solutions', 'Historic Preservation'],
    },
    {
        id: 'p4',
        title: 'Suburban Villa Refinement',
        category: 'Residential',
        location: 'Pune',
        shortDesc: 'An elegant interior refresh for a spacious suburban villa, emphasizing comfort and luxury.',
        imageUrl: project4Img,
        fullDesc: 'For this expansive suburban villa, we focused on creating luxurious and comfortable living spaces. The design incorporates rich textures, custom-designed furniture pieces, and a sophisticated color palette. Each room is meticulously styled to offer a unique experience while maintaining overall design harmony. Special attention was given to creating inviting outdoor living areas that seamlessly extend the interior. The grand entrance foyer sets the tone for the opulent yet welcoming interior.',
        keyFeatures: ['Luxurious Finishes', 'Custom Furniture', 'Harmonious Color Schemes', 'Integrated Outdoor Living', 'Smart Climate Control', 'Expansive Layout'],
    },
    {
        id: 'p5',
        title: 'Boutique Retail Experience',
        category: 'Commercial',
        location: 'Chennai',
        shortDesc: 'Crafting a unique and inviting retail environment for a high-end fashion boutique.',
        imageUrl: project5Img,
        fullDesc: 'Designing for this boutique meant creating an immersive shopping experience. We used a blend of raw and refined materials to highlight the merchandise, focusing on clever lighting design to showcase products effectively. The layout encourages exploration, with distinct zones for different collections, all contributing to an exclusive and memorable brand presence. Interactive displays and custom fitting rooms enhance the customer journey.',
        keyFeatures: ['Strategic Lighting', 'Custom Display Units', 'Unique Material Palette', 'Brand Storytelling', 'Interactive Elements', 'Intuitive Navigation'],
    },
    {
        id: 'p6',
        title: 'Spa & Wellness Center Transformation',
        category: 'Renovation',
        location: 'Goa',
        shortDesc: 'A serene and rejuvenating transformation of an existing wellness facility.',
        imageUrl: project6Img,
        fullDesc: 'The aim for this renovation was to transform an outdated wellness center into a tranquil sanctuary. We incorporated natural elements like wood, water features, and lush greenery to evoke a sense of calm. The design emphasizes soft lighting, soothing textures, and private treatment rooms, all contributing to a peaceful and restorative atmosphere for guests. Custom soundscapes and aromatherapy diffusion systems further enhance the sensory experience.',
        keyFeatures: ['Biophilic Design Elements', 'Ambient Lighting', 'Soundproofing', 'Relaxing Color Schemes', 'Sensory Integration', 'Holistic Design Approach'],
    },
];

// Animation variants for page transitions
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

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

const ProjectDetailPage = () => {
    const { id } = useParams(); // Get the project ID from the URL
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
                    <Link to="/portfolio" className="text-indigo-700 hover:underline text-lg font-semibold">
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
                    to="/portfolio"
                    className="inline-flex items-center text-indigo-700 hover:text-indigo-900 transition-colors mb-8 font-semibold"
                >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to all Projects
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

                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                        <motion.div
                            className="mb-8"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                            <ul className="list-disc list-inside text-gray-700 text-lg grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.keyFeatures.map((feature, index) => (
                                    <motion.li key={index} variants={listItemVariants}>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    <div className="text-center mt-12">
                        <Link
                            to="/contact-us"
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

export default ProjectDetailPage;