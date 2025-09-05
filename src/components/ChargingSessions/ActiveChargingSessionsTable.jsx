import React from 'react';

const ActiveChargingSessionsTable = () => {
    const sessions = [
        {
            id: 1,
            registrationNumber: 'DE-1234-EV',
            driver: 'M. Dubois',
            status: 'Charging',
            location: 'Berlin Depot 01',
            energyUsed: '8.2 kWh',
            duration: '18 min'
        },
        {
            id: 2,
            registrationNumber: 'DE-3244-EV',
            driver: 'L. Weiber',
            status: 'Charging',
            location: 'Munich East Hub',
            energyUsed: '5 kWh',
            duration: '5 min'
        },
        {
            id: 3,
            registrationNumber: 'DE-5678-EV',
            driver: 'A. Schmidt',
            status: 'Idle',
            location: 'Munich East Hub',
            energyUsed: '5.7 kWh',
            duration: '32 min'
        }
    ];

    const getStatusBadge = (status) => {
        const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';

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
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-[#7C4DFF] mb-4">Active Charging Sessions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Registration Number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Driver</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Location Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Energy Used</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sessions.map((session) => (
                            <tr key={session.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{session.registrationNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.driver}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {getStatusBadge(session.status)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.energyUsed}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.duration}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    {session.status === 'Charging' && (
                                        <button className="text-red-600 hover:text-red-900 border border-red-600 px-2 py-1 rounded">
                                            Stop
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

export default ActiveChargingSessionsTable;
