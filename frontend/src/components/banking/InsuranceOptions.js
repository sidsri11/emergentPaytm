
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaHeartbeat, FaCar, FaMotorcycle, FaHome, FaShieldAlt } from 'react-icons/fa';

const insuranceOptions = [
  {
    id: 1,
    title: 'Health Insurance',
    description: 'Covers for medical emergencies with cashless facility',
    icon: <FaHeartbeat className="text-red-500" />,
    startingFrom: '₹399/month',
    coverAmount: 'Up to ₹50 Lakhs',
  },
  {
    id: 2,
    title: 'Car Insurance',
    description: 'Comprehensive coverage for your car',
    icon: <FaCar className="text-blue-500" />,
    startingFrom: '₹2,999/year',
    coverAmount: 'Up to ₹10 Lakhs',
  },
  {
    id: 3,
    title: 'Bike Insurance',
    description: 'Protection against damages to your bike',
    icon: <FaMotorcycle className="text-green-500" />,
    startingFrom: '₹999/year',
    coverAmount: 'Up to ₹5 Lakhs',
  },
  {
    id: 4,
    title: 'Home Insurance',
    description: 'Shield your home against natural calamities',
    icon: <FaHome className="text-purple-500" />,
    startingFrom: '₹1,499/year',
    coverAmount: 'Up to ₹1 Crore',
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
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const InsuranceOptions = () => {
  return (
    <Card title="Insurance Options" className="mb-6">
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {insuranceOptions.map((insurance) => (
          <motion.div
            key={insurance.id}
            variants={item}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex items-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                {insurance.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{insurance.title}</h4>
                <p className="text-sm text-gray-500">{insurance.description}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">Starting From</div>
                <div className="font-medium">{insurance.startingFrom}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Cover Amount</div>
                <div className="font-medium">{insurance.coverAmount}</div>
              </div>
              <Button variant="outline" size="sm">Get Quote</Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="bg-blue-50 p-4 rounded-lg flex items-start">
          <FaShieldAlt className="text-paytm-blue mt-1 mr-3 flex-shrink-0" />
          <div>
            <h5 className="font-medium text-paytm-blue mb-1">Insurance Benefit</h5>
            <p className="text-sm text-gray-600">
              Enjoy hassle-free claims with our 24x7 customer support. Get instant policy issuance and digital documents.
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <Button variant="primary">Compare All Plans</Button>
        </div>
      </div>
    </Card>
  );
};

export default InsuranceOptions;
      