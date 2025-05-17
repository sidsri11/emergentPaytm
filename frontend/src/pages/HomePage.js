
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServiceIconsGrid from '../components/home/ServiceIconsGrid';
import PromotionalBanners from '../components/home/PromotionalBanners';
import RecentTransactions from '../components/home/RecentTransactions';
import OfferSection from '../components/home/OfferSection';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <HeroSection />
      <ServiceIconsGrid />
      <PromotionalBanners />
      <RecentTransactions />
      <OfferSection />
    </motion.div>
  );
};

export default HomePage;
      