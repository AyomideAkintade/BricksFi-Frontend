import React from 'react';
import COCO from "../assets/clem.jpeg"
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-6 bg-white sticky top-0 z-50" >
      {/* style={{boxShadow: "1px 1px 20px -8px #0000001A"}} */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 w-full border rounded-full bg-gray-200 text-black focus:outline-none"
        />
        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex items-center space-x-4">
        <IoNotificationsOutline className="text-gray-700 text-2xl" />
        <img
          src={COCO}
          alt="profile"
          className="rounded-full h-10 w-10"
        />
        <div className="">
          <span className="block text-sm font-medium">John Snow</span>
          <span className="block text-sm text-gray-500">Johnsnow@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
