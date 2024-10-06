import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Verify(){
    const location = useLocation();
    const navigate = useNavigate();
    const [ email, setEmail ] = useState(null);

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