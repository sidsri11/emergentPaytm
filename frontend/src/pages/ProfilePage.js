
import React from 'react';
import { motion } from 'framer-motion';
import UserProfile from '../components/profile/UserProfile';
import AccountSettings from '../components/profile/AccountSettings';
import SecuritySettings from '../components/profile/SecuritySettings';
import LinkedAccounts from '../components/profile/LinkedAccounts';

const ProfilePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-paytm-blue mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <UserProfile />
          </div>
          <div className="md:col-span-2">
            <AccountSettings />
            <SecuritySettings />
            <LinkedAccounts />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
      