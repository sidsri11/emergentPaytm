
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { FaArrowUp, FaArrowDown, FaMobile, FaLightbulb, FaShoppingCart, FaFilter } from 'react-icons/fa';

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
  { 
    id: 6, 
    type: 'money-sent', 
    icon: <FaArrowUp className="text-red-500" />, 
    title: 'Money Sent to Mom', 
    date: '21 May, 08:20 AM', 
    amount: '₹3,000.00',
    status: 'completed'
  },
  { 
    id: 7, 
    type: 'money-received', 
    icon: <FaArrowDown className="text-green-500" />, 
    title: 'Refund from Amazon', 
    date: '20 May, 01:15 PM', 
    amount: '₹899.00',
    status: 'completed'
  },
];

const TransactionHistory = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    if (filter === 'money-sent' && transaction.type === 'money-sent') return true;
    if (filter === 'money-received' && transaction.type === 'money-received') return true;
    if (filter === 'bills' && ['recharge', 'bill-payment'].includes(transaction.type)) return true;
    if (filter === 'shopping' && transaction.type === 'shopping') return true;
    return false;
  });
  
  return (
    <Card 
      title="Transaction History" 
      titleClassName="flex justify-between items-center"
      className="mb-6"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'all' 
              ? 'bg-paytm-blue text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'money-sent' 
              ? 'bg-paytm-blue text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('money-sent')}
        >
          Sent
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'money-received' 
              ? 'bg-paytm-blue text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('money-received')}
        >
          Received
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'bills' 
              ? 'bg-paytm-blue text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('bills')}
        >
          Bills
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'shopping' 
              ? 'bg-paytm-blue text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('shopping')}
        >
          Shopping
        </button>
        <button className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center">
          <FaFilter className="mr-1" /> More Filters
        </button>
      </div>
      
      <div className="space-y-4">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-500">No transactions found for this filter</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  flex items-center justify-between p-3 rounded-lg
                  ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  hover:bg-gray-100 transition-colors cursor-pointer
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
      
      <div className="text-center mt-6">
        <button className="text-paytm-blue hover:text-blue-700 font-medium">
          View Full History
        </button>
      </div>
    </Card>
  );
};

export default TransactionHistory;
      