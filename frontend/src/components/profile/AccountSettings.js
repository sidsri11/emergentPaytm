
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaUserAlt, FaMobileAlt, FaEnvelope, FaIdCard, FaMapMarkerAlt, FaSave } from 'react-icons/fa';

const AccountSettings = () => {
  // Mock user data with form state
  const [formData, setFormData] = useState({
    name: 'Rahul Sharma',
    phone: '9876543210',
    email: 'rahul.sharma@example.com',
    panCard: 'ABCDE1234F',
    address: '123 Main Street, Mumbai, Maharashtra, 400001',
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call to update profile
    setTimeout(() => {
      setIsEditing(false);
      alert('Profile updated successfully!');
    }, 1000);
  };
  
  return (
    <Card title="Account Settings" className="mb-6">
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
                placeholder="Full Name"
                disabled={!isEditing}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMobileAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
                placeholder="Mobile Number"
                disabled={true} // Mobile number typically can't be edited
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Primary mobile number cannot be changed
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
                placeholder="Email Address"
                disabled={!isEditing}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PAN Card
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaIdCard className="text-gray-400" />
              </div>
              <input
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
                placeholder="PAN Card Number"
                disabled={!isEditing}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
                placeholder="Full Address"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          {isEditing ? (
            <>
              <Button 
                type="button" 
                variant="outline" 
                className="mr-3"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="primary"
                className="flex items-center"
              >
                <FaSave className="mr-2" /> Save Changes
              </Button>
            </>
          ) : (
            <Button 
              type="button" 
              variant="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Information
            </Button>
          )}
        </div>
      </motion.form>
    </Card>
  );
};

export default AccountSettings;
      