import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ value, className = "" }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const isNumber = typeof value === 'number';
  const targetValue = isNumber ? value : 0;
  const duration = 2; // seconds

  useEffect(() => {
    if (!isNumber) return;
    
    let start = 0;
    const end = targetValue;
    const increment = end / (duration * 60); // 60fps for smooth animation
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentValue(end);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [targetValue, isNumber]);

  const displayValue = isNumber 
    ? currentValue.toLocaleString() 
    : value;

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayValue}
    </motion.span>
  );
};

const MetricCard = ({
  title,
  value,
  icon: Icon,
  unit = '',
  description = '',
  type = 'default' // 'default', 'session', 'savings'
}) => {
  const formatValue = (val) => {
    if (typeof val === 'number') {
      return val.toLocaleString();
    }
    return val;
  };

  const renderContent = () => {
    switch(type) {
      case 'session':
        return (
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-indigo-50 flex-shrink-0">
                <Icon className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">{title}</span>
                <div className="text-2xl font-semibold">
                  <AnimatedNumber value={value} className="text-primary" /> 
                  {unit && <span className="text-primary"> {unit}</span>}
                </div>
                <div className="text-sm text-gray-500">{description}</div>
              </div>
            </div>
          </div>
        );
      
      case 'savings':
        return (
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-50 flex-shrink-0">
                <Icon className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">{title}</span>
                <div className="text-2xl font-semibold">
                  <span className="text-primary">
                    {unit} <AnimatedNumber value={value} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'co2':
        return (
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-50 flex-shrink-0">
                <Icon className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">{title}</span>
                <div className="text-2xl font-semibold">
                  <span className="text-primary">
                    <AnimatedNumber value={value} /> {unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-indigo-50 flex-shrink-0">
                <Icon className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">{title}</span>
                <div className="text-2xl font-semibold">
                  <span className="text-primary">
                    <AnimatedNumber value={value} /> {unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-2 py-4">
      {renderContent()}
    </div>
  );
};

export default MetricCard;


