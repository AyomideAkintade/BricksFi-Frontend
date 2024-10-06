import { BsFillHousesFill, BsHouseCheck, BsFillHouseHeartFill, BsHouses } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import PropertyStatistics from '../components/propertyStatistic'; 
import React, { useEffect, useState } from 'react';
import useAPI from '../hooks/useApi';
import { PublicKey } from '@solana/web3.js';
import { useConnection } from '@solana/wallet-adapter-react';
import BricksProgram from 'bricks-lib';

const StatCard = ({ title, value, icon, paragraph }) => {
    return (
        <div className="bg-white rounded-lg p-6 flex flex-col justify-between h-fit" style={{boxShadow: "1px 2px 20px -4px #22303E14"}}>
            <div className="flex items-center gap-5">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#807F7F]">{title}</h3>
                    <h2 className="text-xl font-semibold">{value}</h2>
                    <p className="text-[13px] text-[#807F7F]">{paragraph}</p>
                </div>
                <div className="flex items-center justify-center p-[12px] bg-gray-100 rounded-full text-yellow-500 text-4xl">
                    {icon}
                </div>
            </div>
        </div>
    );
};


const DashboardStats = () => {

    const { get: getAccount } = useAPI();


    const connection = useConnection();
    const [noProperties, setNoProps ] = useState(0);
    const [noOwned, setNoOwnedProps ] = useState(0);
  
    const [ accountKey, setAccountKey ] = useState(null);
    const [ accountId, setAccountId ] = useState(null);
  
    const fetchPages = async ()=>{

    try {
        const bricks = new BricksProgram(connection);
        bricks.fetchAllAssets().then((assests)=>{
            setNoProps(assests.length);
        });
      
        if(accountKey){
          bricks.fetchUser({userKey: accountKey}).then((user)=>{
            setNoOwnedProps(user.owned_assets.length);
          });
        }
    }
    catch (error) {
        console.error(error)
    }
    
    }
  
    useEffect(()=>{
      fetchAccount();
    }, [connection])
  
  
    const fetchAccount = async ()=>{
      const responseData = await getAccount("api/user/fetch", [], true);
      if(responseData["success"] === true){
        try {
          const accountKey = responseData["data"]["account_key"];
          const accountId = responseData["data"]["id"];
          setAccountId(accountId);
          const publicKey = new PublicKey(accountKey);
          setAccountKey(accountKey);
        }
        catch {

        }
        finally {
          fetchPages();
        }
      }
  }


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
                title="Total Properties" 
                value={noProperties}
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsFillHousesFill className="text-[24px]" />} 
            />
            <StatCard 
                title="Listed Property" 
                value={noProperties}
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<FaClipboardList className="text-[24px]" />} 
            />
            <StatCard 
                title="Property Bought" 
                value={noOwned}
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsFillHouseHeartFill className="text-[24px]" />} 
            />
            <StatCard 
                title="Pending Investments" 
                value="0" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsHouseCheck className="text-[24px]" />} 
            />
             <StatCard 
                title="Saved Property" 
                value="0" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsHouses className="text-[24px]" />} 
            />

           
                <PropertyStatistics />
          
        </div>
    );
};

export default DashboardStats;
