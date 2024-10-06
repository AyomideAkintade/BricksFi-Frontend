import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import useAPI from "../hooks/useApi";
import { PublicKey } from "@solana/web3.js";

export default function OwnedProperties(){

    const { get: getAccount } = useAPI();

    const {connection} = useConnection();
    const [ownedProperties, setOwnedProps ] = useState([]);
    const [amountsOwned, setAmountsOwned ] = useState([]);
    const [noOwned, setNoOwnedProps ] = useState(0);
    const [assetsDetails, setAssetsDetails] = useState([]);
  
    const [ accountKey, setAccountKey ] = useState(null);

    useEffect(()=>{
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

    

    return (
        <div className="">
            <div className="flex flex-col gap-4 bg-white rounded-lg p-5">
                <div className="tracking-[-0.4 px] font-dmsans font-bold text-[18px] text-[#070E05]">Owned Properties</div>
                <div className="table-container w-full">
                    <table className='table-auto w-full border-collapse border-[1px] border-[#E8E8E8]'>
                        <thead className="bg-[#F7F7F7] rounded-[8px] text-[14px] font-dmsans text-[#787389] font-medium sticky top-0">
                            <tr className="">
                                <th className="py-3 px-2 text-start">Name</th>
                                <th className="py-3 px-2 text-start">Location</th>
                                <th className="py-3 px-2 text-start">Cost</th>
                                <th className="py-3 px-2 text-start">Interest</th>
                                <th className="py-3 px-2 text-start">Maturation Date</th>
                                <th className="py-3 px-2 text-start">Estimated Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assetsDetails.map((asset, key)=>{
                                console.log(asset.details)
                            // return (
                            // <tr className="text-[#787389] font-Rubik text-[14.5px]" key={key}>
                            //     <td className="py-2 px-3 border-b-[1px]">{asset.details.name}</td>
                            //     <td className="py-2 px-3 border-b-[1px]">{asset.details.location}</td>
                            //     <td className="py-2 px-3 border-b-[1px]">{asset.amount_owned}</td>
                            //     <td className="py-2 px-3 border-b-[1px]">0</td>
                            //     <td className="py-2 px-3 border-b-[1px]">0</td>
                            //     <td className="py-2 px-3 border-b-[1px]">0</td>
                            // </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );   
}