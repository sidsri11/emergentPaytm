
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Banner from '../common/Banner';

const banners = [
  {
    id: 1,
    title: 'Get Paytm Postpaid',
    description: 'Buy now, pay next month with zero interest. Get up to ₹60,000 credit limit instantly.',
    image: 'https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242865113.png',
    buttonText: 'Apply Now',
    buttonLink: '/postpaid',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Paytm HDFC Bank Credit Card',
    description: 'India's Most Sincere Credit Card with 5% Unlimited Cashback on all spends.',
    image: 'https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png',
    buttonText: 'Apply Now',
    buttonLink: '/credit-card',
    bgColor: 'bg-purple-50',
    reverseOrder: true,
  },
  {
    id: 3,
    title: 'Book Movie Tickets',
    description: 'Watch the latest movies in your favorite theaters. Book tickets in a few simple clicks.',
    image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png',
    buttonText: 'Book Now',
    buttonLink: '/movies',
    bgColor: 'bg-red-50',
  },
];

const PromotionalBanners = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-paytm-blue mb-6">Paytm Offers & Promotions</h2>
        
        <div className="relative overflow-hidden">
          {banners.map((banner, index) => (
            <motion.div
              key={banner.id}
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentBanner === index ? 1 : 0,
                x: currentBanner === index ? 0 : 100,
                display: currentBanner === index ? 'block' : 'none',
              }}
              transition={{ duration: 0.5 }}
            >
              <Banner
                title={banner.title}
                description={banner.description}
                image={banner.image}
                buttonText={banner.buttonText}
                buttonLink={banner.buttonLink}
                bgColor={banner.bgColor}
                reverseOrder={banner.reverseOrder}
              />
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-4 space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentBanner === index ? 'bg-paytm-blue' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanners;
      