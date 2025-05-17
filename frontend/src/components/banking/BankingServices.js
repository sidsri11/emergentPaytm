
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { 
  FaMoneyBillWave, 
  FaCreditCard, 
  FaPercent, 
  FaUniversity, 
  FaRupeeSign, 
  FaPiggyBank, 
  FaRegCreditCard 
} from 'react-icons/fa';

const services = [
  { 
    id: 1, 
    icon: <FaMoneyBillWave className="text-blue-500" />, 
    title: 'Personal Loan', 
    description: 'Get instant loans up to ₹5 lakhs',
    badge: 'Popular',
    action: 'Apply Now',
  },
  { 
    id: 2, 
    icon: <FaCreditCard className="text-purple-600" />, 
    title: 'Credit Card', 
    description: 'Unlimited 5% cashback on all spends',
    badge: 'New',
    action: 'Apply Now',
  },
  { 
    id: 3, 
    icon: <FaPercent className="text-green-600" />, 
    title: 'Fixed Deposit', 
    description: 'Earn up to 7.5% interest p.a.',
    badge: '',
    action: 'Invest Now',
  },
  { 
    id: 4, 
    icon: <FaUniversity className="text-paytm-blue" />, 
    title: 'Savings Account', 
    description: 'Zero balance digital savings account',
    badge: '',
    action: 'Open Account',
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

const BankingServices = () => {
  return (
    <Card title="Banking Services" className="mb-6">
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                {service.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <h4 className="font-medium text-gray-800">{service.title}</h4>
                  {service.badge && (
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      service.badge === 'New' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </div>
            <button className="text-paytm-blue hover:text-blue-700 text-sm font-medium">
              {service.action}
            </button>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-6 pt-3 border-t border-gray-200">
        <h4 className="font-medium text-gray-800 mb-3">Quick Actions</h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <FaRupeeSign className="text-blue-500 text-xl mb-2" />
            <span className="text-xs text-center">UPI Payments</span>
          </div>
          <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <FaPiggyBank className="text-green-500 text-xl mb-2" />
            <span className="text-xs text-center">Invest</span>
          </div>
          <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <FaRegCreditCard className="text-purple-500 text-xl mb-2" />
            <span className="text-xs text-center">Apply Card</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BankingServices;
      