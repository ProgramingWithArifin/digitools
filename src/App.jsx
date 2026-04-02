import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Steps from './components/Steps'

const dataFetch =async()=>{
  const res = await fetch('./product.json');
  return res.json()  
}
const dataPromise = dataFetch();
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Products dataPromise={dataPromise}></Products>
      <Steps></Steps>
    </>
  )
}

export default App
