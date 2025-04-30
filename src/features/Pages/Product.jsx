import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useImageColorStore } from "../../store/productPageStore";
import { getProductsById } from "../Filters/hooks/getProductsById.js";
import Layout from "../ProductDisplay/Layout";
import ImagesWithColors from "../ProductDisplay/ImagesWithColors";


// Lazy load components
const ResizableImage = React.lazy(() => import("../ProductDisplay/ResizableImage"));
const SizeBar = React.lazy(() => import("../ProductDisplay/SizeBar"));
const AddToCartButton = React.lazy(() => import("../ProductDisplay/AddToCartButton"));
const BuyItNowButton = React.lazy(() => import("../ProductDisplay/BuyItNowButton"));
const Title = React.lazy(() => import("../ProductDisplay/Title"));
const Price = React.lazy(() => import("../ProductDisplay/Price"));
const Description = React.lazy(() => import("../ProductDisplay/Description"));
const MainImage = React.lazy(() => import("../ProductDisplay/MainImage"));
const QuantityBar = React.lazy(() => import("../ProductDisplay/QuantityBar"));
const Stock = React.lazy(() => import("../ProductDisplay/Stock"));
const Slider = React.lazy(() => import("../Slider/Slider"));
const ImageSlider = React.lazy(() => import("../ProductDisplay/ImageSlider"));

const ProductPage = () => {
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  const setSelectedColor = useImageColorStore((state) => state.setSelectedColor);
  const { productId } = useParams();
  const queryData = getProductsById(productId);
  console.log(productId)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryData.queryKey,
    queryFn: queryData.queryFn,
    staleTime: 1000*60*60  });

    


  useEffect(() => {
    if (!isLoading && !isError && data) {
      setSelectedColor(data[0]?.colors[0]?.name);
    }
  }, [isLoading, isError, data]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [productId]);
  
  if (isLoading) return;


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout className="mx-auto px-4 lg:px-16 mt-8 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-8 border-b border-gray-400 ">
          <ImageSlider className='hidden lg:block sticky top-0 h-fit' /> 
          <MainImage className="w-full lg:w-2/5 aspect-[2/3]" />
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8 border-b-2 border-gray-400 pb-8">
                <Title />
                <Price />
              </div>
              <Description />
              <Stock />
              <div className="flex justify-between gap-4">
                <ImagesWithColors />
              </div>

              <div className="flex gap-4 justify-between">
                <SizeBar />
              </div>

              <div className="flex flex-col gap-4 w-full">
                <QuantityBar />
                <AddToCartButton />
                <BuyItNowButton />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Slider category={'abaya'} />
    </Suspense>
  );
};

export default ProductPage;
