import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import icons
import BricksFi from '../assets/bricksfi.png'
import SignupImage from '../assets/signup-image.webp'
import useAPI from "../hooks/useApi";
import { showErrorToast } from "../utils/toast";
import { isEmptyString, isValidEmail } from "../utils/functions";
import { toast } from "react-toastify";

const SignUpPage = () => {

  const [ disableButton, setDisableButton ] = useState(false);
  const navigate = useNavigate();
  const { post } = useAPI();

  const handleSignup = async (e)=>{
    e.preventDefault();

    navigate("/verify", { state: { email: "ayomikunakintade@gmail.com" } });

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const phoneNumber = formData.get("phone_number");
    const password = formData.get("password");
    const confirmPassword = formData.get("cpassword");

    if (!(
      isValidEmail(email)
      && password.length >= 8 
      && !isEmptyString(firstName) 
      && !isEmptyString(lastName) 
      && !isEmptyString(phoneNumber)
      && ( password === confirmPassword && !isEmptyString(password) ))) {
        showErrorToast("Please fill all fields correctly")
        return 
      }

    formData.delete('cpassword');
    setDisableButton(true);
    const signupPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await post('auth/register', formData, false, true);
        if(response['success']){
          resolve();
          navigate("/verify", { state: { email: email } });
        }
        else {
          showErrorToast(response['message']);
          reject(response['message']);
        }
      }
      catch(error){
        showErrorToast("An error occured while trying to register");
      }
      finally {
        setDisableButton(false);
      }
    })

    toast.promise(signupPromise, {
      pending: "Creating account, hold on",
      success: "Successfully created account",
  })

  }

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
          <div className="w-1/2 px-12 py-7 flex flex-col gap-6 text-[#313131]">
          <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Sign up</h2>
          <p className="text-gray-500">
            Let’s get you all set up so you can access your personal account.
          </p>
          </div>

          <form onSubmit={(e)=>handleSignup(e)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  name="first_name"
                  className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  name="last_name"
                  className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="+123456789"
                  className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••••••"
                className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="••••••••••••"
                className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
              />
            </div>
            {/* <div className="flex items-center mb-6">
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
            </div> */}

            <button type="submit" className="w-full bg-[#E4AA15] text-white py-3 rounded-md  transition duration-200 cursor-pointer disabled:bg-gray-700" disabled={disableButton}>
              Create account
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to={"/login"} className="text-red-500 hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* <div className="mt-8 text-center">
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
          </div> */}
        </div>

       
        <div className="w-1/2 p-2 flex justify-center">
            <img
              src={SignupImage}
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

export default SignUpPage;
