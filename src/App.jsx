import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cardata, setcarddata }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

 
  const removeFromCart = (id, itemName) => {
    setcarddata(prev => prev.filter(item => item.id !== id));
    
  
    toast.error(`${itemName} removed from cart!`, {
      position: "bottom-right",
      autoClose: 1500,
      theme: "colored",
      hideProgressBar: true,
    });
  };

  const total = cardata.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handleCheckout = () => {
    if (cardata.length === 0) return;
    toast.success("Order Placed Successfully! 🎉", { position: "top-center" });
    setIsOrderPlaced(true);
    setTimeout(() => {
      setcarddata([]);
      setIsOrderPlaced(false);
    }, 3000);
  };

  if (isOrderPlaced) return (
    <div className="text-center py-40">
      <h2 className="text-5xl font-black text-purple-600 animate-bounce">ORDER CONFIRMED! 🚀</h2>
      <p className="text-gray-500 mt-5 italic">Clearing your cart...</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-[45px] border-2 border-cyan-300 p-10 shadow-2xl">
        <h2 className="text-3xl font-black mb-10 text-gray-800">Your Cart</h2>
        
        {cardata.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-xl font-medium">Your cart is empty!</div>
        ) : (
          <div className="space-y-6">
            {cardata.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-[30px] border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-6">
                  <span className="text-4xl bg-white p-3 rounded-2xl shadow-sm">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-xl">{item.name}</h4>
                    <p className="text-purple-600 font-semibold">${item.price} x {item.quantity || 1}</p>
                  </div>
                </div>
                
                {/* Remove Button with Toast Trigger */}
                <button 
                  onClick={() => removeFromCart(item.id, item.name)}
                  className="text-red-500 font-bold hover:bg-red-50 px-5 py-2 rounded-full transition-all border border-transparent hover:border-red-200"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center pt-10 border-t border-gray-100">
              <span className="text-gray-400 text-xl font-bold">Total Amount:</span>
              <span className="text-5xl font-black text-gray-900">${total}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-[#7C3AED] text-white font-bold py-6 rounded-full text-2xl mt-8 hover:bg-[#6D28D9] transition-all shadow-xl shadow-purple-100 active:scale-95"
            >
              Confirm Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;