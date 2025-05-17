
import React from 'react';
import { FaMobileAlt, FaTv, FaLightbulb, FaWifi, FaWater, FaGasPump } from 'react-icons/fa';

const RechargeOptions = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'mobile', icon: <FaMobileAlt />, title: 'Mobile' },
    { id: 'dth', icon: <FaTv />, title: 'DTH' },
    { id: 'electricity', icon: <FaLightbulb />, title: 'Electricity' },
    { id: 'broadband', icon: <FaWifi />, title: 'Broadband' },
    { id: 'water', icon: <FaWater />, title: 'Water' },
    { id: 'gas', icon: <FaGasPump />, title: 'Piped Gas' },
  ];
  
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`
            flex items-center px-4 py-2 rounded-full text-sm
            transition-colors duration-200
            ${activeTab === tab.id 
              ? 'bg-paytm-blue text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
          `}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default RechargeOptions;
      