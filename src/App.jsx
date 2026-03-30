

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
const getModels = async () => {
  const res = await fetch("/Models.json");
  return res.json();
};







const modelPromise = getModels();


function App() {
const  [ActiveTab, setActiveTab] =useState("Product")
const [carts,setCarts]=useState([])
 const [cardata,setcarddata] = useState([])

console.log(Card);
  return (
    <>
<NavBar  />
<Banner></Banner>

{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-ful w-40" aria-label="Product" onClick={()=>setActiveTab("Product")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart"
  onClick={()=>setActiveTab("Cart")} />
  
</div>
{ActiveTab === 'Product' && <Card cardata={cardata}  setcarddata={setcarddata} modelPromise={modelPromise} carts={Card}setCarts={setCarts} />}
{ActiveTab === 'Cart' &&<Cart cardata={cardata} ></Cart>}
<PriceList></PriceList>

<Section></Section>


<Header></Header>
<Footer></Footer>

    </>
  )
}

export default App
