"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const residentialImg = "/assets/project1.jpg";
const commercialImg = "/assets/project2.jpg";
const renovationImg = "/assets/project3.jpg";
const stagingImg = "/assets/project4.jpg";

const client1Img = "/assets/jalandhar_raur.jpg";
const client2Img = "/assets/gulab_chandra.jpeg";
const client3Img = "/assets/nitin_patel.png";

const serviceCategories = [
    {
        id: 'pop',
        title: 'POP — Plaster of Paris',
        shortDesc: 'Premium POP false ceiling and wall paneling for a clean, contemporary interior look.',
        longDesc: (
            <>
                <p className="mb-3">We deliver precision-crafted Plaster of Paris (POP) ceilings and wall panels that create a smooth, seamless, and architecturally elegant finish. Our POP solutions enhance the visual geometry of any room while enabling integrated lighting design.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>False ceiling design with custom shapes and levels.</li>
                    <li>Cornice and cove lighting integration.</li>
                    <li>Accent wall panels and 3D textured surfaces.</li>
                    <li>Smooth plaster finishes for modern minimalist aesthetics.</li>
                    <li>High-durability bonding and crack-resistant application.</li>
                    <li>Complete painting and primer coating post-installation.</li>
                </ul>
            </>
        ),
        imageUrl: residentialImg,
    },
    {
        id: 'gypsum',
        title: 'Gypsum Board Ceilings',
        shortDesc: 'Lightweight, fire-resistant gypsum board systems for stylish and safe suspended ceilings.',
        longDesc: (
            <>
                <p className="mb-3">Gypsum board is the material of choice for modern suspended ceiling systems due to its light weight, sound insulation, and superior thermal properties. We design, supply, and install gypsum board systems for both residential and commercial projects.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Full suspended grid and gypsum panel installation.</li>
                    <li>Coffered and tray ceiling designs.</li>
                    <li>Acoustic and thermal insulation integrations.</li>
                    <li>Fire-rated systems for commercial compliance.</li>
                    <li>Concealed LED cove and soffit lighting setups.</li>
                    <li>Moisture-resistant board for bathrooms and kitchens.</li>
                </ul>
            </>
        ),
        imageUrl: commercialImg,
    },
    {
        id: 'painting',
        title: 'Interior & Exterior Painting',
        shortDesc: 'Professional painting services using premium paints for flawless, lasting wall finishes.',
        longDesc: (
            <>
                <p className="mb-3">Our team of expert painters delivers meticulous surface preparation and high-quality paint application. We work with leading brands like Asian Paints, Berger, and Dulux to ensure rich, durable finishes that protect and beautify your surfaces.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Interior wall and ceiling painting with smooth roller finish.</li>
                    <li>Exterior weather-shield and texture paint applications.</li>
                    <li>Decorative techniques: ombre, metallic, stencil, and texture.</li>
                    <li>Epoxy flooring and waterproofing coatings.</li>
                    <li>Wood staining, varnishing, and lacquer finishes.</li>
                    <li>Commercial repaints and scheduled maintenance contracts.</li>
                </ul>
            </>
        ),
        imageUrl: renovationImg,
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
        <div className="pt-24 pb-12 mt-12 bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <div className="flex flex-col items-center">
                        <HeadingWithLine Tag="h1" className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight font-poppins">
                            Our Signature Finishes
                        </HeadingWithLine>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        At <strong className="text-indigo-700">Ceilora</strong>, we believe exceptional design goes beyond aesthetics. It's about crafting environments that inspire, function flawlessly, and truly reflect the aspirations of those who inhabit them. Discover our tailored services designed to bring your vision to life.
                    </p>
                    <Link
                        href="/portfolio"
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
                    <HeadingWithLine Tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                        POP, Gypsum & Painting Services
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
                        href="/contact-us"
                        className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Request a Consultation
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default ServicesPage;
