import React from 'react';
import COCO from "../assets/clem.jpeg"
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  return (
    <div className="w-full flex gap-10 justify-between items-center py-6 bg-white sticky top-0 z-50 px-12" >
      {/* style={{boxShadow: "1px 1px 20px -8px #0000001A"}} */}
      <div className='px-16 w-7/12'>

      </div>
      <div className="flex items-center space-x-4 w-fit">
        <div className=''>
          <WalletMultiButton  />
        </div>
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
