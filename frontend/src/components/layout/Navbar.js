
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png" 
              alt="Paytm Logo" 
              className="h-8 mr-2"
            />
          </Link>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-paytm-gray rounded-full px-4 py-2 flex-1 max-w-xl mx-4">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for a service, bill, person, etc."
              className="bg-transparent outline-none w-full"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-paytm-blue' : 'text-gray-600 hover:text-paytm-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/wallet" 
              className={`font-medium ${isActive('/wallet') ? 'text-paytm-blue' : 'text-gray-600 hover:text-paytm-blue'}`}
            >
              Wallet
            </Link>
            <Link 
              to="/recharge" 
              className={`font-medium ${isActive('/recharge') ? 'text-paytm-blue' : 'text-gray-600 hover:text-paytm-blue'}`}
            >
              Recharge & Bills
            </Link>
            <Link 
              to="/banking" 
              className={`font-medium ${isActive('/banking') ? 'text-paytm-blue' : 'text-gray-600 hover:text-paytm-blue'}`}
            >
              Banking
            </Link>
          </div>
          
          {/* User & Notifications */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-paytm-blue relative">
              <FaBell className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <Link to="/profile" className="text-gray-600 hover:text-paytm-blue">
              <FaUserCircle className="text-2xl" />
            </Link>
          </div>
        </div>
        
        {/* Mobile Search - Visible only on mobile */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-paytm-gray rounded-full px-4 py-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Fixed at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
        <div className="flex justify-around py-2">
          <Link to="/" className={`flex flex-col items-center p-2 ${isActive('/') ? 'text-paytm-blue' : 'text-gray-600'}`}>
            <span className="material-icons text-xl">home</span>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/wallet" className={`flex flex-col items-center p-2 ${isActive('/wallet') ? 'text-paytm-blue' : 'text-gray-600'}`}>
            <span className="material-icons text-xl">account_balance_wallet</span>
            <span className="text-xs mt-1">Wallet</span>
          </Link>
          <Link to="/recharge" className={`flex flex-col items-center p-2 ${isActive('/recharge') ? 'text-paytm-blue' : 'text-gray-600'}`}>
            <span className="material-icons text-xl">receipt</span>
            <span className="text-xs mt-1">Recharge</span>
          </Link>
          <Link to="/banking" className={`flex flex-col items-center p-2 ${isActive('/banking') ? 'text-paytm-blue' : 'text-gray-600'}`}>
            <span className="material-icons text-xl">account_balance</span>
            <span className="text-xs mt-1">Banking</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
      