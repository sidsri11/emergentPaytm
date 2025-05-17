
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { FaArrowUp, FaArrowDown, FaMobile, FaLightbulb, FaShoppingCart } from 'react-icons/fa';

const transactions = [
  { 
    id: 1, 
    type: 'money-sent', 
    icon: <FaArrowUp className="text-red-500" />, 
    title: 'Money Sent to Rahul Sharma', 
    date: 'Today, 10:35 AM', 
    amount: '₹500.00',
    status: 'completed'
  },
  { 
    id: 2, 
    type: 'money-received', 
    icon: <FaArrowDown className="text-green-500" />, 
    title: 'Money Received from Priya Patel', 
    date: 'Today, 09:12 AM', 
    amount: '₹1,200.00',
    status: 'completed'
  },
  { 
    id: 3, 
    type: 'recharge', 
    icon: <FaMobile className="text-blue-500" />, 
    title: 'Mobile Recharge - Jio', 
    date: 'Yesterday, 04:30 PM', 
    amount: '₹399.00',
    status: 'completed'
  },
  { 
    id: 4, 
    type: 'bill-payment', 
    icon: <FaLightbulb className="text-yellow-500" />, 
    title: 'Electricity Bill Payment', 
    date: 'Yesterday, 02:15 PM', 
    amount: '₹1,450.00',
    status: 'completed'
  },
  { 
    id: 5, 
    type: 'shopping', 
    icon: <FaShoppingCart className="text-purple-500" />, 
    title: 'Payment to Flipkart', 
    date: '22 May, 11:45 AM', 
    amount: '₹2,499.00',
    status: 'completed'
  },
];

const RecentTransactions = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card title="Recent Transactions" titleClassName="flex justify-between items-center">
          <div className="space-y-4">
            {transactions.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-500">No recent transactions</p>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      flex items-center justify-between p-3 rounded-lg
                      ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      hover:bg-gray-100 transition-colors
                    `}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        {transaction.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{transaction.title}</h4>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'money-received' 
                          ? 'text-green-600' 
                          : 'text-gray-800'
                      }`}>
                        {transaction.type === 'money-received' ? '+' : ''}{transaction.amount}
                      </p>
                      <span className={`text-xs rounded-full px-2 py-1 ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
          <div className="text-center mt-4">
            <button className="text-paytm-blue hover:text-blue-700 font-medium">
              View All Transactions
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecentTransactions;
      