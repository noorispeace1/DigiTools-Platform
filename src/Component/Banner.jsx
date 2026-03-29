import React from 'react';

const WorkflowCTA = () => {
  return (
    <section className="relative w-full py-20 px-6 mt-12 flex flex-col items-center justify-center bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white text-center font-sans overflow-hidden">
      
      {/* Container */}
      <div className="max-w-4xl w-full z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <div className="relative inline-block mb-8">
          <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br />
            Start your free trial today.
          </p>
          
          {/* Pink Badge/Tag (The "40" in your image) */}
          <span className="absolute -right-12 top-0 bg-pink-400 text-white text-xs font-bold py-1 px-3 rounded-md shadow-lg hidden md:block">
            40
          </span>
        </div>

        {/* Decorative Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mb-10 flex justify-center items-center">
            <div className="w-8 h-[2px] bg-white/40"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-md w-full sm:w-auto">
            Explore Products
          </button>
          
          <button className="border border-white/60 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        {/* Footer info */}
        <div className="text-xs md:text-sm text-white/70 flex flex-wrap justify-center gap-2 items-center">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>

    </section>
  );
};

export default WorkflowCTA;