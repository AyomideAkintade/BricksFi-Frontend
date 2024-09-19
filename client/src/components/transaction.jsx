import { FaPaypal } from "react-icons/fa6";
import { TfiWallet } from "react-icons/tfi";
import { GiPieChart } from "react-icons/gi";

const TransactionItem = ({ icon, description, amount, bgColor }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
            {/* Icon and Description in a row */}
            <div className="flex items-center space-x-4">
                {/* Icon with dynamic background and rounded shape */}
                <div className={`p-3 ${bgColor} rounded-lg text-white`}>
                    {icon}
                </div>
                <span>{description}</span>
            </div>
            
            {/* Amount */}
            <div>
                <span>{amount}</span>
            </div>
        </div>
    );
};

const Transactions = () => {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Transactions</h2>
            {/* Different background colors for each transaction */}
            <TransactionItem 
                icon={<FaPaypal />} 
                description="Send Money" 
                amount="-82.6 USD" 
                bgColor="bg-green-400"  // Green background
            />
            <TransactionItem 
                icon={<TfiWallet />} 
                description="Withdraw" 
                amount="-270.69 USD" 
                bgColor="bg-red-400"    // Red background
            />
            <TransactionItem 
                icon={<GiPieChart />} 
                description="Pending" 
                amount="-500 USD" 
                bgColor="bg-yellow-400" // Yellow background
            />
        </div>
    );
};

export default Transactions;
