import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const backToLogin = () => {
    navigate("/login"); 
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left side: Form section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex items-center mb-8">
            <img
              src="path/to/logo.png"
              alt="BricksFi Logo"
              className="h-8 mr-2"
            />
            <h1 className="text-2xl font-bold text-yellow-500">BricksFi</h1>
          </div>

          <a  onClick={backToLogin} href="#" className="text-gray-500 text-sm mb-6 inline-block">
            &lt; Back to login
          </a>

          <h2 className="text-3xl font-semibold mb-4">Forgot your password?</h2>
          <p className="text-gray-500 mb-6">
            Don’t worry, happens to all of us. Enter your email below to recover your password.
          </p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="john.doe@gmail.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200 mb-4">
              Submit
            </button>
          </form>

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
        <div className="hidden md:block w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img
            src="path/to/illustration.png"
            alt="Password Recovery Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
