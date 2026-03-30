import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Card from './Component/Card'
import Cart from './Component/Cart'
import Footer from './Component/Footer'
import Header from './Component/Header'
import NavBar from './Component/NavBar'
import PriceList from './Component/PriceList'
import Section from './Section'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getModels = async () => {
  const res = await fetch("/Models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [ActiveTab, setActiveTab] = useState("Product")
  const [cardata, setcarddata] = useState([])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast notifications Container */}
      <ToastContainer limit={3} />
      
      {/* NavBar-e cardata pass kora holo counter er jonno */}
      <NavBar cardata={cardata} />
      
      <Banner />

      {/* Navigation Tabs */}
      <div className="flex justify-center my-10">
        <div className="bg-white p-2 rounded-full shadow-md flex gap-2 border border-purple-100">
          <button 
            className={`px-10 py-2.5 rounded-full font-bold transition-all ${ActiveTab === 'Product' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
            onClick={() => setActiveTab("Product")}
          >
            Products
          </button>
          <button 
            className={`px-10 py-2.5 rounded-full font-bold transition-all ${ActiveTab === 'Cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
            onClick={() => setActiveTab("Cart")}
          >
            Cart ({cardata.length})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="pb-20">
        {ActiveTab === 'Product' ? (
          <>
            <Card cardata={cardata} setcarddata={setcarddata} modelPromise={modelPromise} />
            <PriceList />
            <Section />
          </>
        ) : (
          <Cart cardata={cardata} setcarddata={setcarddata} />
        )}
      </main>

      <Header />
      <Footer />
    </div>
  )
}fd

export default App