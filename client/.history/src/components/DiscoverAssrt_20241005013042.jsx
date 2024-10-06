import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";

export default function DiscoverAsset(props){
    const [asset, setAsset] = useState([]);

    const {connection} = useConnection();

    const fetchAsset = () => {
    const bricks = new BricksProgram(connection);
    console.log(props.id);
      bricks.fetchAsset({assetKey: props.id}).then((asset)=>{
        console.log(asset);
        setAsset(asset);
      });
    }

    useEffect(()=>{
        fetchAsset();
    }, []);
    return (
        <div className="flex flex-col gap-3">
            <div className="flex w-full">
                <div className="w-full"></div>
                <div className="w-full grid grid-cols-2">
                    
                </div>
            </div>
        </div>
    )
}