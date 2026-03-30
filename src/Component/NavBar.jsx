import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = ({ cardata = [] }) => {
  // Total quantity calculate kora
  const cartCount = cardata.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between max-w-7xl mx-auto px-10 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="flex-shrink-0">
        <h1 className='text-3xl font-black text-purple-900 tracking-tighter'>DigiTools</h1>
      </div>

      <ul className="hidden md:flex items-center space-x-10 text-[15px] font-semibold text-gray-500">
        <li className="hover:text-purple-600 cursor-pointer transition-colors">Products</li>
        <li className="hover:text-purple-600 cursor-pointer transition-colors">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer transition-colors">FAQ</li>
      </ul>

      <div className="flex items-center space-x-7">
        <div className="relative p-2 text-gray-700">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {cartCount}
            </span>
          )}
        </div>

        <button className="text-sm font-bold text-gray-600 hover:text-gray-900">Login</button>
        <button className="bg-[#7C3AED] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-[#6D28D9] transition-all active:scale-95 shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;