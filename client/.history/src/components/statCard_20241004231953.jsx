import { BsFillHousesFill, BsHouseCheck, BsFillHouseHeartFill, BsHouses } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import PropertyStatistics from '../components/propertyStatistic'; 


const StatCard = ({ title, value, icon, paragraph }) => {
    return (
        <div className="bg-white rounded-lg p-6 flex flex-col justify-between" style={{boxShadow: "1px 2px 20px -4px #22303E14"}}>
            <div className="flex items-center gap-3">
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
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
                title="Total Properties" 
                value="32" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsFillHousesFill className="text-[24px]" />} 
            />
            <StatCard 
                title="Listed Property" 
                value="22" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<FaClipboardList className="text-[24px]" />} 
            />
            <StatCard 
                title="Property Bought" 
                value="10" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsFillHouseHeartFill className="text-[24px]" />} 
            />
            <StatCard 
                title="Pending Investments" 
                value="2" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsHouseCheck className="text-[24px]" />} 
            />
             <StatCard 
                title="Saved Property" 
                value="2" 
                paragraph="Lorem ipsum dolor sit amet consectetur." 
                icon={<BsHouses className="text-[24px]" />} 
            />

           
                <PropertyStatistics />
          
        </div>
    );
};

export default DashboardStats;
