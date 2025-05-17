
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaChartLine, FaMoneyBillWave, FaBuilding, FaRegChartBar } from 'react-icons/fa';

const investments = [
  {
    id: 1,
    title: 'Stock Market',
    description: 'Invest in stocks, IPOs, ETFs with zero brokerage on delivery',
    icon: <FaChartLine className="text-blue-500" />,
    returns: '15-18% p.a.',
    risk: 'High',
  },
  {
    id: 2,
    title: 'Mutual Funds',
    description: 'Invest in top performing funds with SIPs starting at ₹100',
    icon: <FaRegChartBar className="text-green-500" />,
    returns: '10-15% p.a.',
    risk: 'Medium',
  },
  {
    id: 3,
    title: 'Fixed Deposits',
    description: 'Safe investments with guaranteed returns up to 7.5% p.a.',
    icon: <FaBuilding className="text-paytm-blue" />,
    returns: '6-7.5% p.a.',
    risk: 'Low',
  },
  {
    id: 4,
    title: 'Digital Gold',
    description: 'Buy 24K gold online at live market prices from 1 rupee',
    icon: <FaMoneyBillWave className="text-yellow-500" />,
    returns: 'Market Linked',
    risk: 'Medium',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const InvestmentOptions = () => {
  return (
    <Card title="Investment Options" className="mb-6">
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {investments.map((investment) => (
          <motion.div
            key={investment.id}
            variants={item}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex items-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                {investment.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{investment.title}</h4>
                <p className="text-sm text-gray-500">{investment.description}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">Expected Returns</div>
                <div className="font-medium text-green-600">{investment.returns}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Risk Level</div>
                <div className={`font-medium ${
                  investment.risk === 'High' 
                    ? 'text-red-600' 
                    : investment.risk === 'Medium' 
                    ? 'text-yellow-600' 
                    : 'text-green-600'
                }`}>
                  {investment.risk}
                </div>
              </div>
              <Button variant="outline" size="sm">Invest</Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500 mb-3">
          Investments are subject to market risks. Please read all scheme related documents carefully before investing.
        </p>
        <Button variant="primary">Explore All Investment Options</Button>
      </div>
    </Card>
  );
};

export default InvestmentOptions;
      