import React from 'react';
import DashboardStats from '../components/statCard';

import { FaEyeSlash } from 'react-icons/fa'; // Make sure to import the icon


const Dashboard = () => {

  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-6">
        <div>
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <p className="text-gray-600">Welcome to Bricks</p>
        </div>
        <div className="flex items-center space-x-2">
          <span>View Profile</span>
          <FaEyeSlash className="text-gray-700 text-xl" />
        </div>
      </div>
      <div className="p-6">
        {/* Dashboard Stats */}
        <DashboardStats />
        
        {/* Top Investors and Property Stats */}
        {/* <div className=" mt-6">
          <TopInvestors />
         
        </div> */}
        
        {/* Transactions Section */}
        {/* <div className="mt-6">
          <Transactions />
        </div> */}
        
        {/* Activity Timeline */}
        {/* <div className="mt-6">
          <ActivityTimeline />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
