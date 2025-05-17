
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { 
  FaCreditCard, 
  FaUniversity, 
  FaQrcode, 
  FaWallet, 
  FaShieldAlt, 
  FaClock 
} from 'react-icons/fa';

const paymentOptions = [
  { 
    id: 1, 
    icon: <FaCreditCard className="text-blue-500" />, 
    title: 'Credit/Debit Cards', 
    description: 'Link your cards for seamless payments',
    action: 'Add Card',
  },
  { 
    id: 2, 
    icon: <FaUniversity className="text-green-600" />, 
    title: 'Bank Account', 
    description: 'Pay directly from your bank account via UPI',
    action: 'Link Account',
  },
  { 
    id: 3, 
    icon: <FaQrcode className="text-purple-600" />, 
    title: 'Scan & Pay', 
    description: 'Pay using QR codes at any merchant',
    action: 'Scan Now',
  },
  { 
    id: 4, 
    icon: <FaWallet className="text-paytm-blue" />, 
    title: 'Paytm Postpaid', 
    description: 'Buy now, pay next month with 0% interest',
    action: 'Activate',
  }
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

const PaymentOptions = () => {
  return (
    <Card title="Payment Options" className="mb-6">
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {paymentOptions.map((option) => (
          <motion.div
            key={option.id}
            variants={item}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                {option.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{option.title}</h4>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            </div>
            <button className="text-paytm-blue hover:text-blue-700 text-sm font-medium">
              {option.action}
            </button>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <FaShieldAlt className="text-green-600 mr-2" />
            <span>Your payment information is securely stored</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaClock className="text-blue-600 mr-2" />
            <span>All transactions are processed instantly</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PaymentOptions;
      