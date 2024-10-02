import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import your ScrollToTop component
import WhatsAppEnquiry from './components/WhatsAppEnquiry';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import DistributorInquiry from './pages/DistributorInquiry';
import SupplierForm from './pages/SupplierForm';
import ExportInquiry from './pages/ExportInquiry';
import ScrollUpButton from './components/ScrollUpButton';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = { duration: 0.5, ease: 'easeInOut' };

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {['/', '/about', '/contact', '/product', '/product/:id', '/distributor-inquiry', '/supplier-form', '/export-inquiry'].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                {path === '/' && <Home />}
                {path === '/about' && <About />}
                {path === '/contact' && <Contact />}
                {path === '/product' && <Product />}
                {path === '/product/:id' && <ProductDetails />}
                {path === '/distributor-inquiry' && <DistributorInquiry />}
                {path === '/export-inquiry' && <ExportInquiry />}
                {path === '/supplier-form' && <SupplierForm />}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isWhatsAppHidden, setIsWhatsAppHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsWhatsAppHidden(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is rendered here */}
      <Header />
      <div className="pt-20">
        <AnimatedRoutes />
      </div>
      <ScrollUpButton />
      
      <Footer />
    </Router>
  );
}

export default App;
