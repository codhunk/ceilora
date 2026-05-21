"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CallToAction from '../components/calltoaction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const heroVideo = "/assets/interior_design_hero.mp4";
const project1Img = "/assets/project1.jpg";
const project2Img = "/assets/project2.jpg";
const project3Img = "/assets/project3.jpg";

// Data structures for information sections
const stats = [
  { value: "150+", label: "Luxury Projects Delivered" },
  { value: "12+", label: "Elite Designers & Architects" },
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "15+", label: "Design & Innovation Awards" }
];

const processes = [
  {
    step: "01",
    title: "Consult & Conceive",
    desc: "We analyze your lifestyle, space requirements, and design aspirations to create an aligned initial layout and aesthetic brief."
  },
  {
    step: "02",
    title: "Plan & Blueprint",
    desc: "Our architects map exact 2D floor plans, photorealistic 3D renders, and curate custom material, texture, and color palettes."
  },
  {
    step: "03",
    title: "Craft & Supervise",
    desc: "We source premium materials and manage trusted execution partners, ensuring micro-details align with our high standards."
  },
  {
    step: "04",
    title: "Reveal & Handover",
    desc: "The final reveal—a fully curated, polished, and custom-styled space that is immediately ready for you to live in and enjoy."
  }
];

const coreValues = [
  {
    title: "Bespoke Innovation",
    desc: "We design spaces custom-tailored to your unique style, avoiding generic templates and off-the-shelf layouts.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    )
  },
  {
    title: "Flawless Project Management",
    desc: "Timelines and budgets are strictly monitored. We coordinate engineering, supply chains, and installation seamlessly.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
    )
  },
  {
    title: "Impeccable Craftsmanship",
    desc: "From custom wardrobe joinery to detailed lighting integrations, we work only with top-tier finishing professionals.",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: "Ceilora completely redefined our apartment. The spatial flow and custom carpentry they executed turned our home into a modern masterpiece. Their attention to detail was stellar.",
    author: "Rohan & Meera Sen",
    role: "Owners, Urban Oasis Apartment"
  },
  {
    quote: "Our co-working space has received endless compliments from partners and visitors. Ceilora balanced biophilia, acoustic privacy, and collaborative areas with perfection.",
    author: "Vikram Malhotra",
    role: "Founder, Innovate Tech Hub"
  }
];

const faqs = [
  {
    q: "How long does a typical interior design project take?",
    a: "A standard residential design project takes between 8 to 12 weeks from initial consultation to final handover. The timeline varies based on space square footage and customization requirements."
  },
  {
    q: "Do you assist with material procurement and selection?",
    a: "Yes, we handle end-to-end procurement. We accompany you to choose stone finishes, veneers, textiles, and lighting, and manage the purchase, quality verification, and delivery logistics."
  },
  {
    q: "Can you design within my predefined budget?",
    a: "Absolutely. During our consultation phase, we align on budget constraints and select materials, brands, and layouts that optimize beauty and utility without exceeding your budget limit."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HomePage = () => {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.55]"
          src={heroVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/30 z-10"></div>

        <motion.div
          className="relative z-20 text-white p-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block bg-indigo-600/90 text-white text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-indigo-400/30"
            variants={itemVariants}
          >
            Award-Winning Interior Interio
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Transforming Spaces.<br />Elevating Lifestyles.
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 font-light"
            variants={itemVariants}
          >
            Bespoke spatial design, photorealistic blueprints, and hand-crafted execution.
          </motion.p>
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <CallToAction text="Explore Our Gallery" link="/client-gallery" />
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/40 transition-all duration-300 backdrop-blur-sm shadow-md hover:scale-105"
            >
              Get Free Design Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-gray-300 text-xs tracking-wider uppercase font-semibold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base font-semibold text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Design Philosophy</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 mt-3 mb-6 leading-tight">
                Spaces that speak to who you are, built for daily living.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that premium interior design isn't just about beautiful pictures. True luxury is having a layout designed around your daily rituals, with custom storage integrated into the walls, lighting that shifts with the hours, and materials that look stunning while remaining durable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From initial 3D visualization to on-site coordination and finishing carpentry, we maintain full accountability over quality, schedules, and materials.
              </p>
              <CallToAction text="About Our Interio" link="/about-us" />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Our Workflow Process Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Professional Execution</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Our 4-Step Design Journey</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We guide you smoothly from your initial concepts and doubts to a fully finished, curated, and styled property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processes.map((proc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative group hover:border-indigo-300 transition-colors"
              >
                <div className="absolute top-6 right-8 text-4xl font-black text-gray-100 group-hover:text-indigo-50 transition-colors">
                  {proc.step}
                </div>
                <h3 className="text-xl font-bold text-gray-950 mt-6 mb-4">{proc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Recent Case Studies</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Featured Portfolios</h2>
            </div>
            <div className="mt-6 md:mt-0">
              <CallToAction text="View All Case Studies" link="/portfolio" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-150 overflow-hidden group cursor-pointer"
              onClick={() => router.push('/client-gallery/project-id-1')}
            >
              <div className="relative overflow-hidden h-72">
                <img src={project1Img} alt="Modern Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold bg-indigo-600 px-6 py-2 rounded-full shadow-lg">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Residential Design</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">Urban Oasis Apartment</h3>
                <p className="text-gray-600 text-sm">Minimalist spatial planning focused on natural light ventilation.</p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-150 overflow-hidden group cursor-pointer"
              onClick={() => router.push('/client-gallery/project-id-2')}
            >
              <div className="relative overflow-hidden h-72">
                <img src={project2Img} alt="Contemporary Office Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold bg-indigo-600 px-6 py-2 rounded-full shadow-lg">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Commercial Design</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">Innovate Co-Working Hub</h3>
                <p className="text-gray-600 text-sm">Flexible modular setups promoting comfort and high performance.</p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-150 overflow-hidden group cursor-pointer"
              onClick={() => router.push('/client-gallery/project-id-3')}
            >
              <div className="relative overflow-hidden h-72">
                <img src={project3Img} alt="Luxurious Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold bg-indigo-600 px-6 py-2 rounded-full shadow-lg">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Residential Design</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">Serene Master Suite</h3>
                <p className="text-gray-600 text-sm">Layered luxurious textiles with hidden custom storage arrays.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Client Endorsements</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gray-900/60 rounded-2xl p-8 border border-gray-800 shadow-xl flex flex-col justify-between"
              >
                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-indigo-400">{test.author}</h4>
                  <p className="text-sm text-gray-500 mt-1">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 bg-white text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-185' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 py-20 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Signature Space?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-indigo-100 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book a complimentary spatial assessment. Speak directly with one of our master designers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <CallToAction text="Schedule Consultation" link="/contact-us" primary={false} />
            <Link
              href="/send-message"
              className="inline-flex items-center justify-center px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full border border-indigo-500 transition-all duration-300 shadow-md hover:scale-105"
            >
              Send A Message
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
