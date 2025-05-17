
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaSearch, FaUser, FaArrowRight } from 'react-icons/fa';

const contacts = [
  { id: 1, name: 'Rahul Sharma', phone: '9876543210', avatar: 'RS', frequency: 'high' },
  { id: 2, name: 'Priya Patel', phone: '8765432109', avatar: 'PP', frequency: 'high' },
  { id: 3, name: 'Amit Kumar', phone: '7654321098', avatar: 'AK', frequency: 'medium' },
  { id: 4, name: 'Kavita Singh', phone: '6543210987', avatar: 'KS', frequency: 'medium' },
  { id: 5, name: 'Vikram Malhotra', phone: '5432109876', avatar: 'VM', frequency: 'low' },
];

const getRandomColor = (name) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
    'bg-red-500', 'bg-purple-500', 'bg-pink-500', 
    'bg-indigo-500', 'bg-teal-500'
  ];
  
  // Use the first character of the name to determine a consistent color
  const charCode = name.charCodeAt(0);
  return colors[charCode % colors.length];
};

const QuickTransfer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );
  
  const handleTransfer = (contact) => {
    // Mock transfer functionality
    alert(`Transfer to ${contact.name} would be implemented here`);
  };
  
  return (
    <Card title="Quick Money Transfer" className="mb-6">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or phone number"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-3">RECENT & FREQUENT</h4>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {filteredContacts.filter(c => c.frequency === 'high').map((contact) => (
            <motion.button
              key={contact.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
              onClick={() => handleTransfer(contact)}
            >
              <div className={`w-12 h-12 rounded-full ${getRandomColor(contact.name)} text-white flex items-center justify-center text-lg font-medium mb-1`}>
                {contact.avatar}
              </div>
              <span className="text-xs text-center truncate w-full">{contact.name}</span>
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-lg font-medium mb-1">
              <FaUser />
            </div>
            <span className="text-xs text-center">New</span>
          </motion.button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-500 mb-3">ALL CONTACTS</h4>
        {filteredContacts.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500">No contacts found</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${getRandomColor(contact.name)} text-white flex items-center justify-center font-medium mr-3`}>
                  {contact.avatar}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{contact.name}</h4>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
              </div>
              <Button 
                variant="primary" 
                size="sm"
                className="flex items-center"
                onClick={() => handleTransfer(contact)}
              >
                Pay <FaArrowRight className="ml-1" />
              </Button>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default QuickTransfer;
      