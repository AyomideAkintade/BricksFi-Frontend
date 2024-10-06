import React from 'react';

const properties = [
  {
    id: 1,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 2,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 3,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 4,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 5,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  {
    id: 6,
    price: "$123,000",
    name: "Palm Harbor",
    location: "Highland Lake, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "3124.67 sqft",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    popular: true,
  },
  // Add more property data as needed
];

const Discover = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C9E1E7] to-[#FCDBBB] px-8 py-12 rounded-lg mx-6 my-8">
        <div className="flex">
          <div className='flex flex-col gap-2 w-6/12'>
            <h1 className="text-[24px] font-semibold font-[sans-serif]">
              Welcome to Bricks
            </h1>
            <p className="text-[32px] font-semibold font-jakarta">
              Real Estate Tokenisation platform
            </p>
            <p className="text-[#1C1B1F] tracking-[2%] font-inter leading-[28px]">
              Discover the possibilities for home ownership and investment
              solutions by tokenisation of real estate assets to craft lasting
              legacies.
            </p>
          </div>
          {/* <div>
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image URL
              alt="Real Estate Building"
              className="w-full rounded-lg"
            />
          </div> */}
        </div>
      </section>

      {/* Newest Deal Section */}
      <section className="px-6">
        <h2 className="text-[22px] font-bold font-jakarta mb-6">Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white p-4 rounded-lg">
              <div className="relative">
                <img
                  src={property.imageUrl}
                  alt={property.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.23853 4.7385C2.92513 5.0519 2.67652 5.42396 2.50691 5.83343C2.3373 6.24291 2.25 6.68178 2.25 7.125C2.25 7.56821 2.3373 8.00709 2.50691 8.41656C2.67652 8.82604 2.92513 9.1981 3.23853 9.5115L9.00003 15.273L14.7615 9.5115C15.3945 8.87856 15.75 8.02011 15.75 7.125C15.75 6.22989 15.3945 5.37144 14.7615 4.7385C14.1286 4.10556 13.2701 3.74998 12.375 3.74998C11.4799 3.74998 10.6215 4.10556 9.98853 4.7385L9.00003 5.727L8.01153 4.7385C7.69813 4.4251 7.32607 4.17649 6.9166 4.00688C6.50712 3.83727 6.06824 3.74997 5.62503 3.74997C5.18181 3.74997 4.74294 3.83727 4.33346 4.00688C3.92399 4.17649 3.55193 4.4251 3.23853 4.7385V4.7385Z" stroke="#E4AA15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-[24px] font-bold text-[#E4AA15]">{property.price}</h3>
                <p className="tracking-[0.5px] text-[24px] font-bold">{property.name}</p>
                <p className="text-sm text-gray-500">{property.location}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h8M7 9h10M12 12V9m0 9h.01"
                      />
                    </svg>
                    {property.bedrooms} Beds
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12h10M9 12v4h6v-4M9 9v3m6-3v3"
                      />
                    </svg>
                    {property.bathrooms} Baths
                  </div>
                  <div className="text-gray-600">{property.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
