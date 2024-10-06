import React from 'react';
import { Link } from 'react-router-dom';
import { RiHomeLine } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TfiWallet } from "react-icons/tfi";
import { IoBulbSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import BricksFi from "../assets/bricksfi.svg"

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-[15%] fixed left-0 top-0 shadow-md">
      <div className="p-6">
        <img
        src={BricksFi}
        alt='BricksFi'
        className='w-full'
        />
      </div>
      <nav className="mt-8">
        <ul className="space-y-4">
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/dashboard" className="flex items-center text-gray-700">
              <RiHomeLine className="mr-3" /> Dashboard
            </Link>
          </li>
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/dashboard/discover" className="flex items-center text-gray-700">
              <RiCompassDiscoverLine className="mr-3" /> Discover
            </Link>
          </li>
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/dashboard/saved-property" className="flex items-center text-gray-700">
              <GrFavorite className="mr-3" /> Saved Property
            </Link>
          </li>
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/dashboard/analytics" className="flex items-center text-gray-700">
              <FaArrowTrendUp className="mr-3" /> Analytics
            </Link>
          </li>
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/dashboard/wallet" className="flex items-center text-gray-700">
              <TfiWallet className="mr-3" /> Wallet
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto p-6">
        <ul className="space-y-4">
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/" className="flex items-center text-gray-700">
              <IoBulbSharp className="mr-3" /> Get Help
            </Link>
          </li>
          <li className="p-4 hover:bg-yellow-100">
            <Link to="/" className="flex items-center text-gray-700">
              <IoMdSettings className="mr-3" /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
