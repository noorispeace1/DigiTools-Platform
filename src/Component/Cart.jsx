import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cardata, setcarddata }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // 1. Individual Item Remove Logic
  const removeFromCart = (id) => {
    setcarddata(prev => prev.filter(item => item.id !== id));
    toast.error("Remove Success", {
      position: "top-right",
      autoClose: 1200,
      theme: "colored",
      hideProgressBar: true,
    });
  };

  // 2. Total Calculation (Buy now te click korle auto quantity count hobe)
  const total = cardata.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  // 3. Checkout handler
  const handleCheckout = () => {
    if (cardata.length === 0) return;
    
    toast.success("Order Placed Successfully! 🎉", {
      position: "top-center",
      autoClose: 2000,
    });

    setIsOrderPlaced(true);
    
    // Order successful hole data reset
    setTimeout(() => {
      setcarddata([]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 flex flex-col items-center font-sans">
      <ToastContainer limit={3} />

      {/* Dynamic Cart Count - Buy now e click korle eita barbe */}
      <div className="mb-10">
        <div className="px-10 py-3 bg-[#7C3AED] text-white rounded-full font-bold shadow-lg shadow-purple-200 text-lg">
          Cart ({cardata.reduce((sum, item) => sum + (item.quantity || 1), 0)})
        </div>
      </div>

      {!isOrderPlaced ? (
        <div className="w-full max-w-xl">
          {/* Main Card with Cyan Border */}
          <div className="border-2 border-cyan-300 rounded-[45px] p-10 bg-white shadow-sm relative">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h2>

            {cardata.length === 0 ? (
              <div className="text-center py-16 text-gray-400 text-xl font-medium font-sans">
                No items in cart!
              </div>
            ) : (
              <div className="space-y-6">
                {cardata.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-6 bg-[#F8F9FA] rounded-[30px] border border-gray-50 transition-all"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-4xl bg-white p-3 rounded-2xl shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
                        <p className="text-gray-500 font-medium">
                          ${item.price} {item.quantity > 1 ? `x ${item.quantity}` : ''}
                        </p>
                      </div>
                    </div>
                    
                    {/* Remove click korle list theke chole jabe */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#FF6B6B] hover:text-red-700 font-semibold text-sm transition-all px-4 py-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="flex justify-between items-end pt-8 mt-4 border-t border-gray-50">
                  <span className="text-gray-300 text-lg font-bold font-sans">Total:</span>
                  <span className="text-5xl font-black text-gray-900">${total}</span>
                </div>

                {/* Checkout click korle card hariye jabe */}
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-6 rounded-full text-xl mt-8 transition-all active:scale-95 shadow-xl shadow-purple-100"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center mt-20 animate-pulse">
          <h2 className="text-3xl font-bold text-purple-600 font-sans">Checkout Done! 🚀</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;