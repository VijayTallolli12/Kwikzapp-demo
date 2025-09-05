import { MenuAlt1Icon } from '@heroicons/react/outline';

const Topbar = ({ setSidebarOpen, pageTitle = 'Dashboard' }) => {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      
      <div className="flex-1 px-6 flex justify-between items-center">
        {/* Page Title */}
        <h1 className="text-xl font-semibold text-gray-900 text-primary">{pageTitle}</h1>
        
        {/* Partner and User Info */}
        <div className="flex items-center space-x-6">
          <div className="text-sm font-medium text-gray-500 hidden md:block">
            Partner: <span className="font-semibold text-black">TechSolutions Inc.</span>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center">
            <div className="text-right mr-3">
              <div className="text-sm font-medium text-black">John Doe</div>
              {/* <div className="text-xs text-gray-500">Admin</div> */}
            </div>
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
              JD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
