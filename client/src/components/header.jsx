import React from 'react';
// import COCO from "../assets/clem.jpeg"
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { BiUserCircle } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';

const Header = () => {
  return (
    <div className="w-full flex gap-10 justify-between items-center py-6 bg-white sticky top-0 z-50 px-12" >
      {/* style={{boxShadow: "1px 1px 20px -8px #0000001A"}} */}
      <div className='px-16 w-7/12'>
      <div className="relative w-2/3">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 w-full border rounded-full bg-gray-200 text-black focus:outline-none"
        />
        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      </div>
      <div className="flex items-center space-x-4 w-fit">
        <div className='w'>
          <WalletMultiButton  />
        </div>
        <IoNotificationsOutline className="text-gray-700 text-2xl" />
        {/* <div className="p-2 border-[1px] border-black bg-gray-600 rounded-full text-white">
          <CiUser className='text-[24px]' />
        </div>
        <div className="">
          <span className="block text-sm font-medium">John Snow</span>
          <span className="block text-sm text-gray-500">Johnsnow@gmail.com</span>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
