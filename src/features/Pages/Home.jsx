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

import { AnimatePresence, motion } from "motion/react";

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

// Skeleton components
const CategorySliderSkeleton = () => (
  <div className="w-full py-8 animate-pulse">
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg" />
      ))}
    </div>
  </div>
);

const PromotionalHeroSkeleton = () => (
  <div className="flex md:flex-row flex-col w-full mt-5 animate-pulse">
    <div className="flex-1 m-10">
      <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg" />
    </div>
    <div className="flex-1 m-10">
      <div className="flex flex-col gap-4 justify-center h-full">
        <div className="h-12 w-3/4 bg-gray-200 rounded mx-auto" />
        <div className="h-12 w-40 bg-gray-200 rounded-full mx-auto" />
      </div>
    </div>
  </div>
);

const SliderSkeleton = () => (
  <div className="w-full py-8 animate-pulse">
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex-shrink-0 w-72 aspect-[3/4] bg-gray-200 rounded-lg" />
      ))}
    </div>
  </div>
);

const CategoriesSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="aspect-square bg-gray-200 rounded-lg" />
    ))}
  </div>
);

const CollectionSkeleton = () => (
  <div className="mx-auto mt-32 animate-pulse">
    <div className="flex flex-col items-start justify-center mx-8 gap-4">
      <div className="h-6 w-48 bg-gray-200 rounded" />
      <div className="h-8 w-96 bg-gray-200 rounded" />
    </div>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex-1 m-8">
        <div className="aspect-[4/3] bg-gray-200 rounded-lg" />
      </div>
      <div className="flex flex-col flex-1 m-8 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-16 bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  </div>
);

const ServicesSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full" />
        <div className="h-4 w-32 bg-gray-200 rounded" />
        <div className="h-3 w-24 bg-gray-200 rounded" />
      </div>
    ))}
  </div>
);

const Home = () => {
  // const product = {
  //   title: "Stylish Jacket",
  //   price: "$120",
  //   mainImage:
  //     "//mlameh.com/cdn/shop/files/S5450_1.jpg?v=1743931469&width=1500",
  //   hoverImage:
  //     "//mlameh.com/cdn/shop/files/S5450_6.jpg?v=1743931469&width=1500",
  //   colors: [{ name: "red" }, { name: "blue" }, { name: "green" }],
  // };

  return (
    <>
      {" "}
      <Hero />
      {/* <Binary >
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
      </Binary> */}
      <Suspense fallback={<CategorySliderSkeleton />}>
        <CategorySlider />
      </Suspense>
      
      <Suspense fallback={<PromotionalHeroSkeleton />}>
        <PromotionalHero />
      </Suspense>
      
      <Suspense fallback={<SliderSkeleton />}>
        <Slider category={"ramadan-new"} />
      </Suspense>
      
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
      
      <Suspense fallback={<SliderSkeleton />}>
        <TextSlider />
      </Suspense>
      
      <Suspense fallback={<div className="w-full aspect-video bg-gray-200" />}>
        <VideoHero />
      </Suspense>
      
      <Suspense fallback={<CollectionSkeleton />}>
        <Collection />
      </Suspense>
      
      <Suspense fallback={<SliderSkeleton />}>
        <Slider category={"abaya"} />
      </Suspense>
      
      <Suspense fallback={<ServicesSkeleton />}>
        <Services />
      </Suspense>
      <Footer />
      {/* <ProductCard product={product} /> */}
    </>
  );
};

export default Home;
