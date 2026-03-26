import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import BookDemo from './pages/BookDemo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'industries':
        return <Industries />;
      case 'pricing':
        return <Pricing />;
      case 'book-demo':
        return <BookDemo />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'terms-of-service':
        return <TermsOfService />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
