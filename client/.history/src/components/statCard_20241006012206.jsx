/* eslint-disable react-hooks/exhaustive-deps */
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
            <div className="flex items-center justify-between gap-5">
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


    const {connection} = useConnection();
    const [noProperties, setNoProps ] = useState(0);
    const [noOwned, setNoOwnedProps ] = useState(0);
  
    const [ accountKey, setAccountKey ] = useState(null);
   //const [ accountId, setAccountId ] = useState(null);
  
    const fetchAssets = async ()=>{

    try {
        const bricks = new BricksProgram(connection);
        bricks.fetchAllAssets().then((assests)=>{
            setNoProps(assests.length);
        });
    }
    catch (error) {
        console.error(error)
    }
    
    }
  
    useEffect(()=>{
      fetchAccount();
    }, [connection])
 
    useEffect(()=>{
        if(accountKey){
            const bricks = new BricksProgram(connection);
            bricks.fetchUser({userKey: accountKey}).then((user)=>{
              setNoOwnedProps(user.owned_assets.length);
            });
        }
    }, [accountKey])
  
    const fetchAccount = async ()=>{
      const responseData = await getAccount("api/user/fetch", [], true);
      if(responseData["success"] === true){
        try {
          const accountKey = responseData["data"]["account_key"];
          //const accountId = responseData["data"]["id"];
          //setAccountId(accountId);
          // eslint-disable-next-line no-unused-vars
          const publicKey = new PublicKey(accountKey);
          setAccountKey(accountKey);
        }
        catch {

        }
        finally {
          fetchAssets();
        }
      }
  }


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
                title="Total Properties" 
                value={noProperties}
                paragraph="" 
                icon={<BsFillHousesFill className="text-[24px]" />} 
            />
            <StatCard 
                title="Listed Properties" 
                value={noProperties}
                paragraph="" 
                icon={<FaClipboardList className="text-[24px]" />} 
            />
            <StatCard 
                title="Properties Bought" 
                value={noOwned}
                paragraph="" 
                icon={<BsFillHouseHeartFill className="text-[24px]" />} 
            />
            <StatCard 
                title="Pending Investments" 
                value="0" 
                paragraph="" 
                icon={<BsHouseCheck className="text-[24px]" />} 
            />
             <StatCard 
                title="Saved Properties" 
                value="0" 
                paragraph="" 
                icon={<BsHouses className="text-[24px]" />} 
            />

           
                <PropertyStatistics />
          
        </div>
    );
};

export default DashboardStats;
