import React, { useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useImageColorStore } from "../../store/productPageStore";
import { getProductsById } from "../Filters/hooks/getProductsById.js";
import Layout from "../ProductDisplay/Layout";
import ImagesWithColors from "../ProductDisplay/ImagesWithColors";
import Footer from "../Footer/Footer.jsx";
import { motion } from "motion/react";
import { StateTrigger } from "../../components/Muti.jsx";

const ResizableImage = React.lazy(() =>
  import("../ProductDisplay/ResizableImage")
);
const SizeBar = React.lazy(() => import("../ProductDisplay/SizeBar"));
const AddToCartButton = React.lazy(() =>
  import("../ProductDisplay/AddToCartButton")
);
const BuyItNowButton = React.lazy(() =>
  import("../ProductDisplay/BuyItNowButton")
);
const Title = React.lazy(() => import("../ProductDisplay/Title"));
const Price = React.lazy(() => import("../ProductDisplay/Price"));
const Description = React.lazy(() => import("../ProductDisplay/Description"));
const MainImage = React.lazy(() => import("../ProductDisplay/MainImage"));
const QuantityBar = React.lazy(() => import("../ProductDisplay/QuantityBar"));
const Stock = React.lazy(() => import("../ProductDisplay/Stock"));
const Slider = React.lazy(() => import("../Slider/Slider"));
const ImageSlider = React.lazy(() => import("../ProductDisplay/ImageSlider"));

// Skeleton components
const ImageSliderSkeleton = () => (
  <div className="hidden lg:flex flex-col gap-4 animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i} className="w-full aspect-[3/4] bg-gray-200 rounded-lg" />
    ))}
  </div>
);

const MainImageSkeleton = () => (
  <div className="w-full mt-16 lg:w-2/5 aspect-[2/3] bg-gray-200 rounded-lg animate-pulse" />
);

const TitlePriceSkeleton = () => (
  <div className="flex flex-col gap-4 animate-pulse">
    <div className="h-8 w-3/4 bg-gray-200 rounded" />
    <div className="h-6 w-1/4 bg-gray-200 rounded" />
  </div>
);

const DescriptionSkeleton = () => (
  <div className="flex flex-col gap-4 animate-pulse">
    <div className="h-4 w-full bg-gray-200 rounded" />
    <div className="h-4 w-3/4 bg-gray-200 rounded" />
    <div className="h-4 w-5/6 bg-gray-200 rounded" />
  </div>
);

const SizeBarSkeleton = () => (
  <div className="flex gap-4 animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="h-10 w-10 bg-gray-200 rounded-lg" />
    ))}
  </div>
);

const ButtonsSkeleton = () => (
  <div className="flex flex-col gap-4 animate-pulse">
    <div className="h-12 w-full bg-gray-200 rounded-full" />
    <div className="h-12 w-full bg-gray-200 rounded-full" />
  </div>
);

const SliderSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="aspect-[3/4] bg-gray-200 rounded-lg" />
    ))}
  </div>
);

const ProductPage = () => {
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  const setSelectedColor = useImageColorStore(
    (state) => state.setSelectedColor
  );
  const { productId } = useParams();
  const queryData = getProductsById(productId);

  const { data, isLoading, isError } = useQuery({
    queryKey: queryData.queryKey,
    queryFn: queryData.queryFn,
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setSelectedColor(data[0]?.colors[0]?.name);
    }
  }, [isLoading, isError, data]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId]);

  if (isLoading) return <div className="min-h-screen p-32"></div>;

  return (
    <>
      <Layout className="flex flex-col justify-between gap-16 mx-auto px-4 lg:px-16 mt-8 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-8 md:border-b md:border-gray-400">
          <Suspense
            fallback={
              <div className="flex gap-8">
                <ImageSliderSkeleton />
                <MainImageSkeleton />
              </div>
            }
          >
            <ImageSlider className="hidden lg:block sticky top-0 h-fit" />
            <MainImage className="w-full mt-16 lg:mt-0 lg:w-2/5 aspect-[2/3]" />
          </Suspense>

          <div className="w-full lg:w-2/5 h-[800px]">
            <div className="flex flex-col gap-8">
              <Suspense fallback={<TitlePriceSkeleton />}>
                <Title />
                <Price />
              </Suspense>

              <Suspense fallback={<DescriptionSkeleton />}>
                <Description />
                <Stock />
              </Suspense>

              <ImagesWithColors />

              <Suspense fallback={<SizeBarSkeleton />}>
                <SizeBar />
              </Suspense>

              <Suspense fallback={<ButtonsSkeleton />}>
                <div className="flex flex-col gap-4 w-full">
                  <QuantityBar />
                  <StateTrigger to="cart" asChild>
                    <motion.div onClick={(e) => {
                      e.preventDefault();
                      // Add your cart logic here
                    }}>
                      <AddToCartButton />
                    </motion.div>
                  </StateTrigger>
                  <BuyItNowButton />
                </div>
              </Suspense>
            </div>
          </div>
        </div>

        <Suspense fallback={<SliderSkeleton />}>
          <Slider category="abaya" />
        </Suspense>
      </Layout>
      <Footer />
    </>
  );
};

export default ProductPage;
