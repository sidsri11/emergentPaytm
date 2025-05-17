
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMobileAlt, 
  FaLightbulb, 
  FaWifi, 
  FaTv, 
  FaMoneyBillWave, 
  FaPlane, 
  FaBusAlt, 
  FaHotel, 
  FaTicketAlt, 
  FaCreditCard, 
  FaShoppingBag, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import ServiceCard from '../common/ServiceCard';

const services = [
  { id: 1, icon: <FaMobileAlt />, title: 'Mobile Recharge', to: '/recharge', color: 'bg-blue-600' },
  { id: 2, icon: <FaLightbulb />, title: 'Electricity', to: '/recharge', color: 'bg-yellow-500' },
  { id: 3, icon: <FaWifi />, title: 'DTH/Cable TV', to: '/recharge', color: 'bg-red-500' },
  { id: 4, icon: <FaTv />, title: 'Broadband', to: '/recharge', color: 'bg-purple-600' },
  { id: 5, icon: <FaMoneyBillWave />, title: 'Loan Repayment', to: '/banking', color: 'bg-green-600' },
  { id: 6, icon: <FaPlane />, title: 'Flight Tickets', to: '/ticket-booking', color: 'bg-blue-400' },
  { id: 7, icon: <FaBusAlt />, title: 'Bus Tickets', to: '/ticket-booking', color: 'bg-indigo-500' },
  { id: 8, icon: <FaHotel />, title: 'Hotels', to: '/ticket-booking', color: 'bg-pink-500' },
  { id: 9, icon: <FaTicketAlt />, title: 'Movie Tickets', to: '/ticket-booking', color: 'bg-orange-500' },
  { id: 10, icon: <FaCreditCard />, title: 'Credit Card', to: '/banking', color: 'bg-teal-500' },
  { id: 11, icon: <FaShoppingBag />, title: 'Shopping', to: '/shopping', color: 'bg-paytm-blue' },
  { id: 12, icon: <FaMapMarkerAlt />, title: 'Nearby Stores', to: '/nearby', color: 'bg-red-600' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const ServiceIconsGrid = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-paytm-blue mb-6">Recharge & Pay Bills</h2>
        
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                to={service.to} 
                bgColor={service.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceIconsGrid;
      