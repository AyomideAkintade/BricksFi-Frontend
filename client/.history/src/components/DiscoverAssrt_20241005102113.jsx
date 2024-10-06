import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BED_ICON, DIMENSION_ICON, FACILITIES_ICON } from "./discover";

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
            <div className="">
                <div className="grid grid-cols-2 gap-4" style={{gridTemplateColumns: "repeat(2, minmax(0, 50%))"}}>
                    <div className="h-full">
                        <img className="rounded-[16px] w-full h-full object-cover" src={asset.images[0]} alt={asset.name} />
                    </div>
                    <div className="grid  gap-6" style={{gridTemplateColumns: "repeat(2, minmax(0, 50%))"}}>
                        {
                            asset.images.slice(1).map((imageLink, key)=>{
                                return <img className="rounded-[16px]" key={key} src={imageLink} alt={asset.name} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-8">
                <div className="w-[50%] flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="font-inter text-[32px] tracking-[2%] font-bold">{asset.name}</div>
                        <div className="font-inter text-[15px] ">{asset.location}</div>
                    </div>
                    <div className="flex items-center border-2 border-[#D9D9D9] rounded-2xl">
                        {
                            asset.attributes.map(({key, value}) => {
                              let icon;
                              switch(key.toLowerCase()){
                                case "bedroom":
                                  icon = BED_ICON;
                                  break;
                                case "bathroom":
                                  icon = FACILITIES_ICON;
                                  break;
                                case "size":
                                  icon = DIMENSION_ICON;
                                  break;
                                  default:
                                    icon = BED_ICON;
                            }
                            return <div className="w-full flex flex-col items-center gap-2 text-[#000929] border-inherit border-r-[1.5px] last:border-none">
                                <div className="p-4">
                                <div classname="text-[#807F7F] font-inter font-medium">{key}</div>
                                <div className="flex items-center gap-2 font-inter font-semibold">{icon} {value}</div>
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>

            <div className="h-[300px]"></div>
        </div>
    )
}