import React from 'react';
import HomeImg from "../assets/home.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleGetStarted = () => {
    navigate('/login');  // Navigate to the login route when the button is clicked
  };
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${HomeImg})` }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <p className="text-white text-lg mb-4">
          Get Started in a few simple steps <span className="text-[#E4AA15]">Quickstart Guide</span>
        </p>
        <h3 className="text-white font-inter text-4xl md:text-8xl font-bold leading-tight md:leading-[100px] mb-4">
          The new way to invest in Real Estate
        </h3>
        <p className="text-white text-xl md:text-2xl mb-8">
          Explore new possibilities in real estate investment with blockchain technology
        </p>
        <button      onClick={handleGetStarted} className="bg-[#E4AA15] font-inter text-white px-8 py-2 md:px-16 md:py-3 rounded hover:bg-yellow-600 transition duration-300">
          {/* <FaLongArrowAltRight size={20} /> */}
          <span className="hidden md:inline">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
