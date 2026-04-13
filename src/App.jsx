import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import { useState } from 'react'
const dataFetch = async () => {
  const res = await fetch('./product.json');
  return res.json()
}
const dataPromise = dataFetch();
function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const updateCart = (product) => {
    const exists = cart.some(item => item.id === product.id);
    if (exists) {
      return;
    } else {
      const temp = [...cart, product];
      setCart(temp)
    }
  }
  const removeCart=(id)=>{
    const temp= cart.filter(iteam=>iteam.id!==id);
    setCart(temp)
  }
  const [tab, updateTab] = useState(true);
  return (
    <>
      <Navbar cart={cart} updateTab={updateTab}></Navbar>

      <Banner></Banner>
      <Stats></Stats>
      <Products removeCart={removeCart}  total={total}  setCart={setCart} dataPromise={dataPromise} cart={cart} updateCart={updateCart} tab={tab} updateTab={updateTab}></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
