
import React, { useState } from 'react';
import Button from '../common/Button';
import { FaMobileAlt, FaUser, FaRupeeSign, FaStar } from 'react-icons/fa';

const operators = [
  { id: 'jio', name: 'Jio', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733062/1626251650728.png' },
  { id: 'airtel', name: 'Airtel', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733063/1626251657769.png' },
  { id: 'vi', name: 'Vi', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733064/1626251657960.png' },
  { id: 'bsnl', name: 'BSNL', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733065/1626251658276.png' },
];

const popularPlans = [
  { id: 1, operator: 'jio', amount: 239, validity: '28 days', data: '1.5 GB/day', description: 'Unlimited calls, 100 SMS/day' },
  { id: 2, operator: 'jio', amount: 296, validity: '28 days', data: '2 GB/day', description: 'Unlimited calls, 100 SMS/day' },
  { id: 3, operator: 'jio', amount: 749, validity: '90 days', data: '2 GB/day', description: 'Unlimited calls, 100 SMS/day' },
  { id: 4, operator: 'airtel', amount: 249, validity: '28 days', data: '1.5 GB/day', description: 'Unlimited calls, 100 SMS/day' },
  { id: 5, operator: 'airtel', amount: 299, validity: '28 days', data: '2 GB/day', description: 'Unlimited calls, 100 SMS/day' },
  { id: 6, operator: 'vi', amount: 299, validity: '28 days', data: '1.5 GB/day', description: 'Unlimited calls, 100 SMS/day' },
  { id: 7, operator: 'bsnl', amount: 247, validity: '30 days', data: '1 GB/day', description: 'Unlimited calls, 100 SMS/day' },
];

const MobileRecharge = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [showPlans, setShowPlans] = useState(false);
  
  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };
  
  const handleRechargeAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d{0,6}$/.test(value)) {
      setRechargeAmount(value);
    }
  };
  
  const handleOperatorSelect = (operatorId) => {
    setSelectedOperator(operatorId);
  };
  
  const handleSelectPlan = (plan) => {
    setRechargeAmount(plan.amount.toString());
    setShowPlans(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    if (!selectedOperator) {
      alert('Please select your operator');
      return;
    }
    
    if (!rechargeAmount) {
      alert('Please enter recharge amount');
      return;
    }
    
    // Mock recharge process
    alert(`Recharge of ₹${rechargeAmount} for ${mobileNumber} would be processed here`);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMobileAlt className="text-gray-400" />
            </div>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
              placeholder="Enter 10-digit mobile number"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Operator
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {operators.map((operator) => (
              <button
                key={operator.id}
                type="button"
                className={`
                  flex flex-col items-center justify-center p-3 rounded-lg border
                  ${selectedOperator === operator.id 
                    ? 'border-paytm-blue bg-blue-50' 
                    : 'border-gray-200 hover:bg-gray-50'}
                `}
                onClick={() => handleOperatorSelect(operator.id)}
              >
                <img 
                  src={operator.image} 
                  alt={operator.name} 
                  className="h-8 mb-2"
                />
                <span className="text-sm">{operator.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaRupeeSign className="text-gray-400" />
            </div>
            <input
              type="text"
              id="amount"
              value={rechargeAmount}
              onChange={handleRechargeAmountChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
              placeholder="Enter amount"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center text-paytm-blue"
              onClick={() => setShowPlans(!showPlans)}
            >
              Browse Plans
            </button>
          </div>
        </div>
        
        {showPlans && selectedOperator && (
          <div className="mb-6 border rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-3 flex items-center">
              <FaStar className="text-yellow-500 mr-2" /> Popular Plans
            </h4>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {popularPlans
                .filter(plan => plan.operator === selectedOperator)
                .map(plan => (
                  <div 
                    key={plan.id}
                    className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 cursor-pointer"
                    onClick={() => handleSelectPlan(plan)}
                  >
                    <div>
                      <span className="font-medium">₹{plan.amount}</span>
                      <p className="text-sm text-gray-600">{plan.validity} | {plan.data}</p>
                      <p className="text-xs text-gray-500">{plan.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      type="button"
                      onClick={() => handleSelectPlan(plan)}
                    >
                      Select
                    </Button>
                  </div>
                ))}
              {popularPlans.filter(plan => plan.operator === selectedOperator).length === 0 && (
                <p className="text-center text-gray-500 py-2">No plans available for this operator</p>
              )}
            </div>
          </div>
        )}
        
        <Button variant="primary" type="submit" fullWidth className="mt-2">
          Proceed to Recharge
        </Button>
      </form>
    </div>
  );
};

export default MobileRecharge;
      