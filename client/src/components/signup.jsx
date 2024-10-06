import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import icons

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = () => {
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

          <h2 className="text-3xl font-semibold mb-4">Sign up</h2>
          <p className="text-gray-500 mb-6">
            Let’s get you all set up so you can access your personal account.
          </p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+123456789"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="form-checkbox text-yellow-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to all the{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Terms and Privacy Policies
                </a>
              </span>
            </div>

            <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200">
              Create account
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a onClick={handleLogin}  href="#" className="text-red-500 hover:underline">
                Login
              </a>
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">Or Sign up with</p>
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
            alt="Secure Sign Up Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
