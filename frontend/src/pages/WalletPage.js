
import React from 'react';
import { motion } from 'framer-motion';
import WalletBalance from '../components/wallet/WalletBalance';
import PaymentOptions from '../components/wallet/PaymentOptions';
import TransactionHistory from '../components/wallet/TransactionHistory';
import QuickTransfer from '../components/wallet/QuickTransfer';

const WalletPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-paytm-blue mb-6">Paytm Wallet</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <WalletBalance />
            <PaymentOptions />
          </div>
          <div>
            <QuickTransfer />
            <TransactionHistory />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WalletPage;
      