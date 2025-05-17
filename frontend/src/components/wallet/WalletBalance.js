
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaEye, FaEyeSlash, FaPlus, FaArrowDown, FaArrowUp } from 'react-icons/fa';

const WalletBalance = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(2549.75);
  
  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  
  const handleAddMoney = () => {
    // Mock adding money functionality
    alert('Add Money feature would be implemented here');
  };
  
  return (
    <Card className="mb-6 border-t-4 border-paytm-blue">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Paytm Wallet Balance</h3>
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
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <span className="text-gray-200 text-sm">Available Balance</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                ₹{showBalance ? balance.toFixed(2) : '••••.••'}
              </span>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Button 
              variant="secondary" 
              className="flex-1 flex items-center justify-center" 
              onClick={handleAddMoney}
            >
              <FaPlus className="mr-2" />
              Add Money
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 flex items-center justify-center bg-transparent border-white text-white hover:bg-white/10"
            >
              <FaArrowDown className="mr-2" />
              Passbook
            </Button>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="flex items-center justify-center"
        >
          <FaArrowUp className="mr-2" />
          Send Money
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center justify-center"
        >
          <FaArrowDown className="mr-2" />
          Request Money
        </Button>
      </div>
    </Card>
  );
};

export default WalletBalance;
      