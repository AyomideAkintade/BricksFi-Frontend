import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DiscoverAsset(){
    const [asset, setAsset] = useState([]);
    const params = useParams();

    const {connection} = useConnection();

    const fetchAsset = () => {
    if(params.id){
        const bricks = new BricksProgram(connection);
          bricks.fetchAsset({assetKey: params.id}).then((asset)=>{
            console.log(asset);
            setAsset(asset);
        });
    }
    }

    useEffect(()=>{
        fetchAsset();
    }, []);
    return (
        <div className="flex flex-col gap-3">
            <div className="flex w-full">
                <div className="w-full">
                    <div className="">
                        <img src={asset.images[0]} alt={asset.name} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2">
                    a
                </div>
            </div>
        </div>
    )
}