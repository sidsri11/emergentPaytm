
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { 
  FaLock, 
  FaFingerprint, 
  FaMobile, 
  FaShieldAlt, 
  FaBell, 
  FaToggleOn, 
  FaToggleOff 
} from 'react-icons/fa';

const SecuritySettings = () => {
  const [settings, setSettings] = useState({
    fingerprintEnabled: true,
    twoFactorAuth: true,
    loginNotifications: true,
    transactionAlerts: true,
  });
  
  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  return (
    <Card title="Security & Privacy" className="mb-6">
      <motion.div 
        className="space-y-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-paytm-blue flex items-center justify-center mr-3">
              <FaLock />
            </div>
            <div>
              <h4 className="font-medium">Change Password</h4>
              <p className="text-sm text-gray-500">Update your account password</p>
            </div>
          </div>
          <Button variant="outline" size="sm">Change</Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
              <FaFingerprint />
            </div>
            <div>
              <h4 className="font-medium">Biometric Login</h4>
              <p className="text-sm text-gray-500">Login with fingerprint or face ID</p>
            </div>
          </div>
          <button 
            className="text-2xl text-paytm-blue"
            onClick={() => toggleSetting('fingerprintEnabled')}
          >
            {settings.fingerprintEnabled ? <FaToggleOn /> : <FaToggleOff className="text-gray-400" />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
              <FaMobile />
            </div>
            <div>
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-500">Add extra security with SMS verification</p>
            </div>
          </div>
          <button 
            className="text-2xl text-paytm-blue"
            onClick={() => toggleSetting('twoFactorAuth')}
          >
            {settings.twoFactorAuth ? <FaToggleOn /> : <FaToggleOff className="text-gray-400" />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
              <FaBell />
            </div>
            <div>
              <h4 className="font-medium">Login Notifications</h4>
              <p className="text-sm text-gray-500">Get alerted for new logins to your account</p>
            </div>
          </div>
          <button 
            className="text-2xl text-paytm-blue"
            onClick={() => toggleSetting('loginNotifications')}
          >
            {settings.loginNotifications ? <FaToggleOn /> : <FaToggleOff className="text-gray-400" />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
              <FaShieldAlt />
            </div>
            <div>
              <h4 className="font-medium">Transaction Alerts</h4>
              <p className="text-sm text-gray-500">Receive notifications for all transactions</p>
            </div>
          </div>
          <button 
            className="text-2xl text-paytm-blue"
            onClick={() => toggleSetting('transactionAlerts')}
          >
            {settings.transactionAlerts ? <FaToggleOn /> : <FaToggleOff className="text-gray-400" />}
          </button>
        </div>
      </motion.div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <FaShieldAlt className="text-paytm-blue mt-1 mr-3 flex-shrink-0" />
          <div>
            <h5 className="font-medium text-paytm-blue mb-1">Security Tips</h5>
            <ul className="text-sm text-gray-600 space-y-1 list-disc ml-4">
              <li>Never share your OTP, PIN, or password with anyone</li>
              <li>Always check for secure website (https://) before making payments</li>
              <li>Keep your app updated for latest security features</li>
              <li>Enable biometric authentication for additional security</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SecuritySettings;
      