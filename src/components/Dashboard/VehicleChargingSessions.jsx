import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dataSets = {
    '7D': [
      { date: '04 Jun', value: 12 },
      { date: '05 Jun', value: 18 },
      { date: '06 Jun', value: 22 },
      { date: '07 Jun', value: 15 },
      { date: '08 Jun', value: 28 },
      { date: '09 Jun', value: 32 },
      { date: '10 Jun', value: 25 },
    ],
    '30D': Array.from({ length: 30 }, (_, i) => ({
      date: `${i + 1} Jun`,
      value: Math.floor(Math.random() * 50) + 10, // sample random values
    })),
    '90D': Array.from({ length: 90 }, (_, i) => ({
      date: `${i + 1} Jun`,
      value: Math.floor(Math.random() * 50) + 10,
    })),
  };

const data = [
  { date: '04 Jun', value: 12 },
  { date: '05 Jun', value: 18 },
  { date: '06 Jun', value: 22 },
  { date: '07 Jun', value: 15 },
  { date: '08 Jun', value: 28 },
  { date: '09 Jun', value: 32 },
  { date: '10 Jun', value: 25 },
];

const TimeRangeButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 text-sm rounded-md transition-colors ${
      active
        ? 'bg-primary text-white'
        : 'bg-white text-primary border border-primary hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
);

const VehicleChargingSessions = () => {
  const [timeRange, setTimeRange] = useState('7D');

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h3 className="text-lg font-bold text-primary mb-2 sm:mb-0">
          Vehicle Charging Sessions Trend
        </h3>
        <div className="flex space-x-2">
          {['7D', '30D', '90D'].map((range) => (
            <TimeRangeButton
              key={range}
              active={timeRange === range}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </TimeRangeButton>
          ))}
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataSets[timeRange]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#E5E7EB" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              domain={[0, 'dataMax + 5']}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#5E17EB"
              strokeWidth={2}
              dot={{
                fill: '#5E17EB',
                stroke: 'white',
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                fill: 'white',
                stroke: '#5E17EB',
                strokeWidth: 2,
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VehicleChargingSessions;
