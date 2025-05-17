
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Banner = ({ 
  title, 
  description, 
  image, 
  buttonText, 
  buttonLink, 
  buttonVariant = 'primary',
  reverseOrder = false,
  bgColor = 'bg-paytm-gray',
  className = '',
}) => {
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden shadow-sm ${className}`}>
      <div className={`container mx-auto px-4 py-6 md:py-12 flex flex-col ${reverseOrder ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        <div className="flex-1 mb-6 md:mb-0 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-paytm-blue mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          {buttonText && (
            <Link to={buttonLink || '#'}>
              <Button variant={buttonVariant}>{buttonText}</Button>
            </Link>
          )}
        </div>
        <div className="flex-1 md:px-6">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
      