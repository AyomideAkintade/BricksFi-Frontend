import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DiscoverAsset(){
    const [asset, setAsset] = useState(null);
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

    if(!asset){
        return <>loading</>
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-4" style={{}}>
                <div className="h-[300px]">
                    <div className="">
                        <img className="rounded-[16px] object-cover" src={asset.images[0]} alt={asset.name} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 h-[300px]">
                    {
                        asset.images.slice(1).map((imageLink, key)=>{
                            return <img className="rounded-[16px]" key={key} src={imageLink} alt={asset.name} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}