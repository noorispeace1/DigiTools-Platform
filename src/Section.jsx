import React from 'react';

const Section = () => {
    return (
      <section className="py-16 px-4 bg-white font-sans">
  <div className="max-w-6xl mx-auto text-center">
    {/* Header Section */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Get Started In 3 Steps</h2>
    <p className="text-gray-500 mb-12 text-sm">Start using premium digital tools in minutes, not hours.</p>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Step 1 */}
      <div className="relative p-10 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">01</span>
        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
        <p className="text-gray-400 text-sm leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
      </div>

      {/* Step 2 */}
      <div className="relative p-10 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">02</span>
        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Products</h3>
        <p className="text-gray-400 text-sm leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
      </div>

      {/* Step 3 */}
      <div className="relative p-10 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">03</span>
        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Start Creating</h3>
        <p className="text-gray-400 text-sm leading-relaxed">Download and start using your premium tools immediately.</p>
      </div>

    </div>
  </div>
</section>
    );
};

export default Section;