import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import BricksProgram from "bricks-lib";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BED_ICON, DIMENSION_ICON, FACILITIES_ICON } from "./discover";
import { isEmpty, isValidLink } from "../utils/functions";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function DiscoverAsset(){
    const [asset, setAsset] = useState(null);
    const params = useParams();

    const {connection} = useConnection();

    const [ financials, setFinancials ] = useState([]);

    const [buyValue, setBuyValue] = useState(0);

    const { publicKey, signTransaction } = useWallet();

    const initFinancials = (asset)=>{
        setFinancials([
            {
                title: "Property Price",
                value: `${asset.value} SOL`
            },
            {
                title: "Value of Asset",
                isInput: true
            }
        ])
    }

    const fetchAsset = () => {
    if(params.id){
        const bricks = new BricksProgram(connection);
          bricks.fetchAsset({assetKey: params.id}).then((asset)=>{
            initFinancials(asset);
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
                <div className="w-[60%] flex flex-col gap-6">
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
                                <div className="text-[#807F7F] text-[16px] font-inter font-medium">{key}</div>
                                <div className="flex items-center gap-2 text-[15px] font-inter font-semibold">{icon} {value}</div>
                                </div>
                            </div>
                            })
                        }
                    </div>
                    <div className="flex items-center gap-8">
                        { isValidLink(asset.virtual_link)  && <Link to={asset.virtual_link} className="w-full max-w-[200px] flex p-3 items-center gap-3 bg-[#DDA72233] rounded-lg">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5043 9.698H15.1328V16.2955H16.5043C18.3178 16.2955 19.1384 15.2116 19.1384 13.013C19.1384 10.8127 18.3097 9.698 16.5043 9.698Z" fill="black"/>
                            <path d="M0 6.5C0 5.63805 0.34241 4.8114 0.951903 4.2019C1.5614 3.59241 2.38805 3.25 3.25 3.25H22.75C23.612 3.25 24.4386 3.59241 25.0481 4.2019C25.6576 4.8114 26 5.63805 26 6.5V19.5C26 20.362 25.6576 21.1886 25.0481 21.7981C24.4386 22.4076 23.612 22.75 22.75 22.75H3.25C2.38805 22.75 1.5614 22.4076 0.951903 21.7981C0.34241 21.1886 0 20.362 0 19.5V6.5ZM8.424 13.598C9.47375 13.598 10.1384 14.2122 10.1465 15.0605C10.1595 15.9331 9.45263 16.5539 8.38175 16.5539C7.41 16.5474 6.69663 16.0257 6.64625 15.3254H4.875C4.92375 16.8106 6.16037 18.0684 8.37362 18.0684C10.3886 18.0684 12.0868 16.9959 12.0656 15.1466C12.0445 13.598 10.8517 12.9041 9.96612 12.8196V12.7189C10.6811 12.6051 11.7943 11.8625 11.7666 10.4845C11.7455 9.01225 10.4666 7.93325 8.4305 7.94138C6.30175 7.9495 5.11063 9.13413 5.06025 10.6551H6.85262C6.88837 10.0198 7.475 9.43475 8.37362 9.43475C9.23812 9.43475 9.88163 9.971 9.88163 10.7559C9.88812 11.5343 9.25925 12.1128 8.37362 12.1128H7.34662V13.598H8.424ZM13.2048 17.875H16.7619C19.7031 17.875 21.125 16.0761 21.125 12.9756C21.125 9.89788 19.7259 8.12663 16.7619 8.12663H13.2048V17.875Z" fill="black"/>
                            </svg>
                            <div className="font-jakarta text-[16px] font-medium">Virtual Tour</div>
                        </Link> }
                        <Link to={asset.virtual_link} className="w-full max-w-[200px] flex p-3 items-center gap-3 bg-[#DDA72233] rounded-lg">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.54676 12.5797C10.0418 12.168 10.5413 12.168 11.0483 12.5916L11.1653 12.6977L16.5668 18.0992L16.6686 18.1892C16.877 18.3507 17.1373 18.4307 17.4005 18.4141C17.6637 18.3975 17.9118 18.2854 18.0983 18.099C18.2848 17.9125 18.3969 17.6643 18.4135 17.4011C18.4301 17.1379 18.3501 16.8777 18.1885 16.6692L18.0986 16.5674L16.6989 15.1667L17.0153 14.8492L17.1301 14.7463C17.6252 14.3347 18.1246 14.3347 18.6316 14.7582L18.7486 14.8644L23.8121 19.929C23.7095 20.9606 23.2405 21.9213 22.4902 22.6367C21.7398 23.352 20.7579 23.7747 19.7225 23.8279L19.4993 23.8333H6.49935C5.42458 23.8333 4.38819 23.4338 3.59142 22.7125C2.79465 21.9912 2.29435 20.9995 2.18768 19.9301L9.43193 12.6826L9.54676 12.5797ZM19.4993 2.16666C20.6111 2.16666 21.6803 2.59396 22.4859 3.36019C23.2914 4.12642 23.7717 5.17295 23.8273 6.28332L23.8327 6.49999V16.8837L20.2653 13.3174L20.1028 13.169C18.7421 11.9827 17.0153 11.9806 15.6654 13.1506L15.4986 13.3022L15.166 13.6337L12.6819 11.1507L12.5194 11.0023C11.1588 9.81607 9.43193 9.81391 8.0821 10.9839L7.91527 11.1356L2.16602 16.8837V6.49999C2.16601 5.38823 2.59332 4.31899 3.35955 3.51344C4.12578 2.70789 5.17231 2.22766 6.28268 2.17207L6.49935 2.16666H19.4993ZM16.2602 7.58332L16.1226 7.59091C15.8593 7.62223 15.6166 7.74902 15.4405 7.94728C15.2645 8.14554 15.1672 8.4015 15.1672 8.66666C15.1672 8.93182 15.2645 9.18777 15.4405 9.38603C15.6166 9.58429 15.8593 9.71109 16.1226 9.74241L16.2493 9.74999L16.3869 9.74241C16.6502 9.71109 16.8929 9.58429 17.069 9.38603C17.2451 9.18777 17.3423 8.93182 17.3423 8.66666C17.3423 8.4015 17.2451 8.14554 17.069 7.94728C16.8929 7.74902 16.6502 7.62223 16.3869 7.59091L16.2602 7.58332Z" fill="black"/>
                            </svg>
                            <div className="font-jakarta text-[16px] font-medium">{asset.images.length} Photos</div>
                        </Link>
                    </div>

                    <div className="font-jakarta flex items-center gap-4">
                        <span className="text-[23px] text-[#E4AA15] font-bold">{asset.value} SOL</span>
                        <span className="font-medium text-[16px]">Property Value</span>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="relative w-full">
                            <div className="bg-[#ECECEB] h-[4px] w-full absolute top-0 rounded-lg"></div>
                            <div className="absolute top-0 h-[4px] w-full rounded-lg z-[1]" style={{background: `linear-gradient(90deg, #E4AA15, #E4AA15) 0% 0% / 50% ${100 - ((asset.value - asset.value_bought)/asset.value * 100)}% no-repeat`}}></div>
                        </div>
                        <div className="flex items-center font-jakarta justify-between">
                            <div className="flex items-center gap-3">
                                <svg width="28" height="28" className="w-[20px]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4198 14.0385L15.4719 11.1708L17.9663 5.18467C18.0533 5.00688 18.0938 4.80991 18.084 4.61219C18.0742 4.41448 18.0144 4.22248 17.9102 4.05417C17.806 3.88586 17.6608 3.74674 17.4882 3.64982C17.3156 3.5529 17.1212 3.50135 16.9233 3.5C16.6602 3.49938 16.4046 3.58732 16.1976 3.74967L16.1159 3.81967L7.36595 12.103C7.23441 12.2279 7.13375 12.3817 7.07193 12.5523C7.01011 12.7228 6.98883 12.9054 7.00977 13.0856C7.03071 13.2658 7.09329 13.4386 7.19257 13.5905C7.29185 13.7423 7.4251 13.8689 7.58178 13.9603L12.5308 16.8303L10.0073 22.8853C9.9032 23.1323 9.88741 23.4076 9.96259 23.6649C10.0378 23.9222 10.1993 24.1456 10.42 24.2977C10.6407 24.4498 10.9071 24.5211 11.1743 24.4998C11.4414 24.4784 11.6931 24.3656 11.8868 24.1803L20.6368 15.8947C20.768 15.7697 20.8684 15.6159 20.93 15.4454C20.9916 15.2749 21.0127 15.0924 20.9917 14.9124C20.9706 14.7324 20.908 14.5597 20.8087 14.408C20.7095 14.2564 20.5763 14.1299 20.4198 14.0385Z" fill="#E4AA15"/>
                                </svg>
                                <div className="text-[#E4AA15] font-medium text-[15px]">{100 - ((asset.value - asset.value_bought)/asset.value * 100)}% funded</div>
                            </div>
                            <div className="text-[#444444] text-[13px] font-medium">{asset.value - asset.value_bought} SOL available</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 font-jakarta">
                        <div className="font-bold text-[20px] tracking-[1%]">Financials</div>
                        {
                            financials.map(({title, value, isInput}, key) => {
                                return <div className="flex items-center justify-between" key={key}>
                                    <div className="font-medium text-[14px] tracking-[1%]">{title}</div>
                                    {isInput ? 
                                    <input type="text" className="border-[1px] w-[80px] py-[6px] px-2 rounded-lg text-[14px] outline-none"
                                    placeholder="Amount" max={asset.value - asset.value_bought}
                                    onChange={e=>{
                                        setBuyValue(isNaN(e.target.value) ? 0 : parseFloat(e.target.value))
                                    }} /> 
                                    : <div className="text-[13px] font-medium">{value}</div>}
                                </div>
                            })
                        }
                        <div className="flex items-center justify-between">
                            <div className="font-semibold text-[16px] tracking-[1%]">Investment  cost</div>
                            <div className="text-[#E4AA15] font-bold text-[18px]">{buyValue || 0} SOL</div>
                        </div>
                    </div>


                    {!isEmpty(asset.timeline) && <div className="">
                        <div className="font-bold text-[20px] tracking-[1%]">Funding Timeline</div>
                    </div>}

                </div>
                <div className="flex-1">
                    <div className="mt-[100px] flex flex-col items-center gap-5 px-6 py-8 rounded-[32px]" style={{boxShadow:'1px 1px 32px -8px #0000001A'}}>
                        <div className="font-jakarta tracking-[2%] font-bold text-[20px]">Financial Summary</div>
                        <div className="h-[1px] bg-[#D9D9D9] w-full" />
                        <div className="flex flex-col gap-2 items-center">
                            <div className="font-inter text-[15px]">Total Property Price</div>
                            <div className="font-jakarta font-bold text-[22px]">{asset.value} SOL</div>
                        </div>
                        <div className="relative bg-[#F5F5F5] rounded-lg flex flex-col gap-4 py-6 px-5 w-full">
                            <div className="flex items-center justify-between">
                                <div className="font-jakarta text-[14px]">Percentage</div>
                                <div className="font-jakarta font-semibold text-[#E4AA15]">{buyValue/asset.value * 100 || 0}%</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="font-jakarta text-[14px]">Amount</div>
                                <div className="font-jakarta font-semibold text-[#E4AA15]">{buyValue || 0}</div>
                            </div>
                            <div className="w-full absolute bottom-[-30px] flex justify-center">
                                {(asset.value - asset.value_bought >= buyValue && buyValue !== 0 ) && 
                                <div className="rounded-xl text-[#FFFFFF] py-3 px-9 cursor-pointer">
                                    {!publicKey ? 
                                        <WalletMultiButton children={"Select Wallet"}  />
                                        : 
                                        <button className="bottom-0 bg-[#E4AA15] rounded-xl text-[#FFFFFF] py-3 px-9 cursor-pointer">Buy</button>
                                        }
                                </div>
                                 }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[300px]"></div>
        </div>
    )
}