import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import useAPI from "../hooks/useApi";
import { PublicKey } from "@solana/web3.js";
import { useNavigate } from "react-router";
import { to2dp } from "../utils/to2dp";
import { isEmpty } from "../utils/functions";

export default function OwnedProperties(){

    const { get: getAccount } = useAPI();

    const {connection} = useConnection();
    const [ownedProperties, setOwnedProps ] = useState([]);
    const [amountsOwned, setAmountsOwned ] = useState([]);
    const [noOwned, setNoOwnedProps ] = useState(0);
    const [assetsDetails, setAssetsDetails] = useState([]);
  
    const [ accountKey, setAccountKey ] = useState(null);


    const [ rate, setRate ] = useState(null);

    const fetchRates = async () => {
        try {
            const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT');
            const data = await response.json();
            setRate(parseFloat(data.price));
        } catch (error) {
            //
        }
    }

    useEffect(()=>{
        fetchRates();
        fetchAccount();
      }, [])
   
      useEffect(()=>{
          if(accountKey){
              const bricks = new BricksProgram(connection);
              bricks.fetchUser({userKey: accountKey}).then((user)=>{
                setOwnedProps(user.owned_assets);
                setAmountsOwned(user.ownership_amounts);
              });
          }
      }, [accountKey])

      const fetchAccount = async ()=>{
            const responseData = await getAccount("api/user/fetch", [], true);
            if(responseData["success"] === true){
              try {
                const accountKey = responseData["data"]["account_key"];
                const publicKey = new PublicKey(accountKey);
                setAccountKey(accountKey);
              }
              catch {
            
              }
            }
    }

    const fetchAsset = (accountKey) => {
        try {
            const bricks = new BricksProgram(connection);
            const asset = bricks.fetchAsset({assetKey: accountKey})
            return asset;
        }
        catch {
            return;
        }
    }    

    const fetchAssetsDetails = async () => {
        const assets = [];
       for(const accountKey of ownedProperties) {
           const asset = await fetchAsset(accountKey);
           if(asset){
            assets.push({ key: accountKey, amount_owned: amountsOwned[ownedProperties.indexOf(accountKey)], details: asset })
           }
       }
       setAssetsDetails(assets)
    }


    useEffect(()=>{
        fetchAssetsDetails();
    }, [ownedProperties]);

    const navigate = useNavigate();

    

    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center gap-8">
                <div className="bg-white rounded-lg px-4 py-7 flex-1" style={{boxShadow: "rgba(34, 48, 62, 0.08) 1px 2px 20px -4px"}}>
                    <div className="w-full flex flex-col gap-1">
                         <div className="text-[#181819E5] font-bold text-[14px]">Total assets owned</div>
                        <div className="text-[#14142B] text-[26px] font-bold">{ownedProperties.length}</div>
                    </div>
                </div>
                <div className="bg-white rounded-lg px-4 py-7 flex-1" style={{boxShadow: "rgba(34, 48, 62, 0.08) 1px 2px 20px -4px"}}>
                    <div className="w-full flex flex-col gap-1">
                        <div className="text-[#181819E5] font-bold text-[14px]">Total Value ($)</div>
                        <div className="text-[#14142B] text-[26px] font-bold">${to2dp((amountsOwned.reduce((a, b) => a + b, 0)) * (rate || 0))}</div>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg p-5">
                <div className="tracking-[-0.4 px] font-dmsans font-bold text-[18px] text-[#070E05]">Owned Properties</div>
                {isEmpty(assetsDetails) ? <div className="text-gray-700 my-3 text-[14px] font-medium">No property owned</div> :
                <div className="table-container w-full">
                    <table className='table-auto w-full border-collapse border-[1px] border-[#E8E8E8] rounded-md'>
                        <thead className="bg-[#F7F7F7] rounded-[8px] text-[14px] font-dmsans text-[#787389] font-medium sticky top-0">
                            <tr className="">
                                <th className="py-3 px-2 text-start">Name</th>
                                <th className="py-3 px-2 text-start">Location</th>
                                <th className="py-3 px-2 text-start">Cost</th>
                                <th className="py-3 px-2 text-start">Percentage Owned</th>
                                <th className="py-3 px-2 text-start">Interest</th>
                                <th className="py-3 px-2 text-start">Maturation Date</th>
                                <th className="py-3 px-2 text-start">Estimated Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assetsDetails.map((asset, key)=>{
                            return (
                            <tr className="text-[#787389] font-Rubik text-[14.5px]" key={key} onClick={()=>{ navigate(`/discover/asset/${asset.key}`) }}>
                                <td className="py-3 px-3 border-b-[1px]">{asset.details.name}</td>
                                <td className="py-3 px-3 border-b-[1px]">{asset.details.location}</td>
                                <td className="py-3 px-3 border-b-[1px]">${to2dp(asset.amount_owned * (rate || 0))}</td>
                                <td className="py-3 px-3 border-b-[1px]"> {(asset.amount_owned / asset.details.value * 100)}%</td>
                                <td className="py-3 px-3 border-b-[1px]">0%</td>
                                <td className="py-3 px-3 border-b-[1px]">0</td>
                                <td className="py-3 px-3 border-b-[1px]">0</td>
                            </tr>)
                            })}
                        </tbody>
                    </table>
                </div> }
            </div>
        </div>
    );   
}