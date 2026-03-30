import React from 'react';

const PriceList = () => {
    return (
          <div className="bg-white min-h-screen py-16 px-4 mt-28">
    
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Simple, Transparent Pricing</h2>
        <p className="text-slate-400 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Starter Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col shadow-sm">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-800">Starter</h3>
            <p className="text-slate-400 text-xs mt-1">Perfect for getting started</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-slate-900">$0</span>
              <span className="text-slate-400 text-sm italic">/Month</span>
            </div>
          </div>
          <ul className="flex-1 space-y-3 mb-8">
            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600 text-[13px]">
                <span className="text-green-500 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-full bg-[#7C3AED] text-white text-sm font-semibold">
            Get Started Free
          </button>
        </div>

       
        <div className="relative bg-[#7C3AED] rounded-2xl p-8 flex flex-col shadow-xl text-white">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-purple-100 text-xs mt-1">Best for professionals</p>
            <div className="mt-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-purple-200 text-sm italic">/Month</span>
            </div>
          </div>
          <ul className="flex-1 space-y-3 mb-8">
            {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[13px]">
                <span className="text-white font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-full bg-white text-[#7C3AED] text-sm font-semibold">
            Start Pro Trial
          </button>
        </div>

     
        <div className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col shadow-sm">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-800">Enterprise</h3>
            <p className="text-slate-400 text-xs mt-1">For teams and businesses</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-slate-900">$99</span>
              <span className="text-slate-400 text-sm italic">/Month</span>
            </div>
          </div>
          <ul className="flex-1 space-y-3 mb-8">
            {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600 text-[13px]">
                <span className="text-green-500 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-full bg-[#7C3AED] text-white text-sm font-semibold">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};
    

export default PriceList;