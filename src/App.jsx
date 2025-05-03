import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { ProductContext } from './contexts/context'

// Lazy load components
const Navbar = lazy(() => import('./features/Navbar/Navbar'))
const Promobar = lazy(() => import('./features/Promobar/Promobar'))
const Footer = lazy(() => import('./features/Footer/Footer'))

function App() {
  const product = {
    color: 'black',
    size: 'S'
  }

  return (
    <>
      <ProductContext.Provider value={product}>
        <Suspense fallback={<div className='bg-white h-[1000px] w-[1000px]'></div>}>
          <Promobar />
          <Navbar />
          <Outlet />
          <Footer />
        </Suspense>
      </ProductContext.Provider>
    </>
  )
}

export default App