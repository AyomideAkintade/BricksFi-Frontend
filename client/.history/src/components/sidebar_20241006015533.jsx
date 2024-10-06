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
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-[15%] fixed p-3 min-w-[200px]">
      <div className="p-6">
        <img
        src={BricksFi}
        alt='BricksFi'
        className='w-full'
        />
      </div>
      <nav className="mt-8">
        <ul className="space-y-4">
        <li>
            <Link to="/dashboard" className="py-3 px-4 flex items-center text-gray-700 hover:bg-gray-200 rounded-lg">
              <RiHomeLine className="mr-3 font-inter font-medium text-[#00000099]" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/discover" className="py-3 px-4 flex items-center text-gray-700 hover:bg-gray-200 rounded-lg">
              <RiCompassDiscoverLine className="mr-3 font-inter font-medium text-[#00000099]" /> Discover
            </Link>
          </li>
          <li>
            <Link to="/owned" className="py-3 px-4 flex items-center text-gray-700 hover:bg-gray-200 rounded-lg">
              <GrFavorite className="mr-3 font-inter font-medium text-[]#00000099" /> Owned Properties
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="py-3 px-4 flex items-center text-gray-700 hover:bg-gray-200 rounded-lg">
              <FaArrowTrendUp className="mr-3 font-inter font-medium text-[#00000099]" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/wallet" className="py-3 px-4 flex items-center text-gray-700 hover:bg-gray-200 rounded-lg">
              <TfiWallet className="mr-3 font-inter font-medium text-[#00000099]" /> Wallet
            </Link>
          </li>
        </ul>
      </nav>
      <div to="/wallet" className="py-3 px-4 my-3 flex items-center text-gray-700 hover:bg-gray-200 rounded-lg">
              <FiLogOut className="mr-3 font-inter font-medium text-[#00000099]" /> Logout
      </div>
    </aside>
  );
};

export default Sidebar;
