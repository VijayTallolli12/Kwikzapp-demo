import React from 'react';

const ChargingUtilizationTable = () => {
  // Sample data - replace with your actual data
  const chargingData = [
    { id: 1, regNumber: 'DE-1234-EV', status: 'Charging', lastCharged: '09 Jun, 12:24', location: 'Berlin Depot 01', sessions: 15 },
    { id: 2, regNumber: 'DE-3244-EV', status: 'Charging', lastCharged: '10 Jun, 13:24', location: 'Munich East Hub', sessions: 45 },
    { id: 3, regNumber: 'DE-7894-EV', status: 'Charging', lastCharged: '12 Jun, 15:05', location: 'Munich East Hub', sessions: 5 },
  ];

  const getStatusBadge = (status) => {
    const baseClasses = 'px-2 py-1 text-xs font-normal rounded-full';

    if (status === 'Charging') {
      return (
        <span className={`${baseClasses} bg-[#FF8C1A] text-white`}>
          {status}
        </span>
      );
    }

    return (
      <span className={`${baseClasses} bg-[#7C4DFF] text-white`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <h2 className="text-base md:text-lg font-bold text-[#5E17EB]">Charging Utilization</h2>
        <a href="#" className="text-xs md:text-sm text-[#5E17EB] font-semibold hover:underline">View Full Report +</a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 md:text-sm  tracking-wider">Registration Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 md:text-sm  tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-center text-gray-500 md:text-sm  tracking-wider">Last Charged</th>
              <th className="px-6 py-3 text-xs font-medium text-center text-gray-500 md:text-sm  tracking-wider">Location Name</th>
              <th className="px-6 py-3 text-xs font-medium text-right text-gray-500 md:text-sm  tracking-wider">Number of Sessions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {chargingData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.regNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {getStatusBadge(item.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-center text-sm text-gray-700">{item.lastCharged}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-center text-sm text-gray-700">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-right text-sm text-gray-700">{item.sessions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargingUtilizationTable;
