
import React from 'react';

const Card = ({ 
  children, 
  title, 
  className = '', 
  titleClassName = '',
  bodyClassName = '',
  footerContent,
  footerClassName = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className={`px-5 py-4 border-b border-gray-200 ${titleClassName}`}>
          <h3 className="font-medium text-lg text-gray-800">{title}</h3>
        </div>
      )}
      <div className={`p-5 ${bodyClassName}`}>
        {children}
      </div>
      {footerContent && (
        <div className={`px-5 py-4 bg-gray-50 border-t border-gray-200 ${footerClassName}`}>
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default Card;
      