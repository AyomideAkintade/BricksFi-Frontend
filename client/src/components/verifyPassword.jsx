import React from "react";
import { FaEye } from "react-icons/fa"; // Import eye icon

const VerifyCodePage = () => {
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

          <a href="#" className="text-gray-500 text-sm mb-6 inline-block">
            &lt; Back to login
          </a>

          <h2 className="text-3xl font-semibold mb-4">Verify code</h2>
          <p className="text-gray-500 mb-6">
            An authentication code has been sent to your email.
          </p>

          <form>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-2">Enter Code</label>
              <input
                type="text"
                placeholder="7789BM6X"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                <FaEye />
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Didn't receive a code?{" "}
              <a href="#" className="text-red-500 font-semibold">
                Resend
              </a>
            </p>

            <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200">
              Verify
            </button>
          </form>
        </div>

        {/* Right side: Image section */}
        <div className="hidden md:block w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img
            src="path/to/illustration.png"
            alt="Code Verification Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyCodePage;
