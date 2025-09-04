import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Import your portfolio project images
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import project4Img from '../assets/project4.jpg';
import project5Img from '../assets/project5.jpg';
import project6Img from '../assets/project6.jpg';

// --- Data for Portfolio Projects ---
// Ideally, this data would come from an API or a separate data file
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

// --- Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

// Vertical line variants for animation (starts from bottom, grows up)
const verticalLineVariants = {
    hidden: { scaleY: 0, originY: 1, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
};

const PortfolioPage = () => {
    // Component for headings with an animated vertical line
    const HeadingWithLine = ({ Tag, children, className = '' }) => (
        <div className={`relative flex items-center ${Tag === 'h1' ? 'justify-center mb-6 text-center' : 'mb-12'}`}>
            {/* The vertical line */}
            {Tag === 'h2' && ( // Only show line for h2, h1 is centered differently
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
                { className: `${className} relative z-10 ${Tag === 'h2' ? 'pl-6 md:pl-8' : ''}` }, // Add padding-left for h2
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
                        to="/contact-us"
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
                        {portfolioProjects.map((project, index) => (
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
                                    <Link // Changed from <a> to <Link> for React Router navigation
                                        to={`/portfolio/${project.id}`} // Dynamic path here!
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
                        to="/contact-us"
                        className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Schedule a Consultation
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default PortfolioPage;