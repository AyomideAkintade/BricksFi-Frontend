import React from 'react';
import tokenImage from '../assets/token.png'; // Replace with actual path to your image
import estateImage from '../assets/estate.png'; // Replace with actual path to your image

const TokenDistribution = () => {
    return (
      <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-white">
        {/* Token Distribution Breakdown Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mt-8 md:mt-12 space-y-8 md:space-y-0 px-4">
          {/* Left Section */}
          <div className="flex-1 p-4 bg-white shadow-lg rounded-lg mb-4 md:mb-0 md:mr-4">
            <div className="flex items-center mb-4">
              <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full mr-2">
                🌞
              </span>
              <p className="text-xs md:text-sm font-medium text-gray-500">Tokenization</p>
            </div>
            <h2 className="font-inter text-xl md:text-3xl font-bold text-black mb-4">
              Token Distribution Breakdown
            </h2>
            <p className="font-inter text-sm md:text-base text-gray-600">
              Our product relies on established decentralized networks like the Internet Computer Protocol (ICP). Bricks is a blockchain-based platform that tokenizes real estate assets, allowing fractional ownership and easy trading of property-backed tokens.
            </p>
          </div>
  
          {/* Right Section */}
          <div className="flex-1 p-4 bg-white shadow-lg rounded-lg mb-4 md:mb-0 md:ml-4">
            <img src={tokenImage} alt="Token distribution" className="w-full h-auto object-cover mb-4 rounded-md" />
            {/* <p className="font-inter text-sm md:text-md text-gray-600">
              Smart Contract: Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Blanet non eu molestie sit urna cursus.
            </p> */}
          </div>
        </div>
  
        {/* Investment By Fractions Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mt-8 md:mt-12 space-y-8 md:space-y-0 px-4">
          {/* Left Section */}
          <div className="flex-1 p-4 bg-white shadow-lg rounded-lg mb-4 md:mb-0 md:mr-4">
            <img src={estateImage} alt="Investment by fractions" className="w-full h-auto object-cover mb-4 rounded-md" />
          </div>
  
          {/* Right Section */}
          <div className="flex-1 p-4 bg-white shadow-lg rounded-lg mb-4 md:mb-0 md:ml-4">
            <h3 className="font-inter text-xl md:text-3xl font-bold text-black mb-4">
              Investment By Fractions
            </h3>
            <p className="font-inter text-sm md:text-md text-gray-600">
              <strong>Smart Contract:</strong> Gwarinpa Estate, Abuja<br />
              <strong>Max Token:</strong> 8<br />
              <strong>Type:</strong> 4 Bedroom Apartment<br />
              <strong>Security:</strong> Nigerian Army/DSS<br />
              <strong>House worth:</strong> $32,000 ($4,000 per token)
            </p>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    );
  };

export default TokenDistribution;
