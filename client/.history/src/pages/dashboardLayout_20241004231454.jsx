import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-[200px]">
        {/* Header */}
        <Header />
        
        <div className="p-6">
          {/* Outlet will render the child routes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
