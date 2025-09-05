import { useState } from 'react';
import { LightningBoltIcon, FilterIcon, SearchIcon } from '@heroicons/react/outline';
import ActiveChargingSessionsTable from '../components/ChargingSessions/ActiveChargingSessionsTable';
import AvailableChargersTable from '../components/ChargingSessions/AvailableChargersTable';
import RecentSessionLogTable from '../components/ChargingSessions/RecentSessionLogTable';

export default function ChargingSessions() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { name: 'All', value: 'all', count: 24 },
    { name: 'Active', value: 'active', count: 8 },
    { name: 'Completed', value: 'completed', count: 12 },
    { name: 'Failed', value: 'failed', count: 4 },
  ];

  return (
    <div className="py-6 px-0 sm:px-6 lg:px-0">      

      {/* Main Content */}
      <div className="space-y-6">
        <ActiveChargingSessionsTable />
        <AvailableChargersTable />
        <RecentSessionLogTable />
      </div>
      
      {/* Info Box */}
      <div className="mt-6 inline-flex items-center p-4 bg-primary text-white rounded-full">
        <svg className="h-5 w-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span className="text-sm text-white">
          All remote commands are logged and auditable
        </span>
      </div>
    </div>
  );
}
