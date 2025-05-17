
import React, { useState } from 'react';
import Button from '../common/Button';
import { FaLightbulb, FaFileInvoice, FaSpinner } from 'react-icons/fa';

const operators = [
  { id: 'torrent', name: 'Torrent Power', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733155/1626252298527.png' },
  { id: 'adani', name: 'Adani Electricity', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733146/1626252298250.png' },
  { id: 'tata', name: 'Tata Power', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733152/1626252298436.png' },
  { id: 'bses', name: 'BSES Rajdhani', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733148/1626252298297.png' },
  { id: 'msedcl', name: 'MSEDCL', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733151/1626252298399.png' },
  { id: 'bescom', name: 'BESCOM', image: 'https://assetscdn1.paytm.com/images/catalog/view_item/733147/1626252298275.png' },
];

const ElectricityBill = () => {
  const [consumerId, setConsumerId] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [isFetchingBill, setIsFetchingBill] = useState(false);
  const [billDetails, setBillDetails] = useState(null);
  
  const handleConsumerIdChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[a-zA-Z0-9]{0,15}$/.test(value)) {
      setConsumerId(value);
    }
  };
  
  const handleOperatorSelect = (operatorId) => {
    setSelectedOperator(operatorId);
    // Reset bill details when operator changes
    setBillDetails(null);
    setBillAmount('');
  };
  
  const handleFetchBill = () => {
    if (!consumerId) {
      alert('Please enter your Consumer Number / Service Number');
      return;
    }
    
    if (!selectedOperator) {
      alert('Please select your electricity provider');
      return;
    }
    
    // Mock fetching bill
    setIsFetchingBill(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Mock bill details
      const mockBill = {
        consumerName: 'Rahul Sharma',
        billNumber: 'EL' + Math.floor(1000000 + Math.random() * 9000000),
        billDate: '15 May 2023',
        dueDate: '29 May 2023',
        billAmount: Math.floor(1000 + Math.random() * 3000),
      };
      
      setBillDetails(mockBill);
      setBillAmount(mockBill.billAmount.toString());
      setIsFetchingBill(false);
    }, 1500);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!consumerId) {
      alert('Please enter your Consumer Number / Service Number');
      return;
    }
    
    if (!selectedOperator) {
      alert('Please select your electricity provider');
      return;
    }
    
    if (!billAmount) {
      alert('Please fetch bill details first');
      return;
    }
    
    // Mock payment process
    alert(`Electricity bill payment of ₹${billAmount} would be processed here`);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Electricity Provider
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
          <label htmlFor="consumerId" className="block text-sm font-medium text-gray-700 mb-1">
            Consumer Number / Service Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLightbulb className="text-gray-400" />
            </div>
            <input
              type="text"
              id="consumerId"
              value={consumerId}
              onChange={handleConsumerIdChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-paytm-blue focus:ring-paytm-blue"
              placeholder="Enter Consumer Number / Service Number"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Your Consumer Number / Service Number is available on your electricity bill
          </p>
        </div>
        
        <div className="mb-6">
          <Button 
            type="button" 
            variant="secondary" 
            fullWidth
            onClick={handleFetchBill}
            disabled={isFetchingBill || !consumerId || !selectedOperator}
          >
            {isFetchingBill ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Fetching Bill...
              </>
            ) : (
              <>
                <FaFileInvoice className="mr-2" />
                Fetch Bill
              </>
            )}
          </Button>
        </div>
        
        {billDetails && (
          <div className="mb-6 border rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium text-paytm-blue mb-3">Bill Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Consumer Name</span>
                <span className="font-medium">{billDetails.consumerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bill Number</span>
                <span className="font-medium">{billDetails.billNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bill Date</span>
                <span>{billDetails.billDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Due Date</span>
                <span className="text-red-600 font-medium">{billDetails.dueDate}</span>
              </div>
              <div className="border-t border-blue-200 my-2 pt-2 flex justify-between">
                <span className="text-gray-700 font-medium">Bill Amount</span>
                <span className="font-bold text-lg">₹{billDetails.billAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
        
        <Button 
          variant="primary" 
          type="submit" 
          fullWidth 
          disabled={!billDetails}
        >
          Proceed to Pay
        </Button>
      </form>
    </div>
  );
};

export default ElectricityBill;
      