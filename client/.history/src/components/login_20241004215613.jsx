import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import BricksFi from '../assets/bricksfi.png'
import LoginImage from './../assets/login-image.webp';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };
  const handleLoginClick = () => {
    navigate("/dashboard"); 
  };
  const forgotPassword = () => {
    navigate("/forgot-password"); 
  };
  return (
    <div className="min-h-screen bg-white font-Poppins">
      <div className="bg-white rounded-lg w-full flex md:flex-row">
        {/* Left side: Form section */}
        <div className="w-full p-8">
          <div className="">
            <img
              src={ BricksFi}
              alt="BricksFi Logo"
              className="w-32 mr-2"
            />
            {/* <h1 className="text-2xl font-bold text-yellow-500">BricksFi</h1> */}
          </div>

          <div className="flex p-12 w-full items-center">

          <div className="w-1/2 px-12 py-8">
            <div className="text-3xl font-semibold mb-4">Login</div>
            <div className="text-gray-500 mb-6 text-base">Login to access your travelwise account</div>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-yellow-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a onClick={forgotPassword} href="#" className="text-sm text-red-500 hover:underline">
                  Forgot Password
                </a>
              </div>

              <button  onClick={handleLoginClick} className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200">
                Login
              </button>
            </form>


            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Don’t have an account?{" "}
                <a onClick={handleSignUpClick} href="#" className="text-red-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>


            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Or login with</p>
              <div className="flex justify-center space-x-4">
                <button className="p-2 border rounded-full text-yellow-500 hover:bg-gray-100 transition duration-200">
                  <FaFacebook size={20} />
                </button>
                <button className="p-2 border rounded-full text-yellow-500 hover:bg-gray-100 transition duration-200">
                  <FaGoogle size={20} />
                </button>
                <button className="p-2 border rounded-full text-yellow-500 hover:bg-gray-100 transition duration-200">
                  <FaApple size={20} />
                </button>
              </div>
            </div>
          </div>

                  {/* Right side: Image section */}
          <div className="w-1/2 p-6 flex justify-center">
            <img
              src={LoginImage}
              alt="Secure Login Illustration"
              className="w-3/4"
            />
          </div>

          </div>

          </div>


      </div>
    </div>
  );
};

export default LoginPage;
