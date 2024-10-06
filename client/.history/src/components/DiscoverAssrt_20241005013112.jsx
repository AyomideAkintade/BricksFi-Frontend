import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DiscoverAsset(props){
    const [asset, setAsset] = useState([]);
    const params = useParams();

    const {connection} = useConnection();

    const fetchAsset = () => {
    const bricks = new BricksProgram(connection);
    console.log(params);
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