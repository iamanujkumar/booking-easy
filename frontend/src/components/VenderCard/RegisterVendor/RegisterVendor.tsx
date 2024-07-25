import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FaCamera, FaCar, FaHome, FaBook, FaPaintBrush, FaGifts, FaRunning, FaPalette, FaEnvelopeOpenText, FaHandSparkles, FaGem, FaMusic } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi'; // Importing the icon from react-icons/gi
import { FaBowlFood } from 'react-icons/fa6';
import SearchBar from '../SearchBar/SearchBar';
import '../../../Pages/CoverPage/CoverPage.css';

interface RegisterVendors {
  name: string;
  icon: keyof typeof vendorIcons; 
  path: string;
}

const vendorIcons = {
  FaCamera,
  FaCar,
  FaHome,
  FaBook,
  FaPaintBrush,
  FaGifts,
  FaRunning,
  FaPalette,
  FaEnvelopeOpenText,
  FaHandSparkles,
  FaBowlFood,
  FaGem,
  FaMusic,
  GiClothes,
};

const iconColors = [
  'text-blue-500', 
  'text-red-500', 
  'text-green-500', 
  'text-yellow-500', 
  'text-purple-500', 
  'text-orange-500', 
  'text-pink-500', 
  'text-indigo-500',
  'text-teal-500',
  'text-gray-500',
  'text-cyan-500',
  'text-rose-500',
  'text-amber-500',
  'text-lime-500'
];

const RegisterVendor: React.FC = () => {
  const [vendors, setVendors] = useState<RegisterVendors[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get<RegisterVendors[]>('/RegisterVendors.json');
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    };

    fetchVendors();
  }, []);

  const displayedVendors = showAll ? vendors : vendors.slice(0, 8);

  return (
    <div className="container mx-auto p-4 my-4">
      
      <div className="text-center mt-12 mb-4">
        <h1 className="text-4xl font-bold mb-2">Register as New Vendor</h1>
        <h2 className="text-2xl font-sans font-semibold bg-gradient-to-r from-pink-600 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text">CHOOSE YOUR SERVICE </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        <div className='blure' style={{top:'26%', left:'58%'}}></div>
        <div className='blure' style={{top:'55%', left:'12%'}}></div>
        {displayedVendors.map((vendor, index) => {
          const IconComponent = vendorIcons[vendor.icon as keyof typeof vendorIcons] as IconType;
          const colorClass = iconColors[index % iconColors.length];

          return (
            <Link to={vendor.path} key={index}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-center items-center mb-4">
                  <IconComponent className={`text-6xl ${colorClass} transition-transform duration-700 ease-in-out transform hover:scale-110`} />
                </div>
                <h3 className="text-md font-semibold text-center">{vendor.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      {!showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View All Vendors
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterVendor;
