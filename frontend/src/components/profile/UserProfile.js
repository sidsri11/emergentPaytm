
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaUserEdit, FaCamera, FaCheckCircle } from 'react-icons/fa';

const UserProfile = () => {
  // Mock user data
  const user = {
    name: 'Rahul Sharma',
    phone: '9876543210',
    email: 'rahul.sharma@example.com',
    kycVerified: true,
    avatar: null, // If null, will show initials
  };
  
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <Card className="mb-6">
      <motion.div 
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-paytm-blue text-white flex items-center justify-center text-3xl font-semibold">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full rounded-full object-cover" 
              />
            ) : (
              getInitials(user.name)
            )}
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md text-paytm-blue">
            <FaCamera />
          </button>
        </div>
        
        <h3 className="text-xl font-bold mb-1">{user.name}</h3>
        
        <div className="flex items-center mb-3">
          <span className="text-gray-600">{user.phone}</span>
          {user.kycVerified && (
            <span className="ml-2 text-green-600 flex items-center text-sm">
              <FaCheckCircle className="mr-1" /> Verified
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{user.email}</p>
        
        <Button 
          variant="outline" 
          className="flex items-center"
        >
          <FaUserEdit className="mr-2" /> Edit Profile
        </Button>
      </motion.div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Total Transactions</div>
            <div className="text-xl font-semibold">283</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Member Since</div>
            <div className="text-xl font-semibold">Apr 2021</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
      