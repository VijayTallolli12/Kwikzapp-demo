import { useState } from 'react';
import {
  CurrencyDollarIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  UserGroupIcon,
  LightningBoltIcon,
  GlobeAltIcon
} from '@heroicons/react/outline';
import MetricCard from '../components/Cards/MetricCard';
import SalesChart from '../components/Charts/SalesChart';
import OrdersChart from '../components/Charts/OrdersChart';
import ChargingUtilizationTable from '../components/Dashboard/ChargingUtilizationTable';
import VehicleChargingSessions from '../components/Dashboard/VehicleChargingSessions';
import AlertsNotifications from '../components/Dashboard/AlertsNotifications';

const tip = 'Schedule off-peak charging to reduce costs by up to 25%';
const Dashboard = () => {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-0">
      {/* <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening with your store today.</p>
      </div> */}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Energy Consumed"
          value={1245}
          icon={LightningBoltIcon}
          unit="kWh"
        />
        <MetricCard
          type="session"
          title="Avg. Session Time & Cost"
          value={32}
          unit="min/$8.20"
          description=""
          icon={LightningBoltIcon}
        />
        <MetricCard
          type="co2"
          title="CO2 Saved"
          value={412}
          unit="Kg"
          icon={LightningBoltIcon}
        />
        <MetricCard
          type="savings"
          title="Cost Savings vs Fuel"
          value={690.50}
          unit="$"
          icon={LightningBoltIcon}
        />
      </div>

      {/* Revenue Chart */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-12">
          <VehicleChargingSessions />
        </div>
      </div>
      <div className="mt-8 hidden">
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">This month</span>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-2xl font-semibold text-gray-900">$10,450</p>
              <div className="flex items-center mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <ArrowUpIcon className="-ml-0.5 mr-1 h-3 w-3 text-green-600" />
                  +12.5%
                </span>
                <span className="ml-2 text-sm text-gray-500">vs last month</span>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View report
            </button>
          </div>
          <div className="h-64">
            <SalesChart />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 hidden">
        {/* Energy Consumption */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-[#1D1E2C]">Energy Consumption</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280]">This month</span>
              <svg className="h-4 w-4 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#10B981] mr-2"></div>
                <span className="text-sm text-[#6B7280]">Charging</span>
              </div>
              <span className="text-sm font-medium text-[#1D1E2C]">1,245 kWh</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#10B981] rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#6B7280]">
              <span>0</span>
              <span>2000 kWh</span>
            </div>
          </div>
        </div>

        {/* Energy Cost */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-[#1D1E2C]">Energy Cost</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280]">This month</span>
              <svg className="h-4 w-4 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#3B82F6] mr-2"></div>
                <span className="text-sm text-[#6B7280]">Cost</span>
              </div>
              <span className="text-sm font-medium text-[#1D1E2C]">$8.20</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#6B7280]">
              <span>0</span>
              <span>500</span>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Usage by Time of Day */}
      <div className="mt-6 hidden">
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-[#1D1E2C]">Energy Usage by Time of Day</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#6B7280]">This month</span>
              <svg className="h-4 w-4 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {/* Time Slots */}
            <div className="grid grid-cols-8 gap-4 text-xs text-[#6B7280] mb-2">
              <div className="col-span-2">Time of Day</div>
              <div className="text-center">12AM</div>
              <div className="text-center">4AM</div>
              <div className="text-center">8AM</div>
              <div className="text-center">12PM</div>
              <div className="text-center">4PM</div>
              <div className="text-center">8PM</div>
            </div>

            {/* Usage Bars */}
            <div className="space-y-6">
              {/* Monday */}
              <div className="grid grid-cols-8 gap-4 items-center">
                <div className="text-sm text-[#6B7280]">Monday</div>
                <div className="col-span-6">
                  <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full"
                      style={{ width: '75%', left: '15%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-right text-[#1D1E2C]">75%</div>
              </div>

              {/* Tuesday */}
              <div className="grid grid-cols-8 gap-4 items-center">
                <div className="text-sm text-[#6B7280]">Tuesday</div>
                <div className="col-span-6">
                  <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full"
                      style={{ width: '60%', left: '20%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-right text-[#1D1E2C]">60%</div>
              </div>

              {/* Wednesday */}
              <div className="grid grid-cols-8 gap-4 items-center">
                <div className="text-sm text-[#6B7280]">Wednesday</div>
                <div className="col-span-6">
                  <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full"
                      style={{ width: '90%', left: '5%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-right text-[#1D1E2C]">90%</div>
              </div>

              {/* Thursday */}
              <div className="grid grid-cols-8 gap-4 items-center">
                <div className="text-sm text-[#6B7280]">Thursday</div>
                <div className="col-span-6">
                  <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full"
                      style={{ width: '45%', left: '30%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-right text-[#1D1E2C]">45%</div>
              </div>

              {/* Friday */}
              <div className="grid grid-cols-8 gap-4 items-center">
                <div className="text-sm text-[#6B7280]">Friday</div>
                <div className="col-span-6">
                  <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full"
                      style={{ width: '80%', left: '10%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-right text-[#1D1E2C]">80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charging Utilization Table */}
      <div className="mt-6">
        <ChargingUtilizationTable />
      </div>

      {/* Charts and Alerts Row */}

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-12">
          <AlertsNotifications />
        </div>
      </div>
      <div className="mt-6">
        {/* Tip */}
        <div className="bg-primary text-white rounded-full px-5 py-3 inline-flex items-start">
          <span className="mr-2">💡</span>
          <span className="text-sm">
            <span className="font-medium">Tip:</span> {tip}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
