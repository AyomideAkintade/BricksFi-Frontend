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
    <div className="bg-gray-50 min-h-screen">
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
                {property.popular && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A4.992 4.992 0 015 15c0-1.38.56-2.63 1.464-3.536l.707-.707c.879-.88 2.03-1.464 3.537-1.464 1.507 0 2.658.584 3.537 1.464l.707.707A4.992 4.992 0 0119 15a4.992 4.992 0 01-1.465 3.535l-6.585 6.585a1 1 0 01-1.414 0l-6.585-6.585z"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{property.price}</h3>
                <p className="text-gray-600">{property.name}</p>
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
