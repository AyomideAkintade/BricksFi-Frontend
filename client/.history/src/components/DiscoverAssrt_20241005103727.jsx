import { useConnection } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BED_ICON, DIMENSION_ICON, FACILITIES_ICON } from "./discover";
import { isValidLink } from "../utils/functions";
import { Link } from "react-router-dom";

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
                            asset.images.slice(1, 5).map((imageLink, key)=>{
                                return <img className="rounded-[16px]" key={key} src={imageLink} alt={asset.name} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-8">
                <div className="w-[60%] flex flex-col gap-4">
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
                            return <div className="w-full flex flex-col items-center text-[#000929] border-inherit border-r-[1.5px] last:border-none">
                                <div className="p-6 flex flex-col gap-1">
                                <div className="text-[#807F7F] text-[18px] font-inter font-medium">{key}</div>
                                <div className="flex items-center gap-2 font-inter font-semibold">{icon} {value}</div>
                                </div>
                            </div>
                            })
                        }
                    </div>
                    <div className="flex items-center gap-4">
                        { isValidLink(asset.virtual_link)  && <Link to={asset.virtual_link} className="w-full flex p-3 items-center gap-3 bg-[#DDA72233] rounded-lg">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5043 9.698H15.1328V16.2955H16.5043C18.3178 16.2955 19.1384 15.2116 19.1384 13.013C19.1384 10.8127 18.3097 9.698 16.5043 9.698Z" fill="black"/>
                            <path d="M0 6.5C0 5.63805 0.34241 4.8114 0.951903 4.2019C1.5614 3.59241 2.38805 3.25 3.25 3.25H22.75C23.612 3.25 24.4386 3.59241 25.0481 4.2019C25.6576 4.8114 26 5.63805 26 6.5V19.5C26 20.362 25.6576 21.1886 25.0481 21.7981C24.4386 22.4076 23.612 22.75 22.75 22.75H3.25C2.38805 22.75 1.5614 22.4076 0.951903 21.7981C0.34241 21.1886 0 20.362 0 19.5V6.5ZM8.424 13.598C9.47375 13.598 10.1384 14.2122 10.1465 15.0605C10.1595 15.9331 9.45263 16.5539 8.38175 16.5539C7.41 16.5474 6.69663 16.0257 6.64625 15.3254H4.875C4.92375 16.8106 6.16037 18.0684 8.37362 18.0684C10.3886 18.0684 12.0868 16.9959 12.0656 15.1466C12.0445 13.598 10.8517 12.9041 9.96612 12.8196V12.7189C10.6811 12.6051 11.7943 11.8625 11.7666 10.4845C11.7455 9.01225 10.4666 7.93325 8.4305 7.94138C6.30175 7.9495 5.11063 9.13413 5.06025 10.6551H6.85262C6.88837 10.0198 7.475 9.43475 8.37362 9.43475C9.23812 9.43475 9.88163 9.971 9.88163 10.7559C9.88812 11.5343 9.25925 12.1128 8.37362 12.1128H7.34662V13.598H8.424ZM13.2048 17.875H16.7619C19.7031 17.875 21.125 16.0761 21.125 12.9756C21.125 9.89788 19.7259 8.12663 16.7619 8.12663H13.2048V17.875Z" fill="black"/>
                            </svg>

                            <div className="font-jakarta text-[18px] font-medium">Virtual Tour</div>
                        </Link> }
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>

            <div className="h-[300px]"></div>
        </div>
    )
}