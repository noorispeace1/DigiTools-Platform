

import './App.css'
import Banner from './Component/Banner'
import Card from './Component/Card'
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


  return (
    <>
<NavBar  />
<Banner></Banner>

<Card modelPromise={modelPromise}  />
<PriceList></PriceList>

<Section></Section>

<Header></Header>
<Footer></Footer>

    </>
  )
}

export default App
