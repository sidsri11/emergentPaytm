
import React from 'react';
import { motion } from 'framer-motion';
import RechargeOptions from '../components/recharge/RechargeOptions';
import MobileRecharge from '../components/recharge/MobileRecharge';
import DTHRecharge from '../components/recharge/DTHRecharge';
import ElectricityBill from '../components/recharge/ElectricityBill';
import RecentRecharges from '../components/recharge/RecentRecharges';

const RechargePage = () => {
  const [activeTab, setActiveTab] = React.useState('mobile');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-paytm-blue mb-6">Recharge & Pay Bills</h1>
        
        <RechargeOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          {activeTab === 'mobile' && <MobileRecharge />}
          {activeTab === 'dth' && <DTHRecharge />}
          {activeTab === 'electricity' && <ElectricityBill />}
        </div>
        
        <RecentRecharges />
      </div>
    </motion.div>
  );
};

export default RechargePage;
      