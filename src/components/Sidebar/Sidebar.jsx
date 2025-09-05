import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  LightningBoltIcon,
  TruckIcon,
  CurrencyDollarIcon,
  CogIcon,
  KeyIcon,
  SearchIcon,
  XIcon
} from '@heroicons/react/outline';
import { useMediaQuery } from 'react-responsive';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, to: '/' },
  { name: 'Charging Sessions', icon: LightningBoltIcon, to: '/charging-sessions' },
  { name: 'Vehicle Management', icon: TruckIcon, to: '/vehicles' },
  { name: 'Billing', icon: CurrencyDollarIcon, to: '/billing' },
  { name: 'Settings', icon: CogIcon, to: '/settings' },
  { name: 'Help and Documentation', icon: KeyIcon, to: '/help' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ isOpen, onClose }) {
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // lg breakpoint

  // Close sidebar when clicking outside on mobile
  const handleClickOutside = (e) => {
    if (isMobile && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={handleClickOutside}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform ${isMobile
          ? `${isOpen ? 'translate-x-0' : '-translate-x-full'}`
          : 'translate-x-0'
          } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex flex-col h-full bg-primary pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-between px-4 pt-4">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Kwikzapp Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/vite.svg';
                }}
              />
            </div>
            {isMobile && (
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Search Bar */}
          <div className="px-4 mt-4 mb-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 text-white" />
              </div>
              <input
                type="text" 
                className="block w-full pl-6 pr-4 py-2.5 border-b-1 border-b-color-white/20 transition-colors duration-200 leading-5 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary  text-sm text-white"
                placeholder="Search for anything..."
              />
            </div>
          </div>
          <div className="mt-5 flex-1 flex flex-col
          ">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-white text-primary'
                        : 'text-white hover:bg-indigo-700 hover:bg-opacity-75',
                      'group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200'
                    )
                  }
                  onClick={onClose}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={classNames(
                          isActive ? 'text-primary' : 'text-white',
                          'mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-200'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-primary p-4 justify-between">
            <div className="flex items-center justify-between w-full">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <a href="#" className="text-xs font-medium text-white group-hover:text-white">
                  View profile
                </a>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full p-1 text-white hover:bg-primary hover:text-white focus:outline-none"
              >
                <CogIcon className="h-6 w-6" aria-hidden="true" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
