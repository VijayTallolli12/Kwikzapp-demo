import React from 'react';

const ChargingUtilizationTable = () => {
  // Sample data - replace with your actual data
  const chargingData = [
    { id: 1, regNumber: 'DE-1234-EV', status: 'Charging', lastCharged: '09 Jun, 12:24', location: 'Berlin Depot 01', sessions: 15 },
    { id: 2, regNumber: 'DE-3244-EV', status: 'Charging', lastCharged: '10 Jun, 13:24', location: 'Munich East Hub', sessions: 45 },
    { id: 3, regNumber: 'DE-7894-EV', status: 'Charging', lastCharged: '12 Jun, 15:05', location: 'Munich East Hub', sessions: 5 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-[#5E17EB]">Charging Utilization</h2>
        <a href="#" className="text-sm text-[#5E17EB] font-semibold hover:underline">View Full Report +</a>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3  text-md text-left font-medium text-gray-500 tracking-wider">
                Registration Number
              </th>
              <th scope="col" className="px-6 py-3  text-md text-left font-medium text-gray-500 tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3  text-md text-center font-medium text-gray-500 tracking-wider">
                Last Charged
              </th>
              <th scope="col" className="px-6 py-3  text-md text-center font-medium text-gray-500 tracking-wider">
                Location Name
              </th>
              <th scope="col" className="px-6 py-3  text-md text-center font-medium text-gray-500 tracking-wider">
                Number of sessions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {chargingData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.regNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-sm leading-5 font-normal rounded-full bg-[#FF5722] text-white">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-700">
                  {item.lastCharged}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-700">
                  {item.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-700">
                  {item.sessions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden">
        {chargingData.map((item) => (
          <div key={item.id} className="border-b border-gray-200 p-4 hover:bg-gray-50">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm font-medium text-gray-500">Registration Number</div>
              <div className="text-sm text-gray-900">{item.regNumber}</div>
              
              <div className="text-sm font-medium text-gray-500">Status</div>
              <div className="text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#FF5722] text-white">
                  {item.status}
                </span>
              </div>
              
              <div className="text-sm font-medium text-gray-500">Last Charged</div>
              <div className="text-sm text-gray-900">{item.lastCharged}</div>
              
              <div className="text-sm font-medium text-gray-500">Location Name</div>
              <div className="text-sm text-gray-900">{item.location}</div>
              
              <div className="text-sm font-medium text-gray-500">Number of sessions</div>
              <div className="text-sm text-gray-900">{item.sessions}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChargingUtilizationTable;
