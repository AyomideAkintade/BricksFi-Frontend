import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAPI from "../hooks/useApi";
import { showErrorToast } from "../utils/toast";
import { toast } from "react-toastify";

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

    return <></>
}