import Navbar from './features/Navbar/Navbar'
import Hero from './features/Hero/Hero'
import Promobar from './features/Promobar/Promobar'

import ApiList from './features/ApiList/ApiList'

import {Outlet} from 'react-router-dom'
import { ProductContext } from './contexts/context'
import Auth from './features/Auth/Auth'
import CategorySlider from './features/Infiniteslider/CategorySlider'
import PromotionalHero from './features/PromotionalHero/PromotionalHero'
import Slider from './features/Slider/Slider'
import Product from './features/Product/Product'
import TextSlider from './features/Infiniteslider/textSlider'
import Categories from './features/Categories/Categories'
import SingleImageSlider from './features/singleImageSlider/SingleImageSlider'
import TransitionDemo from './features/Test/Test'
import VideoHero from './features/VideoHero/VideoHero'
import Collection from './features/Collection/Collection'
import BestsellerSlider from './features/BestsellerSlider/BestsellerSlider'
import Services from './features/Services/Services'
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
      <Hero/>
      <CategorySlider/>
      <PromotionalHero/>
      <Slider/>
      <Categories/>
      <TextSlider/>
      <VideoHero/>
      <Collection/>
      <BestsellerSlider/>
      <Services/>
      <Footer/>
      {/* <TransitionDemo/> */}
      {/* <SingleImageSlider/>  */}
      {/* <TextSlider/>  */}
    </ProductContext.Provider>
  </>
  )
}

export default App