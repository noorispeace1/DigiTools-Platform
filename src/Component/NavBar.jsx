import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto px-10 py-4 bg-white border-b border-gray-100">
  
  <div className="flex-shrink-0">
   
   <h1 className='text-3xl font-bold text-purple-900'>DigiTools</h1>
    <div className="w-32 h-8 bg-transparent" /> 
  </div>

  {/* Navigation Menu */}
  <ul className="hidden md:flex items-center space-x-10 text-[15px] font-medium text-gray-500">
    <li className="hover:text-gray-900 cursor-pointer transition-colors">Products</li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">Features</li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">Pricing</li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">Testimonials</li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">FAQ</li>
  </ul>

  {/* Action Buttons & Cart */}
  <div className="flex items-center space-x-7">
    {/* Shopping Cart Icon */}
    <button>
      <FaShoppingCart />

    </button>

    <button className="text-sm font-semibold text-gray-600 hover:text-gray-900">
      Login
    </button>

    {/* Dynamic Get Started Button */}
    <button className="bg-[#7C3AED] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-[#6D28D9] transition-all shadow-sm active:scale-95">
      Get Started
    </button>
  </div>
</nav>
    );
};

export default NavBar;