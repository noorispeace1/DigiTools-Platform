import React, { use, useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ modelPromise, cardata, setcarddata }) => {
  const models = use(modelPromise);
  const [buttonStates, setButtonStates] = useState({});

  const handleBuy = (model) => {
    const modelId = model.id;

    // ১. ক্লিক করার সাথে সাথে টোস্ট কনফার্মেশন দেখাবে
    toast.success(`${model.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    // ২. বাটনের টেক্সট সাময়িকভাবে পরিবর্তন
    setButtonStates((prev) => ({
      ...prev,
      [modelId]: 'Added ✅' 
    }));
    
    setTimeout(() => {
      setButtonStates((prev) => ({ ...prev, [modelId]: 'Buy Now' }));
    }, 1000);

    // ৩. কার্টে ডাটা যোগ করার লজিক
    setcarddata((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === modelId);

      if (existingItem) {
        // আইটেম থাকলে কোয়ান্টিটি ১ বাড়বে
        return prevCart.map((item) =>
          item.id === modelId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        // নতুন আইটেম হলে ১ কোয়ান্টিটিসহ যোগ হবে
        return [...prevCart, { ...model, quantity: 1 }];
      }
    });
  };

  const getTagStyle = (tagType) => {
    switch (tagType?.toLowerCase()) {
      case 'best seller': return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'popular': return 'bg-purple-100 text-purple-700 border border-purple-200';
      case 'new': return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      default: return 'hidden';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Premium Models
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-20 h-20 flex items-center justify-center text-6xl bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl group-hover:scale-110 transition-transform">
                    {model.icon}
                  </div>
                  {model.tag && (
                    <span className={`px-5 py-2 text-xs font-semibold rounded-full ${getTagStyle(model.tagType)}`}>
                      {model.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{model.name}</h3>
                <p className="text-gray-600 mb-8 min-h-[88px]">{model.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">${model.price}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {model.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✔</span>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuy(model)}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold py-4 rounded-2xl text-lg active:scale-95 transition-all shadow-lg shadow-purple-500/30"
                >
                  {buttonStates[model.id] || 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;