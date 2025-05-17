
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-paytm-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Paytm App</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="block">
                <img 
                  src="https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png" 
                  alt="Play Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://assetscdn1.paytm.com/images/catalog/view/307197/1626420569116.png" 
                  alt="App Store" 
                  className="h-10"
                />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-paytm-lightBlue">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-paytm-lightBlue">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-paytm-lightBlue">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-paytm-lightBlue">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-paytm-lightBlue">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Paytm Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Paytm Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Paytm Payment Instruments</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Paytm Wallet</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">UPI Money Transfer</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Paytm Postpaid</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Paytm Credit Cards</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Paytm Payments Bank</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">About Us</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Careers</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Blog</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Press</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Contact Us</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">CSR</Link></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Paytm Help</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Security</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Grievance Policy</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Partners</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">Developers</Link></li>
              <li><Link to="#" className="text-white hover:text-paytm-lightBlue">API Docs</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-blue-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2023 Paytm. All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="#" className="text-white hover:text-paytm-lightBlue">Privacy Policy</Link>
              <Link to="#" className="text-white hover:text-paytm-lightBlue">Terms of Use</Link>
              <Link to="#" className="text-white hover:text-paytm-lightBlue">Refund Policy</Link>
              <Link to="#" className="text-white hover:text-paytm-lightBlue">Grievance Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
      