
import { motion } from 'framer-motion';
import CallToAction from '../components/calltoaction'; // Reusable CTA component

import heroVideo from '../assets/interior_design_hero.mp4';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75"
          src={heroVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> {/* Overlay */}

        <motion.div
          className="relative z-20 text-white p-4 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            variants={itemVariants}
          >
            Transforming Spaces, Elevating Lifestyles.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            variants={itemVariants}
          >
            Where dreams take shape and bespoke interior design meets unparalleled craftsmanship.
          </motion.p>
          <motion.div variants={itemVariants}>
            <CallToAction text="Explore Our Portfolio" link="/client-gallery" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-gray-50  my-1  rounded-lg mx-auto flex flex-col items-center">
        {/* <hr className="my-8 border-gray-300" /> */}
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Philosophy
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe that exceptional design is a harmonious blend of aesthetics and functionality, creating environments that truly reflect our clients' personalities and aspirations.
          </motion.p>
        </div>
         {/* <hr className="my-8 border-black h-2" /> */}
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              onClick={() => window.location.href = '/client-gallery/project-id-1'} // Example navigation
            >
              <div className="relative overflow-hidden">
                <img src={project1Img} alt="Modern Living Room" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Urban Oasis Apartment</h3>
                <p className="text-gray-600 text-sm">Residential Design - New York City</p>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              onClick={() => window.location.href = '/client-gallery/project-id-2'}
            >
              <div className="relative overflow-hidden">
                <img src={project2Img} alt="Contemporary Office Space" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovate Co-Working Hub</h3>
                <p className="text-gray-600 text-sm">Commercial Design - San Francisco</p>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              onClick={() => window.location.href = '/client-gallery/project-id-3'}
            >
              <div className="relative overflow-hidden">
                <img src={project3Img} alt="Luxurious Bedroom" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Serene Master Suite</h3>
                <p className="text-gray-600 text-sm">Residential Design - Los Angeles</p>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <CallToAction text="View All Projects" link="/client-gallery" />
          </div>
        </div>
      </section>

      {/* Call To Action Section (e.g., at the bottom of the home page) */}
      <section className="bg-indigo-700 py-16 text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Space?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's create something beautiful together. Reach out for a personalized consultation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CallToAction text="Get in Touch" link="/contact-us" primary={false} />
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;