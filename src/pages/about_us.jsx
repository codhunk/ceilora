// src/pages/AboutUsPage.js
import React from 'react';
import { motion } from 'framer-motion';

// Example images (replace with your actual images)
import teamPhoto from '../assets/team_photo.jpg'; // A photo of your team or lead designer
import philosophyIcon1 from '../assets/icon_creativity.png'; // Placeholder for an SVG/PNG icon
import philosophyIcon2 from '../assets/icon_functionality.png';
import philosophyIcon3 from '../assets/icon_client_centric.png';

// Import team member photos explicitly
import jalandharRaurPhoto from '../assets/jalandhar_raur.jpg';
import gyandharSahniPhoto from '../assets/gyandhar_photo.jpg';
import gulabChandraPhoto from '../assets/gyandhar_photo.jpg'; // Assuming you have a separate photo for Gulab Chandra

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 10,duration: 0.8, ease: "easeOut" } }
};

const AboutUsPage = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Studio
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the passion, people, and principles that drive our commitment to exceptional interior design.
        </motion.p>

        {/* Our Story Section */}
        <section className="mb-20">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
          >
            <motion.div className="md:w-1/2" variants={imageVariants}>
              <img src={teamPhoto} alt="Our Design Team" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </motion.div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in Greater Noida, Uttar Pradesh, with a vision to redefine living and working spaces, Ceilora emerged from a deep love for design and a commitment to transforming environments. We started with a simple belief: every space holds the potential to be a masterpiece, reflecting the unique story and aspirations of its inhabitants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the 14+ years, we've grown into a reputable studio, cherished for our innovative approach, meticulous attention to detail, and unwavering dedication to client satisfaction. Our journey has been one of continuous learning, creativity, and building lasting relationships, one beautifully designed space at a time.
              </p>
            </div>
          </motion.div>
        </section>

        ---

        {/* Our Philosophy Section - ANIMATION CHANGES HERE */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-gray-800 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            Our Philosophy & Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Philosophy Card 1: Unleashing Creativity */}
            <motion.div
              className="bg-white p-12 rounded-lg shadow-lg flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={iconVariants} // Use the predefined iconVariants
            >
              <img src={philosophyIcon1} alt="Creativity" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unleashing Creativity</h3>
              <p className="text-gray-600">We push the boundaries of design, crafting unique and imaginative solutions that inspire and delight.</p>
            </motion.div>

            {/* Philosophy Card 2: Embracing Functionality */}
            <motion.div
              className="bg-white p-12 rounded-lg shadow-lg flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                ...iconVariants, // Spread existing iconVariants
                visible: { // Override or extend the 'visible' state for this specific card
                  ...iconVariants.visible, // Spread existing visible properties
                  transition: {
                    ...iconVariants.visible.transition, // Spread existing transition properties
                    delay: 0.2 // Add a delay for staggering
                  }
                }
              }}
            >
              <img src={philosophyIcon2} alt="Functionality" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Embracing Functionality</h3>
              <p className="text-gray-600">Beauty meets purpose. Our designs are not just visually appealing but also highly practical and livable.</p>
            </motion.div>

            {/* Philosophy Card 3: Client-Centric Approach */}
            <motion.div
              className="bg-white p-12 rounded-lg shadow-lg flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                ...iconVariants, // Spread existing iconVariants
                visible: { // Override or extend the 'visible' state for this specific card
                  ...iconVariants.visible, // Spread existing visible properties
                  transition: {
                    ...iconVariants.visible.transition, // Spread existing transition properties
                    delay: 0.4 // Add a longer delay for more staggering
                  }
                }
              }}
            >
              <img src={philosophyIcon3} alt="Client-Centric" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client-Centric Approach</h3>
              <p className="text-gray-600">Your vision is our blueprint. We listen, collaborate, and co-create spaces that truly resonate with you.</p>
            </motion.div>
          </div>
        </section>

        ---

        {/* Meet the Team Section (Optional) */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-gray-800 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            Meet Our Passionate Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Team Member Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center py-10 px-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={iconVariants}
            >
              <img src={jalandharRaurPhoto} alt="Jalandhar Raur" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-200" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Jalandhar Raur</h3>
              <p className="text-indigo-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">Jalandhar's innovative approach and eye for luxurious details transform ordinary spaces into extraordinary experiences.</p>
            </motion.div>
            {/* Example Team Member Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center py-10 px-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={iconVariants}
              transition={{ delay: 0.2 }}
            >
              <img src={gyandharSahniPhoto} alt="Gyandhar Sahni" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-200" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Gyandhar Sahni</h3>
              <p className="text-indigo-600 font-medium mb-3">Lead Project Manager</p>
              <p className="text-gray-600 text-sm">Gyandhar ensures every project runs smoothly, on time, and within budget, bringing design visions to life with precision.</p>
            </motion.div>
            {/* Example Team Member Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center py-10 px-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                ...iconVariants,
                visible: {
                  ...iconVariants.visible,
                  transition: {
                    ...iconVariants.visible.transition,
                    delay: 0.4
                  }
                }
              }}
            >
              <img src={gulabChandraPhoto} alt="Gulab Chandra" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-200" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Gulab Chandra</h3>
              <p className="text-indigo-600 font-medium mb-3">Site Supervisor</p>
              <p className="text-gray-600 text-sm">Gulab brings a fresh perspective and a keen eye for sustainable and harmonious design solutions.</p>
            </motion.div>
            {/* Add more team members as needed */}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.p
            className="text-xl text-gray-700 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            Ready to embark on your design journey with a team that truly cares?
          </motion.p>
          <motion.a
            href="/contact-us"
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Schedule a Consultation
          </motion.a>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;