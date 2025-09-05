import React from 'react';

const alerts = [
  { id: 1, message: '⚠ Battery low on DE-561-EV' },
  { id: 2, message: '⚠ Maintenance due for Berlin Depot 01' },
  { id: 3, message: '⚠ Charging station #4 requires attention' },
];



const AlertsNotifications = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold text-primary mb-4">Alert & Notifications</h3>
      
      {/* Alerts */}
      <div className="space-y-3 mb-6">
        {alerts.map((alert) => (
          <div 
            key={alert.id}
            className="inline-flex items-center bg-secondary text-white text-sm font-medium px-3 py-1.5 rounded-full mr-2 mb-2"
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsNotifications;
