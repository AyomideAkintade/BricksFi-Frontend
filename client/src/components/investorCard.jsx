import Clem from "../assets/clem.jpeg";


const InvestorCard = ({ name, investment, profit }) => {
    return (
      <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
        
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-green-500"> {profit}</p>
          <p className="text-gray-500"> {investment}</p>
        </div>

        <img
          src={Clem}
          alt={name}
          className="rounded-full h-10 w-10 ml-20"
        />
      </div>
    );
  };
  
  const TopInvestors = () => {
    return (
      <>
        {/* <h2 className="text-lg font-semibold mb-4">Top Investors</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InvestorCard name="John Snow" investment="$984.68K" profit="5.6%" />
          <InvestorCard name="Arya Stark" investment="$752.24K" profit="4.8%" />
        </div>
      </>
    );
  };
  
  export default TopInvestors;
  