import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAPI from "../hooks/useApi";
import { showErrorToast } from "../utils/toast";
import { toast } from "react-toastify";
import BricksFi from '../assets/bricksfi.png'
import SignupImage from '../assets/signup-image.webp'
import { Link } from "react-router-dom";


export default function Verify(){
    const location = useLocation();
    const navigate = useNavigate();
    const [ email, setEmail ] = useState(null);
    const [ code, setCode ] = useState(null);
    const [ disableButton, setDisableButton ] = useState(false);

    const {post} = useAPI();

    const handleVerify = async ()=>{
        const verifyPromise = new Promise(async (resolve, reject) => {
            try {
                const postData = {
                    email: email,
                    code: code
                }
              const response = await post('auth/verify', postData , false, false);
              if(response['success']){
                resolve();
                navigate("/login");
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
      
          toast.promise(verifyPromise, {
            pending: "Verifying account, hold on",
            success: "Account verified",
        })
    }

    useEffect(()=>{
        if(location.state && location.state.email){
            setEmail(location.state.email);
        }
        else {
            navigate("/signup")
        }
    }, [location, navigate])

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
    
              <div className="flex p-12 w-full items-start">
              <div className="w-1/2 px-12 py-7 flex flex-col gap-6 text-[#313131] my-8">
              <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">Verify code</h2>
              <p className="text-gray-500">
              An authentication code has been sent to your email.
              </p>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Code</label>
                  <input
                    type="text"
                    placeholder="Code"
                    className="w-full px-4 py-3 border-[1px] text-sm rounded-md outline-none border-[#79747E]"
                  />
                </div>
    
                <button type="submit" className="w-full bg-[#E4AA15] text-white py-3 rounded-md  transition duration-200 cursor-pointer disabled:bg-gray-700" disabled={disableButton}>
                  Verify
                </button>
            </div>
    
              <div className="mt-4">
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
}