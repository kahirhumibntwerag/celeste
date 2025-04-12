import Navbar from './features/Navbar/Navbar'
import Promobar from './features/Promobar/Promobar'
import Test from './features/Test/Test'

import {Outlet} from 'react-router-dom'
import { ProductContext } from './contexts/context'
import Footer from './features/Footer/Footer'


function App() {
  const product ={
    color: 'black',
    size: 'S'
  }

  return (
    <>
    <ProductContext.Provider value={product}>
      <Promobar/>
      <Navbar/>
      <Outlet/>
      <Test/>
      <Footer />
      
    </ProductContext.Provider>
  </>
  )
}

export default App