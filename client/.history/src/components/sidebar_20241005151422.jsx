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
            <Link to="/dashboard" className="p-4 flex items-center text-gray-700">
              <RiHomeLine className="mr-3" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/discover" className="p-4 flex items-center text-gray-700 !cursor-pointer">
              <RiCompassDiscoverLine className="mr-3" /> Discover
            </Link>
          </li>
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;
