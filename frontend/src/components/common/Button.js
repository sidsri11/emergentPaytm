
import React from 'react';

const variants = {
  primary: 'bg-paytm-blue text-white hover:bg-blue-800 focus:ring-blue-500',
  secondary: 'bg-paytm-lightBlue text-white hover:bg-blue-400 focus:ring-blue-300',
  outline: 'border border-paytm-blue text-paytm-blue hover:bg-blue-50 focus:ring-blue-500',
  ghost: 'text-paytm-blue hover:bg-blue-50 focus:ring-blue-500',
};

const sizes = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-2.5 px-5 text-lg',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  return (
    <button 
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        rounded-md font-medium transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
      