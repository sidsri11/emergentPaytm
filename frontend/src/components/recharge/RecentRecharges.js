
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { FaMobileAlt, FaTv, FaLightbulb, FaClock, FaRedo } from 'react-icons/fa';

const recharges = [
  { 
    id: 1, 
    type: 'mobile', 
    icon: <FaMobileAlt className="text-blue-500" />, 
    title: 'Mobile Recharge - Jio', 
    details: '9876543210',
    date: 'Today, 10:35 AM', 
    amount: '₹399.00',
    status: 'success'
  },
  { 
    id: 2, 
    type: 'dth', 
    icon: <FaTv className="text-purple-500" />, 
    title: 'DTH Recharge - Tata Play', 
    details: 'Account: 12345678',
    date: '22 May, 11:45 AM', 
    amount: '₹699.00',
    status: 'success'
  },
  { 
    id: 3, 
    type: 'electricity', 
    icon: <FaLightbulb className="text-yellow-500" />, 
    title: 'Electricity Bill - MSEDCL', 
    details: 'Consumer No: 102938465',
    date: '18 May, 02:15 PM', 
    amount: '₹1,450.00',
    status: 'success'
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

const RecentRecharges = () => {
  return (
    <div className="mt-8">
      <Card title="Recent Recharges & Bill Payments" className="mb-6">
        <motion.div 
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {recharges.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500">No recent recharges</p>
            </div>
          ) : (
            recharges.map((recharge) => (
              <motion.div
                key={recharge.id}
                variants={item}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    {recharge.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{recharge.title}</h4>
                    <p className="text-sm text-gray-500">{recharge.details}</p>
                    <p className="text-xs text-gray-400 flex items-center mt-1">
                      <FaClock className="mr-1" /> {recharge.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{recharge.amount}</p>
                  <span className={`text-xs rounded-full px-2 py-1 ${
                    recharge.status === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : recharge.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {recharge.status === 'success' ? 'Success' : recharge.status === 'pending' ? 'Pending' : 'Failed'}
                  </span>
                  <button className="flex items-center justify-end w-full text-paytm-blue text-sm mt-1">
                    <FaRedo className="mr-1" /> Repeat
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </Card>
    </div>
  );
};

export default RecentRecharges;
      