
import React from 'react';
import { motion } from 'framer-motion';
import BankingServices from '../components/banking/BankingServices';
import PaytmBank from '../components/banking/PaytmBank';
import InvestmentOptions from '../components/banking/InvestmentOptions';
import InsuranceOptions from '../components/banking/InsuranceOptions';

const BankingPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-paytm-blue mb-6">Banking & Financial Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <PaytmBank />
            <BankingServices />
          </div>
          <div>
            <InvestmentOptions />
            <InsuranceOptions />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BankingPage;
      