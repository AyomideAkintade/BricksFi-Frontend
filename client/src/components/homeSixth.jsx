import React from 'react';
import tokenImage from '../assets/token.png'; // Replace with the actual path to your image
import puzzleHouseImage from '../assets/puzzle.png'; // Replace with the actual path to your image

const homeSixth = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white">
      {/* Learn About Tokenization Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Learn About Tokenization
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Understand the benefits of real estate tokenization and its impact on the market.
        </p>
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600">
          Read More
        </button>
      </div>

      {/* Tokenization Cards */}
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 mb-16">
        <div className="flex items-center bg-white shadow-lg rounded-lg p-4 md:p-6">
          <img src={tokenImage} alt="Token" className="w-16 h-16 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">What is Tokenization?</h3>
            <p className="text-sm text-gray-600">
              Tokenization is the process of converting rights to an asset into a digital token on a blockchain.
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white shadow-lg rounded-lg p-4 md:p-6">
          <img src={tokenImage} alt="Token" className="w-16 h-16 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Advantages of Tokenization</h3>
            <p className="text-sm text-gray-600">
              Fractional ownership, liquidity, transparency, and global access are key advantages of real estate token...
            </p>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="w-full flex justify-center bg-gray-100 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-yellow-500 p-12 rounded-lg shadow-lg max-w-7xl w-full">
          <div className="text-white mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Learn more about the future of real estate investment
            </h2>
            <button className="flex items-center px-6 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200">
              Join Waitlist <span className="ml-2">→</span>
            </button>
          </div>
          <img src={puzzleHouseImage} alt="Puzzle House" className="w-32 h-32 md:w-48 md:h-48 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default homeSixth