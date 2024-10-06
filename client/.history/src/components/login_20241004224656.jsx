import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import BricksFi from '../assets/bricksfi.png'
import LoginImage from './../assets/login-image.webp';
import { Link } from "react-router-dom";
import useAPI from "../hooks/useApi";
import { isEmpty, isValidEmail } from "../utils/functions";
import { showErrorToast } from "../utils/toast";

const LoginPage = () => {
  
  const { post } = useAPI();
  const [disableButton, setDisableButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get("password");

    if(!isValidEmail(email) || isEmpty(password) || password.length < 8) {
      showErrorToast("Invalid username or password");
      return;
    }

    setDisableButton(true);
    try {
      const response = await post('auth/login', formData, false, true);
      if(response['success']){
        
      }
    }
    catch(error){
      console.error(error);
      showErrorToast("An error occured while trying to login");
    }
    finally {
      setDisableButton(false);
    }
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

          <div className="w-1/2 px-12 py-8 flex flex-col gap-6 text-[#313131]">
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-bold">Login</div>
              <div className="text-[#3131318c] text-base">Login to access your bricks account</div>
            </div>

            <form className="flex flex-col gap-6" onSubmit={(e)=>handleSubmit(e)}>
              <div className="">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
                />
              </div>
              <div className="">
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 border-[1px] rounded-md outline-none border-[#79747E]"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-yellow-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>


                <Link to={"/forgot-password"} className="text-sm text-red-500 hover:underline">
                  Forgot Password
                </Link>
              </div>

              <button type="submit" className="w-full bg-[#E4AA15] text-white py-3 rounded-md  transition duration-200 cursor-pointer disabled:bg-gray-700" disabled={disableButton}>
                Login
              </button>
            </form>

            <div className="flex flex-col items-center gap-8">
              <div className="">
                <div className="text-sm text-[#313131] space-x-[0.5]">
                  <span>Don’t have an account?</span> <Link to={"/signup"} className="text-red-500">Sign up</Link>
                </div>
              </div>
              <div className="relative w-full flex flex-col items-center">
                <div className="absolute w-full h-[1px] bg-[#31313149] top-[50%]"></div>
                <div className="text-sm text-[#3131317d] bg-white px-4 z-[1]">or login with</div>
              </div>
              <div className="flex justify-center gap-6 w-full">
                <button className="py-4 border-[1px] border-[#E4AA15] w-full rounded-md text-yellow-500 cursor-pointer flex items-center justify-center">
                  <FaFacebook size={20} />
                </button>
                <button className="py-4  border-[1px] border-[#E4AA15] rounded-md w-full text-yellow-500  cursor-pointer flex items-center justify-center">
                  <FaGoogle size={20} />
                </button>
                <button className="py-4  border-[1px] border-[#E4AA15] rounded-md w-full text-yellow-500  cursor-pointer flex items-center justify-center">
                  <FaApple size={20} />
                </button>
              </div>
            </div>
          </div>

                  {/* Right side: Image section */}
          <div className="w-1/2 p-2 flex justify-center">
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
