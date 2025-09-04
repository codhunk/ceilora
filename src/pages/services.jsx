import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Example images for service categories
import residentialImg from '../assets/project1.jpg';
import commercialImg from '../assets/project2.jpg';
import renovationImg from '../assets/project3.jpg';
import stagingImg from '../assets/project4.jpg';

// Example testimonial images (replace with actual client photos if available)
import client1Img from '../assets/jalandhar_raur.jpg';
import client2Img from '../assets/gulab_chandra.jpeg';
import client3Img from '../assets/nitin_patel.png';

const serviceCategories = [
    {
        id: 'residential',
        title: 'Residential Interior Design',
        shortDesc: 'Creating personalized and elegant homes that reflect your unique lifestyle.',
        longDesc: (
            <>
                <p className="mb-3">Our residential design service focuses on crafting comfortable, functional, and aesthetically pleasing living spaces. From conceptualization to final touches, we handle every aspect to ensure your home is a true reflection of your personality.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Full-service interior design for new builds and existing homes.</li>
                    <li>Space planning and furniture layouts.</li>
                    <li>Color palette and material selection.</li>
                    <li>Custom furniture and millwork design.</li>
                    <li>Lighting design and selection.</li>
                    <li>Accessory sourcing and styling.</li>
                </ul>
            </>
        ),
        imageUrl: residentialImg,
    },
    {
        id: 'commercial',
        title: 'Commercial Interior Design',
        shortDesc: 'Designing functional and inspiring commercial spaces that enhance productivity and brand identity.',
        longDesc: (
            <>
                <p className="mb-3">We specialize in designing commercial environments that are not only visually striking but also highly efficient and conducive to business success. We understand the unique demands of commercial projects.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Office spaces, retail stores, restaurants, and hospitality venues.</li>
                    <li>Brand integration and aesthetic alignment.</li>
                    <li>Ergonomic and functional space planning.</li>
                    <li>Material and finish specifications for durability.</li>
                    <li>Compliance with commercial building codes and regulations.</li>
                </ul>
            </>
        ),
        imageUrl: commercialImg,
    },
    {
        id: 'renovation',
        title: 'Renovation & Remodeling',
        shortDesc: 'Transforming existing spaces with strategic planning and modern design solutions.',
        longDesc: (
            <>
                <p className="mb-3">Give your property a new lease on life with our comprehensive renovation and remodeling services. We work closely with contractors to ensure a seamless execution of your refreshed vision.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Kitchen and bathroom remodels.</li>
                    <li>Full home transformations and extensions.</li>
                    <li>Structural alterations and space reconfiguration.</li>
                    <li>Selection of fixtures, fittings, and appliances.</li>
                    <li>Project management and contractor liaison.</li>
                </ul>
            </>
        ),
        imageUrl: renovationImg,
    },
    {
        id: 'staging',
        title: 'Home Staging & Styling',
        shortDesc: 'Maximizing property appeal for sale or creating a curated, picture-perfect look.',
        longDesc: (
            <>
                <p className="mb-3">Whether you're selling your home or simply want to elevate its aesthetic for a special occasion, our staging and styling services provide the perfect touch to create an inviting and aspirational atmosphere.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Property assessment and recommendations for staging.</li>
                    <li>Furniture rental and arrangement.</li>
                    <li>Strategic placement of art, accessories, and decor.</li>
                    <li>Enhanced curb appeal and outdoor styling.</li>
                    <li>Photo-ready styling for real estate listings.</li>
                </ul>
            </>
        ),
        imageUrl: stagingImg,
    },
];

const testimonials = [
    {
        id: 1,
        name: 'Jalandhar.',
        location: 'Bengaluru',
        quote: 'The team transformed our old apartment into a modern oasis. Their attention to detail and ability to understand our vision was truly remarkable. Highly recommend!',
        image: client1Img,
    },
    {
        id: 2,
        name: 'Anuj Kumar.',
        location: 'Mumbai',
        quote: 'We needed our office space to be both functional and inspiring, and they delivered beyond our expectations. Productivity has definitely seen a boost!',
        image: client2Img,
    },
    {
        id: 3,
        name: 'Nitin Patel.',
        location: 'Delhi',
        quote: 'Our home renovation felt daunting, but their project management made it seamless. The new kitchen is a dream come true!',
        image: client3Img,
    },
];

const faqs = [
    {
        id: 1,
        question: 'What is your typical design process?',
        answer: 'Our process usually begins with an initial consultation to understand your needs and vision. This is followed by conceptualization, design development, material selection, and finally, project execution and styling. We keep you informed and involved at every stage.',
    },
    {
        id: 2,
        question: 'How long does a typical interior design project take?',
        answer: 'The duration varies greatly depending on the scope and complexity of the project. A small room refresh might take a few weeks, while a full home renovation could take several months. We provide an estimated timeline during the initial consultation.',
    },
    {
        id: 3,
        question: 'What is your fee structure?',
        answer: 'Our fees are typically based on a combination of a flat design fee, a percentage of the total project cost, or an hourly rate, depending on the project type and client preference. We discuss this transparently during our initial consultation.',
    },
    {
        id: 4,
        question: 'Do you work with existing furniture and decor?',
        answer: 'Absolutely! We believe in incorporating cherished pieces into new designs where appropriate. Our goal is to create a harmonious space that reflects your style, whether that involves new items, existing pieces, or a combination of both.',
    },
];

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.4, ease: "easeIn" } }
};

const testimonialCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Vertical line variants for animation (starts from bottom, grows up)
const verticalLineVariants = {
    hidden: { scaleY: 0, originY: 1, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
};

const ServicesPage = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    // Component for headings with an animated vertical line
    const HeadingWithLine = ({ Tag, children, className = '' }) => (
        <div className={`relative flex items-center ${Tag === 'h1' ? 'justify-center mb-6 text-center' : 'mb-12'}`}>
            {/* The vertical line */}
            {/* H1 is often centered, so line is often not aligned to left in that case. */}
            {/* For H2s, the line appears to the left. */}
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
                    {/* Centered H1 with no left line */}
                    <div className="flex flex-col items-center">
                        <HeadingWithLine Tag="h1" className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Transforming Spaces, Enriching Lives
                        </HeadingWithLine>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        At <strong className="text-indigo-700">Ceilora</strong>, we believe exceptional design goes beyond aesthetics. It's about crafting environments that inspire, function flawlessly, and truly reflect the aspirations of those who inhabit them. Discover our tailored services designed to bring your vision to life.
                    </p>
                    <Link
                        to="/portfolio"
                        className="inline-block bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
                    >
                        View Our Portfolio
                    </Link>
                </motion.div>

                <hr className="my-12 border-gray-300" />

                {/* Service Categories Section */}
                <motion.section
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                >
                    <HeadingWithLine Tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Comprehensive Services
                    </HeadingWithLine>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {serviceCategories.map((service) => (
                            <motion.div
                                key={service.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer flex flex-col group hover:scale-[1.01] transition-transform duration-300 border border-gray-200"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", transition: { duration: 0.3 } }}
                                onClick={() => toggleExpand(service.id)}
                            >
                                <div className="relative overflow-hidden h-65">
                                    <img
                                        src={service.imageUrl}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                    <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-white z-10 drop-shadow-md">{service.title}</h3>
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-gray-700 mb-4">{service.shortDesc}</p>

                                    <AnimatePresence initial={false}>
                                        {expandedId === service.id && (
                                            <motion.div
                                                key="content"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={contentVariants}
                                                className="overflow-hidden"
                                            >
                                                <div className="text-gray-700 mt-4 border-t pt-4 border-gray-200">
                                                    {service.longDesc}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button className="mt-4 text-indigo-700 font-semibold flex items-center group hover:text-indigo-900">
                                        {expandedId === service.id ? 'Show Less' : 'Learn More'}
                                        <motion.span
                                            className="ml-2"
                                            animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </motion.span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <hr className="my-12 border-gray-300" />

                {/* How We Work Section */}
                <motion.section
                    className="mb-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                >
                    <HeadingWithLine Tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Design Process
                    </HeadingWithLine>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                        We follow a structured yet flexible approach to ensure your project is executed flawlessly, from initial concept to final installation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '💡', title: 'Consultation & Discovery', desc: 'Understanding your vision, needs, and lifestyle.' },
                            { icon: '📐', title: 'Concept & Planning', desc: 'Developing design concepts, layouts, and material palettes.' },
                            { icon: '✨', title: 'Execution & Management', desc: 'Overseeing procurement, construction, and installation.' },
                            { icon: '🏠', title: 'Final Styling & Handover', desc: 'Adding the finishing touches and revealing your transformed space.' },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="text-5xl mb-4 text-indigo-600">{step.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-700 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <hr className="my-12 border-gray-300" />

                {/* Testimonials Section */}
                <motion.section
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                >
                    <HeadingWithLine Tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
                        What Our Clients Say
                    </HeadingWithLine>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-200"
                                variants={testimonialCardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-indigo-300 shadow-md"
                                />
                                <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                                <p className="font-semibold text-indigo-700 text-lg">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <hr className="my-12 border-gray-300" />

                {/* FAQ Section */}
                <motion.section
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                >
                    <HeadingWithLine Tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </HeadingWithLine>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq) => (
                            <motion.div
                                key={faq.id}
                                className="bg-white rounded-xl shadow-md mb-4 overflow-hidden border border-gray-200"
                                variants={faqItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <button
                                    className="flex justify-between items-center w-full p-6 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    {faq.question}
                                    <motion.span
                                        className="ml-4 text-indigo-600"
                                        animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {expandedFaq === faq.id && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={contentVariants}
                                            className="px-6 pb-6 text-gray-700"
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Every design journey is unique. We offer bespoke solutions tailored to your specific project requirements. Let's discuss your vision.
                    </motion.p>
                    <Link
                        to="/contact-us"
                        className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Request a Consultation
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default ServicesPage;