import React from 'react';
import imageTwo from '../assets/image2.png'; // Replace with the actual path to your image

const HomeSecond = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-white">
      {/* Top Section */}
      <div className="text-center max-w-3xl px-4">
        <h3 className="text-lg md:text-xl font-bold text-black mb-2">DeFi Integrated</h3>
        <h4 className="text-lg md:text-xl font-semibold text-yellow-500 mb-4">
          Discover the power of integrating blockchain in real estate investment
        </h4>
        <p className="text-sm md:text-base font-normal text-gray-600">
          Leverage your assets like never before with the power of Decentralized finance on the blockchain. Lorem ipsum dolor sit amet consectetur. Mi neque ac sagittis suscipit ipsum sed dictum arcu nulla. Nulla arcu adipiscing lacus cursus quisque facilisi et aliquam. Nulla sit fringilla elementum potenti ultrices ullamcorper. Sed viverra sociis non vel nisl.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mt-8 md:mt-12 space-y-8 md:space-y-0 px-4">
      
        <div className="flex-1 md:mr-6 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mb-4">
            <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full mr-2">
              🌟
            </span>
            <p className="text-xs md:text-sm font-medium text-gray-500">The future of Investment</p>
          </div>
          <h2 className="font-inter text-2xl md:text-4xl font-bold text-black mb-4">
            Real Estate Meets Blockchain
          </h2>
          <p className="font-inter text-sm md:text-lg text-gray-600">
            Welcome to the future of real estate investment – meticulously crafted for the blockchain. Earn passive income from real-world assets and enhance your investment with a suite of DeFi features.
          </p>
        </div>

      
        <div className="flex-1 md:ml-6 p-4 bg-white shadow-lg rounded-lg">
          <img src={imageTwo} alt="Real estate on blockchain" className="w-full h-auto object-cover mb-4 rounded-md" />
          <p className="font-inter text-sm md:text-md text-gray-600">
            Leverage your assets like never before with the power of Decentralized finance on the blockchain. Our product relies on established decentralized networks like the Internet Computer Protocol (ICP). Bricks is a blockchain-based platform that tokenizes real estate assets, allowing fractional ownership and easy trading of property-backed tokens.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default HomeSecond;
