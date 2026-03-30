import React, { use, useState } from 'react';

const Card = ({ modelPromise, cardata, setcarddata }) => {
  const models = use(modelPromise);

  
  const [buttonStates, setButtonStates] = useState({});

  const handleBuy = (model) => {
    const modelId = model.id;

    // Toggle button text only for the clicked card
    setButtonStates((prev) => ({
      ...prev,
      [modelId]: prev[modelId] === 'Buy' ? 'Buy Now' : 'Buy'
    }));

    // Add to cart or increase quantity
    setcarddata((prevCart) => {
      const existing = prevCart.find((item) => item.id === modelId);

      if (existing) {
        // Already exists → increase quantity
        return prevCart.map((item) =>
          item.id === modelId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // New item → add with quantity 1
        return [...prevCart, { ...model, quantity: 1 }];
      }
    });
  };

  const getButtonText = (modelId) => {
    return buttonStates[modelId] || 'Buy Now';
  };

  const getTagStyle = (tagType) => {
    switch (tagType?.toLowerCase()) {
      case 'best seller':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'popular':
        return 'bg-purple-100 text-purple-700 border border-purple-200';
      case 'new':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      default:
        return 'hidden';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Premium Models
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools designed to boost your productivity and creativity
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => {
            const buttonText = getButtonText(model.id);

            return (
              <div
                key={model.id}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className="p-8">
                  {/* Icon + Tag */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-20 h-20 flex items-center justify-center text-6xl bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl transition-transform duration-300 group-hover:scale-110">
                      {model.icon}
                    </div>

                    {model.tag && (
                      <span
                        className={`px-5 py-2 text-xs font-semibold rounded-full ${getTagStyle(model.tagType)}`}
                      >
                        {model.tag}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {model.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[15.5px] leading-relaxed mb-8 min-h-[88px]">
                    {model.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      ${model.price}
                    </span>
                    <span className="text-gray-500 text-lg ml-1">
                      {model.period === 'monthly' ? '/Mo' : '/One-Time'}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {model.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1 text-lg">✔</span>
                        <span className="text-gray-700 text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Button */}
                  <button
                    onClick={() => handleBuy(model)}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-lg shadow-purple-500/30"
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;