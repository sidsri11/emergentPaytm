
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaUniversity, FaCreditCard, FaInfoCircle, FaPlus, FaUnlink } from 'react-icons/fa';

const banks = [
  {
    id: 1,
    name: 'HDFC Bank',
    accountNumber: '****5678',
    logo: 'https://assetscdn1.paytm.com/images/catalog/view_item/733110/1626251017535.png',
    isDefault: true,
  },
  {
    id: 2,
    name: 'ICICI Bank',
    accountNumber: '****1234',
    logo: 'https://assetscdn1.paytm.com/images/catalog/view_item/733103/1626251017493.png',
    isDefault: false,
  },
];

const cards = [
  {
    id: 1,
    name: 'HDFC Debit Card',
    cardNumber: '****6789',
    expiryDate: '09/25',
    type: 'VISA',
    logo: 'https://assetscdn1.paytm.com/images/catalog/view_item/486030/1677244548966.png',
  },
  {
    id: 2,
    name: 'ICICI Credit Card',
    cardNumber: '****4321',
    expiryDate: '12/24',
    type: 'MasterCard',
    logo: 'https://assetscdn1.paytm.com/images/catalog/view_item/486032/1677244549007.png',
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

const LinkedAccounts = () => {
  return (
    <Card title="Linked Accounts & Cards" className="mb-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-gray-700 flex items-center">
            <FaUniversity className="mr-2" /> Bank Accounts
          </h4>
          <Button variant="outline" size="sm" className="flex items-center">
            <FaPlus className="mr-1" /> Add Bank
          </Button>
        </div>
        
        <motion.div 
          className="space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {banks.map((bank) => (
            <motion.div
              key={bank.id}
              variants={item}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <img 
                  src={bank.logo}
                  alt={bank.name}
                  className="w-10 h-10 object-contain mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h5 className="font-medium">{bank.name}</h5>
                    {bank.isDefault && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">Account: {bank.accountNumber}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {!bank.isDefault && (
                  <Button variant="outline" size="sm">Set Default</Button>
                )}
                <button className="text-red-500 hover:text-red-700">
                  <FaUnlink />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-gray-700 flex items-center">
            <FaCreditCard className="mr-2" /> Cards
          </h4>
          <Button variant="outline" size="sm" className="flex items-center">
            <FaPlus className="mr-1" /> Add Card
          </Button>
        </div>
        
        <motion.div 
          className="space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <img 
                  src={card.logo}
                  alt={card.type}
                  className="w-10 h-10 object-contain mr-4"
                />
                <div>
                  <h5 className="font-medium">{card.name}</h5>
                  <p className="text-sm text-gray-500">
                    {card.cardNumber} • Expires: {card.expiryDate}
                  </p>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <FaUnlink />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 flex items-start">
        <FaInfoCircle className="text-paytm-blue mt-1 mr-3 flex-shrink-0" />
        <p className="text-sm text-gray-600">
          Adding banks and cards allows for faster money transfers and payments. All your information is securely encrypted and never shared with merchants.
        </p>
      </div>
    </Card>
  );
};

export default LinkedAccounts;
      