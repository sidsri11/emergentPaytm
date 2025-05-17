
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { FaTag, FaArrowRight } from 'react-icons/fa';

const offers = [
  {
    id: 1,
    title: '100% Cashback on Movie Tickets',
    description: 'Use code MOVIE100 to get 100% cashback up to ₹200 on your first movie ticket booking',
    code: 'MOVIE100',
    expiryDate: '30 Jun 2023',
    image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png',
  },
  {
    id: 2,
    title: '25% Off on Mobile Recharge',
    description: 'Get 25% cashback up to ₹100 on prepaid mobile recharges',
    code: 'RECHARGE25',
    expiryDate: '15 Jun 2023',
    image: 'https://assetscdn1.paytm.com/images/catalog/view/307396/1615800373678.png',
  },
  {
    id: 3,
    title: 'Flat ₹50 Off on DTH Recharge',
    description: 'Apply code DTH50 and get flat ₹50 discount on DTH recharges of ₹500 or more',
    code: 'DTH50',
    expiryDate: '20 Jun 2023',
    image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626259968563.png',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const OfferSection = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-paytm-blue mb-6">
          <FaTag className="inline-block mr-2" />
          Exclusive Offers for You
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={item}>
              <Card className="h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex-1">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="font-bold text-lg text-paytm-blue mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  
                  <div className="bg-gray-100 p-3 rounded-lg mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">Use Code</p>
                        <p className="font-bold text-paytm-blue">{offer.code}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Valid Till</p>
                        <p className="font-medium">{offer.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="mt-auto w-full flex items-center justify-center bg-paytm-blue text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <span>Claim Now</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OfferSection;
      