import React from "react";
import Hero from '../Hero/Hero'
import CategorySlider from '../Infiniteslider/CategorySlider'
import PromotionalHero from '../PromotionalHero/PromotionalHero'
import Slider from '../Slider/Slider'
import TextSlider from '../Infiniteslider/textSlider'
import Categories from '../Categories/Categories'

import VideoHero from '../VideoHero/VideoHero'
import Collection from '../Collection/Collection'
import BestsellerSlider from '../BestsellerSlider/BestsellerSlider'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <CategorySlider />
      <PromotionalHero />
      <Slider />
      <Categories />
      <TextSlider />
      <VideoHero />
      <Collection />
      <BestsellerSlider />
      <Services />
      {/* <TransitionDemo/> */}
      {/* <SingleImageSlider/>  */}
      {/* <TextSlider/>  */}
    </>
  );
};

export default Home;
