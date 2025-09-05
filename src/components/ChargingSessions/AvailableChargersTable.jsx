import React from 'react';

const AvailableChargersTable = () => {
  const chargers = [
    {
      id: 1,
      chargerId: 'CHG-98-8LN',
      location: 'Berlin Depot 01',
      status: 'Available'
    },
    {
      id: 2,
      chargerId: 'CHG-45-2PQ',
      location: 'Munich East Hub',
      status: 'Occupied'
    },
    {
      id: 3,
      chargerId: 'CHG-67-9XY',
      location: 'Hamburg Central',
      status: 'Available'
    }
  ];

  const getStatusBadge = (status) => {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
    
    if (status === 'Available') {
      return (
        <span className={`${baseClasses} bg-secondary text-white`}>
          {status}
        </span>
      );
    }
    
    return (
      <span className={`${baseClasses} bg-gray-500 text-white`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold text-[#7C4DFF] mb-4">Available Chargers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500   tracking-wider">Charger ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500   tracking-wider">Location Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500   tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500   tracking-wider">Reserve</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {chargers.map((charger) => (
              <tr key={charger.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{charger.chargerId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{charger.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {getStatusBadge(charger.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {charger.status === 'Available' && (
                    <button className="text-primary hover:text-white hover:bg-primary transition-colors duration-200 font-medium border border-[#7C4DFF] px-2 py-1 rounded">
                      Reserve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableChargersTable;
