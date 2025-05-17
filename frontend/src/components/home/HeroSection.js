
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-paytm-blue to-blue-900 text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              India's Most-loved Payments App
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Recharge, pay bills, send money, shop online, book tickets & more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="font-semibold"
              >
                Download Paytm App
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-6 flex items-center">
              <p className="text-sm mr-4">Download App from:</p>
              <div className="flex space-x-4">
                <img 
                  src="https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png" 
                  alt="Play Store" 
                  className="h-8"
                />
                <img 
                  src="https://assetscdn1.paytm.com/images/catalog/view/307197/1626420569116.png" 
                  alt="App Store" 
                  className="h-8"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1626077030771.png" 
              alt="Paytm App" 
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
      