// src/components/ContactUs.js
import React from 'react';

// For demonstration, I'm using direct URLs. In a real project,
// you'd typically import images from your assets folder:
import heroVideo from '../assets/office1.mp4';
// import teamImage from '../assets/project2.jpg';
// import coFounderImage from '../assets/co-founder-portrait.jpg';

const ContactUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-hidden my-10" > {/* Added a subtle background color for the whole page */}

      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-900 shadow-lg my-10 rounded-2xl mx-auto max-w-7xl"> {/* Larger height, gradient, shadow, rounded corners, centered */}
        {/* Background Image - Tailwind can use arbitrary values for background-image */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-65 grayscale-[20%] scale-105 transition-transform duration-700 ease-in-out" // Added grayscale, brightness, and scale for a more dynamic background
          src={heroVideo} // <--- Using the imported video path
          aria-hidden="true"
          style={{ opacity: 0.6 }} 
        >
          {/* Optional: Add a fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>
         

        <div className="relative z-10 bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md border border-white/40 text-center max-w-lg mx-4 transition-all duration-500 ease-in-out transform hover:scale-[1.02]"> {/* More rounded, larger padding, stronger blur, hover effect */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-5 leading-tight">Connect With Us</h1> {/* Stronger heading */}
          <p className="text-lg md:text-xl text-gray-700 mb-8">We're eager to hear from you and collaborate on your next big idea!</p>
          <div className="space-y-4 mb-10 text-lg"> {/* Increased spacing and font size */}
            <p className="flex items-center justify-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg> <strong>Phone:</strong> +91 93581 74038</p>
            <p className="flex items-center justify-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> <strong>Email:</strong> info@ceilorainterior.com</p>
            <p className="flex items-center justify-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM (IST)</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"> {/* Pill shape, larger, more prominent hover */}
            Send a Message
          </button>
        </div>
      </section>

      {/* Mid Section - Overlapping Elements */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-blue-100 min-h-[700px] flex justify-center items-center overflow-hidden"> {/* Increased padding and min-height, new gradient */}
        <div className="relative w-11/12 max-w-7xl h-[600px] md:h-[650px] lg:h-[700px]"> {/* Increased overall wrapper height */}

          {/* Background Image for Overlap */}
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example Pexels image
            alt="Team Collaboration"
            className="absolute top-0 left-0 w-[80%] h-[80%] md:w-[75%] md:h-[80%] lg:w-[70%] lg:h-[75%] rounded-3xl shadow-2xl object-cover z-10 transform translate-x-[5%] translate-y-[5%] rotate-[-2deg]" // More rounded, stronger shadow, subtle rotate
          />

          {/* Office Address Card */}
          <div className="absolute top-[30%] left-1/2 md:top-[25%] md:left-[60%] lg:left-[55%] w-[50%] md:w-[45%] lg:w-[40%] bg-white/95 rounded-3xl p-7 md:p-10 shadow-3xl backdrop-blur-lg border border-white/60 z-40 transform -translate-x-1/2 hover:scale-[1.03] transition-transform duration-300 ease-in-out"> {/* Stronger blur, new shadow class, hover effect, adjusted positioning */}
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Our Hub of Innovation</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              A29 Block B,<br/>
              Sector Pi 1 2, UP 201310<br/>
              Noida, Uttar Pradesh, India
            </p>
            <p className="mt-4 text-blue-600 font-semibold">Visit us for a coffee and a chat about your vision!</p>
          </div>

          {/* Foreground Image */}
          <img
            src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740" // Your Freepik image
            alt="Co-founder Portrait"
            className="absolute top-[15%] left-[15%] md:top-[20%] md:left-[25%] w-[40%] h-[60%] md:w-[35%] md:h-[55%] lg:w-[30%] lg:h-[50%] rounded-3xl shadow-2xl object-cover z-20 transform -translate-x-[5%] -translate-y-[5%] rotate-[3deg]" // More rounded, subtle rotate
          />

          {/* Social Media Card */}
          <div className="absolute bottom-[5%] right-[5%] md:bottom-[10%] md:right-[10%] w-[45%] md:w-[35%] lg:w-[30%] bg-white/95 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md border border-white/50 z-40 transform hover:scale-[1.03] transition-transform duration-300 ease-in-out"> {/* Stronger shadow, hover effect */}
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Let's Connect!</h3>
            <div className="flex flex-wrap gap-5 text-lg">
              <a href="https://linkedin.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium transition duration-200 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn</a>
              <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium transition duration-200 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.393 0-6.138 2.746-6.138 6.143 0 .48.055.948.156 1.403-5.107-.258-9.635-2.704-12.668-6.417-.529.907-.836 1.962-.836 3.097 0 2.132 1.085 4.022 2.738 5.127-.803-.025-1.565-.246-2.228-.614v.08c0 2.981 2.13 5.464 4.976 6.03-.515.14-.1.22-.676.04-.165.02-.328.02-.492.02-.12 0-.23-.002-.34-.007.794 2.473 3.076 4.254 5.808 4.305-2.063 1.616-4.664 2.589-7.494 2.589-.489 0-.968-.029-1.44-.084 2.662 1.705 5.807 2.693 9.117 2.693 10.933 0 16.689-9.123 16.689-17.278l-.001-.632c1.144-.829 2.135-1.84 2.92-3.001z"/></svg> Twitter</a>
              {/* Add more social links with SVG icons */}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Interactive Map */}
      <section className="relative py-16 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto h-[400px] md:h-[550px] overflow-hidden rounded-3xl shadow-xl"> {/* Rounded corners for the map */}
          {/* Placeholder for Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d80.2000!3d26.5000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzAwLjAiTiA4MMKwMTYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // **Replace with your actual Google Maps embed URL**
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location Map"
            className="rounded-3xl" // Apply rounded corners to iframe as well
          ></iframe>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-20 md:left-auto md:right-10 bg-white/95 rounded-xl p-5 shadow-2xl backdrop-blur-md z-10 text-center transform hover:scale-[1.05] transition-transform duration-300 ease-in-out"> {/* Centered on mobile, right-aligned on desktop, larger padding, hover effect */}
          <h3 className="text-xl font-bold text-blue-800 mb-3">Locate Our Office</h3>
          <a href="https://www.google.com/maps/dir/?api=1&destination=26.5000,80.2000" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> Get Directions
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;