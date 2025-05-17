
import React, { useState } from 'react';
import Button from '../common/Button';
import { FaTv, FaRupeeSign, FaStar } from 'react-icons/fa';

const operators = [
  { id: 'tatasky', name: 'Tata Play', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733069/1626251675002.png' },
  { id: 'dishtv', name: 'Dish TV', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733068/1626251674992.png' },
  { id: 'airtel', name: 'Airtel Digital TV', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733067/1626251674983.png' },
  { id: 'sun', name: 'Sun Direct', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733070/1626251675024.png' },
];

const popularPacks = [
  { id: 1, operator: 'tatasky', name: 'Hindi Basic HD', amount: 699, validity: '1 month', description: '250+ channels including popular Hindi entertainment' },
  { id: 2, operator: 'tatasky', name: 'Family Sports HD', amount: 899, validity: '1 month', description: '300+ channels including Sports channels' },
  { id: 3, operator: 'dishtv', name: 'South Silver', amount: 549, validity: '1 month', description: '200+ channels with South Indian content' },
  { id: 4, operator: 'airtel', name: 'Value Lite HD', amount: 599, validity: '1 month', description: '160+ channels with HD content' },
  { id: 5, operator: 'sun', name: 'Tamil Value Pack', amount: 499, validity: '1 month', description: '180+ channels with Tamil content' },
];

const DTHRecharge = () => {
  const [subscriberId, setSubscriberId] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [showPacks, setShowPacks] = useState(false);
  
  const handleSubscriberIdChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d{0,12}$/.test(value)) {
      setSubscriberId(value);
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
  
  const handleSelectPack = (pack) => {
    setRechargeAmount(pack.amount.toString());
    setShowPacks(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (subscriberId.length < 8) {
      alert('Please enter a valid Subscriber ID / Customer ID');
      return;
    }
    
    if (!selectedOperator) {
      alert('Please select your DTH operator');
      return;
    }
    
    if (!rechargeAmount) {
      alert('Please enter recharge amount');
      return;
    }
    
    // Mock recharge process
    alert(`DTH Recharge of ₹${rechargeAmount} for ${subscriberId} would be processed here`);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="subscriberId" className="block text-sm font-medium text-gray-700 mb-1">
            Subscriber ID / Customer ID
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaTv className="text-gray-400" />
            </div>
            <input
              type="text"
              id="subscriberId"
              value={subscriberId}
              onChange={handleSubscriberIdChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
              placeholder="Enter Subscriber ID / Customer ID"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Your Subscriber ID / Customer ID is printed on your monthly bill or available on your Set-Top Box menu
          </p>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select DTH Operator
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
              onClick={() => setShowPacks(!showPacks)}
            >
              Browse Packs
            </button>
          </div>
        </div>
        
        {showPacks && selectedOperator && (
          <div className="mb-6 border rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-3 flex items-center">
              <FaStar className="text-yellow-500 mr-2" /> Popular Packs
            </h4>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {popularPacks
                .filter(pack => pack.operator === selectedOperator)
                .map(pack => (
                  <div 
                    key={pack.id}
                    className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 cursor-pointer"
                    onClick={() => handleSelectPack(pack)}
                  >
                    <div>
                      <span className="font-medium">{pack.name}</span>
                      <p className="text-sm text-gray-600">₹{pack.amount} | {pack.validity}</p>
                      <p className="text-xs text-gray-500">{pack.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      type="button"
                      onClick={() => handleSelectPack(pack)}
                    >
                      Select
                    </Button>
                  </div>
                ))}
              {popularPacks.filter(pack => pack.operator === selectedOperator).length === 0 && (
                <p className="text-center text-gray-500 py-2">No packs available for this operator</p>
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

export default DTHRecharge;
      