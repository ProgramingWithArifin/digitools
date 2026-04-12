import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import { useState } from 'react'
const dataFetch =async()=>{
  const res = await fetch('./product.json');
  return res.json()  
}
const dataPromise = dataFetch();
function App() {
  const [cart, updateCart]=useState([]);
  return (
    <>
      <Navbar cart={cart}></Navbar>

      <Banner></Banner>
      <Stats></Stats>
      <Products dataPromise={dataPromise} cart={cart} updateCart={updateCart}></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
