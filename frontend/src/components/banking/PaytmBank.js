
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaEye, FaEyeSlash, FaCreditCard, FaRupeeSign, FaExchangeAlt, FaPiggyBank } from 'react-icons/fa';

const PaytmBank = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(45678.32);
  
  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  
  return (
    <Card className="mb-6 border-l-4 border-paytm-blue">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img 
            src="https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576410.png" 
            alt="Paytm Payments Bank" 
            className="h-8 mr-2" 
          />
          <h3 className="text-xl font-semibold">Paytm Payments Bank</h3>
        </div>
        <button 
          onClick={toggleBalance}
          className="text-paytm-blue hover:text-blue-700 p-2"
        >
          {showBalance ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gradient-to-r from-paytm-blue to-blue-900 text-white rounded-lg p-5 mb-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-200 text-sm mb-1">Account Balance</div>
              <div className="text-3xl font-bold">
                ₹{showBalance ? balance.toFixed(2) : '••••••.••'}
              </div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <FaCreditCard className="text-3xl" />
            </div>
          </div>
          
          <div className="text-sm text-white/80 mb-2">Account Number</div>
          <div className="font-medium">
            {showBalance ? '919876543210' : '91XXXXXXXX10'}
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Button 
              variant="secondary" 
              size="sm"
              className="flex-1 flex items-center justify-center" 
            >
              <FaRupeeSign className="mr-2" />
              Add Money
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 flex items-center justify-center bg-transparent border-white text-white hover:bg-white/10"
            >
              <FaExchangeAlt className="mr-2" />
              Transfer
            </Button>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          <FaPiggyBank className="text-blue-500 text-2xl mb-2" />
          <span className="text-sm font-medium">Fixed Deposit</span>
          <span className="text-xs text-gray-500">Upto 7.5% p.a.</span>
        </div>
        <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          <FaCreditCard className="text-green-500 text-2xl mb-2" />
          <span className="text-sm font-medium">Debit Card</span>
          <span className="text-xs text-gray-500">Easy Withdrawals</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200 text-center">
        <Button variant="outline" fullWidth>
          View Account Statement
        </Button>
      </div>
    </Card>
  );
};

export default PaytmBank;
      