import React, { useState } from "react";
import { Link } from "react-router-dom";
import BricksFi from "../assets/bricksfi.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className={`p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
      
        <div className="text-xl font-bold">
          <Link to="/">
            <img src={BricksFi} alt="BricksFi" className="w-20" />
          </Link>
        </div>

        

        {/* Navigation Links for Desktop */}
        <div className={`md:flex space-x-6 items-center hidden`}>
          <Link to="/" className="hover:text-[#E4AA15]">Home</Link>
          <Link to="/about" className="hover:text-[#E4AA15]">About</Link>
          <Link to="/services" className="hover:text-[#E4AA15]">Services</Link>
          <Link to="/properties" className="hover:text-[#E4AA15]">Properties</Link>
        </div>

        {/* Light/Dark Mode Toggle and Launch App Button for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <FaSun size={20} className="text-yellow-500" />
            ) : (
              <FaMoon size={20} className="text-gray-800" />
            )}
          </button>
          <button className="px-4 py-2 bg-[#E4AA15] text-white rounded-md hover:bg-yellow-600">
            Launch
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4`}>
          <Link
            to="/"
            className="block py-2 px-4 hover:text-[#E4AA15]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 hover:text-[#E4AA15]"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 px-4 hover:text-[#E4AA15]"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/properties"
            className="block py-2 px-4 hover:text-[#E4AA15]"
            onClick={() => setIsMenuOpen(false)}
          >
            Properties
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
