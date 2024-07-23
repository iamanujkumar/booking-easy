import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import '../../../Pages/CoverPage/CoverPage.css'

interface Vendor {
  name: string;
  image: string;
}

const VendorList: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get<Vendor[]>('/vendors.json');
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    };

    fetchVendors();
  }, []);

  const displayedVendors = showAll ? vendors : vendors.slice(0, 8);

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto my-5">
                <SearchBar/>
            </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Vendors</h1>
        <h2 className="text-2xl text-gray-700">Meet our trusted vendors</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        <div className='blure' style={{top:'26%'}}></div>
        <div className='blure' style={{top:'55%', left:'12%'}}></div>
        {displayedVendors.map((vendor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold">{vendor.name}</h3>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View All Vendors
          </button>
        </div>
      )}
    </div>
  );
};

export default VendorList;
