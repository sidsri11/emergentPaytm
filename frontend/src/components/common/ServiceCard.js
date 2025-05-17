
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon, 
  title, 
  to, 
  bgColor = 'bg-paytm-blue', 
  textColor = 'text-white',
  className = '',
}) => {
  return (
    <Link 
      to={to} 
      className={`
        flex flex-col items-center justify-center p-4 rounded-lg
        transition-transform duration-300 transform hover:scale-105
        ${bgColor} ${textColor} ${className}
      `}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-sm font-medium text-center">{title}</span>
    </Link>
  );
};

export default ServiceCard;
      