import React from 'react';

const NavBar = () => {
    return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100">
  
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
    <button className="text-gray-500 hover:text-gray-900 transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
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