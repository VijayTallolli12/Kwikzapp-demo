import React from 'react';

const RecentSessionLogTable = () => {
  const sessions = [
    {
      id: 1,
      dateTime: '10 Jun., 10:12',
      vehicle: 'DE-1234-EV',
      driver: 'M. Dubois',
      location: 'Berlin Depot 01',
      energy: '12.3 kWh',
      cost: '$7.45'
    },
    {
      id: 2,
      dateTime: '09 Jun., 15:45',
      vehicle: 'DE-5678-EV',
      driver: 'A. Schmidt',
      location: 'Munich East Hub',
      energy: '8.7 kWh',
      cost: '$5.22'
    },
    {
      id: 3,
      dateTime: '08 Jun., 09:30',
      vehicle: 'DE-9012-EV',
      driver: 'J. Müller',
      location: 'Hamburg Central',
      energy: '15.1 kWh',
      cost: '$9.06'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold text-[#7C4DFF] mb-4">Recent Session Log</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Date/Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Driver</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Location Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Energy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Cost</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.dateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{session.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.driver}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.energy}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.cost}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-[#7C4DFF] hover:text-[#6B3FCC] border border-[#7C4DFF] px-2 py-1 rounded font-medium">
                    Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSessionLogTable;
