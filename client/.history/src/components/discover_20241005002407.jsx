import React, { useEffect, useState } from 'react';
import BricksProgram from 'bricks-lib';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';


/*
const properties = [
  {
    id: 1,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 2,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 3,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 4,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 5,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 6,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  // Add more property data as needed
];

*/


const Discover = () => {
  const { publicKey, signTransaction } = useWallet();
  const {connection} = useConnection();

  const [assets, setAssets] = useState([]);

  const fetchAssets = () => {
    const bricks = new BricksProgram(connection);
    bricks.fetchAllAssets().then((assets)=>{
      console.log(assets);
      setAssets(assets);
    });
  }

  useEffect(()=>{
    fetchAssets();
  }, [])
  //const bricks = new BricksProgram();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C9E1E7] to-[#FCDBBB] px-8 py-12 rounded-lg mx-6 my-8">
        <div className="flex">
          <div className='flex flex-col gap-2 w-6/12'>
            <h1 className="text-[24px] font-semibold font-[sans-serif]">
              Welcome to Bricks
            </h1>
            <p className="text-[32px] font-semibold font-jakarta">
              Real Estate Tokenisation Platform
            </p>
            <p className="text-[#1C1B1F] tracking-[2%] font-inter leading-[22px]">
              Discover the possibilities for home ownership and investment
              solutions by tokenisation of real estate assets to craft lasting
              legacies.
            </p>
          </div>
          {/* <div>
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image URL
              alt="Real Estate Building"
              className="w-full rounded-lg"
            />
          </div> */}
        </div>
      </section>

      {/* Newest Deal Section */}
      <section className="px-6">
        <h2 className="text-[22px] font-bold font-jakarta">Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div key={asset.id} className="bg-white p-4 rounded-t-[12px]">
              <div className="relative">
                <img
                  src={asset.images[0]}
                  alt={asset.name}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <button className="absolute top-4 right-4 bg-white p-[6px] rounded-full">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.23853 4.7385C2.92513 5.0519 2.67652 5.42396 2.50691 5.83343C2.3373 6.24291 2.25 6.68178 2.25 7.125C2.25 7.56821 2.3373 8.00709 2.50691 8.41656C2.67652 8.82604 2.92513 9.1981 3.23853 9.5115L9.00003 15.273L14.7615 9.5115C15.3945 8.87856 15.75 8.02011 15.75 7.125C15.75 6.22989 15.3945 5.37144 14.7615 4.7385C14.1286 4.10556 13.2701 3.74998 12.375 3.74998C11.4799 3.74998 10.6215 4.10556 9.98853 4.7385L9.00003 5.727L8.01153 4.7385C7.69813 4.4251 7.32607 4.17649 6.9166 4.00688C6.50712 3.83727 6.06824 3.74997 5.62503 3.74997C5.18181 3.74997 4.74294 3.83727 4.33346 4.00688C3.92399 4.17649 3.55193 4.4251 3.23853 4.7385V4.7385Z" stroke="#E4AA15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-[24px] font-bold text-[#E4AA15]">{asset.value} SOL</h3>
                <p className="tracking-[0.5px] text-[24px] font-bold">{asset.name}</p>
                <p className="text-sm text-[#0009297e]">{asset.location}</p>

                <div className='w-full h-[1.5px] bg-[#F0EFFB]' />

                <div className="flex items-center gap-3 mt-2 font-jakarta font-medium text-[14px]">
                  <div className="flex items-center gap-1 text-[#000929]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2507 9.88146V7.33313C19.2507 5.82063 18.0132 4.58313 16.5007 4.58313H12.834C12.1282 4.58313 11.4865 4.85813 11.0007 5.29813C10.5148 4.85813 9.87315 4.58313 9.16732 4.58313H5.50065C3.98815 4.58313 2.75065 5.82063 2.75065 7.33313V9.88146C2.19148 10.3856 1.83398 11.1098 1.83398 11.9165V17.4165H3.66732V15.5831H18.334V17.4165H20.1673V11.9165C20.1673 11.1098 19.8098 10.3856 19.2507 9.88146ZM12.834 6.41646H16.5007C17.0048 6.41646 17.4173 6.82896 17.4173 7.33313V9.16646H11.9173V7.33313C11.9173 6.82896 12.3298 6.41646 12.834 6.41646ZM4.58398 7.33313C4.58398 6.82896 4.99648 6.41646 5.50065 6.41646H9.16732C9.67148 6.41646 10.084 6.82896 10.084 7.33313V9.16646H4.58398V7.33313ZM3.66732 13.7498V11.9165C3.66732 11.4123 4.07982 10.9998 4.58398 10.9998H17.4173C17.9215 10.9998 18.334 11.4123 18.334 11.9165V13.7498H3.66732Z" fill="#E4AA15"/>
                  </svg>
                    {asset.bedrooms}
                  </div>
                  <div className="flex items-center gap-1 text-[#000929]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2507 9.16667H6.41732V6.41667C6.41732 5.40558 7.23957 4.58333 8.25065 4.58333C9.26173 4.58333 10.084 5.40558 10.084 6.41667H11.9173C11.9173 4.3945 10.2728 2.75 8.25065 2.75C6.22848 2.75 4.58398 4.3945 4.58398 6.41667V9.16667H2.75065C2.50754 9.16667 2.27438 9.26324 2.10247 9.43515C1.93056 9.60706 1.83398 9.84022 1.83398 10.0833V11.9167C1.83398 14.3055 3.36848 16.3378 5.50065 17.0958V20.1667H7.33398V17.4167H14.6673V20.1667H16.5007V17.0958C18.6328 16.3378 20.1673 14.3055 20.1673 11.9167V10.0833C20.1673 9.84022 20.0707 9.60706 19.8988 9.43515C19.7269 9.26324 19.4938 9.16667 19.2507 9.16667ZM18.334 11.9167C18.334 13.9388 16.6895 15.5833 14.6673 15.5833H7.33398C5.31182 15.5833 3.66732 13.9388 3.66732 11.9167V11H18.334V11.9167Z" fill="#E4AA15"/>
                  </svg>
                    {asset.bathrooms}
                  </div>
                  <div className="flex items-center gap-1 text-[#000929]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_546_6985)">
                    <path d="M9.71541 17.0981L3.80272 11.1854C3.13347 10.5161 3.13347 9.28389 3.80272 8.61464L9.71541 2.70195C10.3847 2.0327 11.6169 2.0327 12.2861 2.70195L18.1988 8.61464C18.8681 9.28389 18.8681 10.5161 18.1988 11.1854L12.2861 17.0981C11.6169 17.7673 10.3847 17.7673 9.71541 17.0981V17.0981Z" stroke="#E4AA15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.19922 14.4885L6.9993 19.2886" stroke="#E4AA15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 19.2886L19.8001 14.4885" stroke="#E4AA15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_546_6985">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    {asset.area}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
