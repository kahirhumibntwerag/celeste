import React, { Suspense, useState } from "react";
import Hero from "../Hero/Hero";
import Sidbar from "../../components/Sidbar";
import {
  Card,
  ImageContainer,
  Image,
  Price,
  Color,
  ColorSelector,
  Title,
  ProductCard,
} from "../Test/Test";
import {
  Binary,
  BinaryClose,
  BinaryContent,
  BinaryTrigger,
} from "../../components/Binary";

// Lazy load other components
const CategorySlider = React.lazy(() =>
  import("../Infiniteslider/CategorySlider")
);
const PromotionalHero = React.lazy(() =>
  import("../PromotionalHero/PromotionalHero")
);
const Slider = React.lazy(() => import("../Slider/Slider"));
const TextSlider = React.lazy(() => import("../Infiniteslider/textSlider"));
const Categories = React.lazy(() => import("../Categories/Categories"));
const VideoHero = React.lazy(() => import("../VideoHero/VideoHero"));
const Collection = React.lazy(() => import("../Collection/Collection"));
const BestsellerSlider = React.lazy(() =>
  import("../BestsellerSlider/BestsellerSlider")
);
const Services = React.lazy(() => import("../Services/Services"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const Home = () => {
  const product = {
    title: "Stylish Jacket",
    price: "$120",
    mainImage:
      "//mlameh.com/cdn/shop/files/S5450_1.jpg?v=1743931469&width=1500",
    hoverImage:
      "//mlameh.com/cdn/shop/files/S5450_6.jpg?v=1743931469&width=1500",
    colors: [{ name: "red" }, { name: "blue" }, { name: "green" }],
  };

  return (
    <>
      {" "}
      <Hero />
      <Binary >
        <BinaryTrigger asChild>
          <button className="bg-amber-400">open</button>
        </BinaryTrigger>
        <BinaryClose asChild>
          <button className="bg-red-400">close</button>
        </BinaryClose>
        <BinaryContent>
          <div className="flex flex-col gap-2 absolute top-0 right-[-10%]">
            <div className="bg-black aspect-square p-32"></div>
            <div className="bg-black aspect-square p-32"></div>
            <div className="bg-black aspect-square p-32"></div>
            <div className="bg-black aspect-square p-32"></div>
          </div>
        </BinaryContent>
      </Binary>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySlider />
        <PromotionalHero />
        <Slider category={"ramadan-new"} />
        <Categories />
        <TextSlider />
        <VideoHero />
        <Collection />
        <Slider category={"abaya"} />
        <Services />
        <ProductCard product={product} />
      </Suspense>
      {/* <TransitionDemo/> */}
      {/* <SingleImageSlider/>  */}
      {/* <TextSlider/>  */}
    </>
  );
};

export default Home;
