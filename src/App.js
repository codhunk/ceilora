// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer.jsx';
import HomePage from './pages/home.jsx';
import AboutUsPage from './pages/about_us.jsx';
import ServicesPage from './pages/services.jsx';
import ClientGalleryPage from './pages/client_gallery.jsx';
import ContactUsPage from './pages/contact_us.jsx';
import ProjectDetailPage from './pages/project_details.jsx'; // For individual projects
import PortfolioPage from './pages/portfolio.jsx';
import {AnimatePresence } from 'framer-motion';
import SendMsg from './pages/message.jsx';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
           {/* <h1>
              Welcome to Ceilora - Your Design Partner
            </h1> */}
        <main className="flex-grow">
           <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/client-gallery" element={<ClientGalleryPage />} />
            <Route path="/client-gallery/:projectId" element={<ProjectDetailPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
             <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/send-message" element={<SendMsg />} />
          </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
     </Router>
  );
}

export default App;