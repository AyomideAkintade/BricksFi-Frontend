import React from 'react'
import { FaInstagram, FaGamepad, FaTwitter, FaEnvelope } from 'react-icons/fa';

const homeSeventh = () => {
    return (
        <footer className="bg-white py-8 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
            {/* Left section with logo and icons */}
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-yellow-500 text-3xl" />
                <h2 className="text-3xl font-bold ml-2">Bricks</h2>
              </div>
              <div className="flex space-x-4">
                <FaInstagram className="text-yellow-500 text-2xl hover:text-yellow-600 cursor-pointer" />
                <FaGamepad className="text-yellow-500 text-2xl hover:text-yellow-600 cursor-pointer" />
                <FaTwitter className="text-yellow-500 text-2xl hover:text-yellow-600 cursor-pointer" />
              </div>
            </div>
    
            {/* Center sections with links */}
            <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 mb-8 md:mb-0">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-lg mb-2">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>In sight</li>
                </ul>
              </div>
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-lg mb-2">Legal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Cookie policy</li>
                  <li>Complaint policy</li>
                  <li>Terms & Condition</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Socials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Whatsapp</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Discord</li>
                  <li>Email</li>
                </ul>
              </div>
            </div>
            <div></div>
            {/* Right section with newsletter */}
            {/* <div className="flex flex-col w-full md:w-auto">
              <h3 className="font-semibold text-lg mb-2">Our Newsletter</h3>
              <p className="text-gray-600 mb-4">Get the latest Update and enjoy the best.</p>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full py-2 px-4 pr-10 rounded-full shadow-md border border-gray-300 focus:outline-none"
                />
                <button className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 focus:outline-none">
                  →
                </button>
              </div>
            </div> */}
          </div>
        </footer>
      );
}

export default homeSeventh