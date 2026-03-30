import React from 'react';

const Header = () => {
    return (
       <div className="flex flex-col md:flex-row mb-10 max-w-7xl mx-auto items-center justify-center bg-gradient-to-r from-[#8b22ff] to-[#9c33ff] py-10 px-6 rounded-xl text-white">
  
  {/* Active Users */}
  <div className="text-center px-12 mt-7">
    <h2 className="text-5xl font-bold mb-1">50K+</h2>
    <p className="text-purple-100 text-sm font-medium">Active Users</p>
  </div>

  {/* Divider 1 */}
  <div className="hidden md:block w-[1px] h-12 bg-white/30" />

  {/* Premium Tools */}
  <div className="text-center px-12 py-6 md:py-0">
    <h2 className="text-5xl font-bold mb-1">200+</h2>
    <p className="text-purple-100 text-sm font-medium">Premium Tools</p>
  </div>

  {/* Divider 2 */}
  <div className="hidden md:block w-[1px] h-12 bg-white/30" />

  {/* Rating */}
  <div className="text-center px-12">
    <h2 className="text-5xl font-bold mb-1">4.9</h2>
    <p className="text-purple-100 text-sm font-medium">Rating</p>
  </div>

</div>
    );
};

export default Header;