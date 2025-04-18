import React from "react";
import { useParams } from "react-router-dom";
import ResizableImage from "../ProductDisplay/ResizableImage";
import { useProductStore } from "../../store/productPageStore";
import SizeBar from "../ProductDisplay/SizeBar";
import Layout from "../ProductDisplay/Layout";
import ImagesWithColors from "../ProductDisplay/ImagesWithColors";
import AddToCartButton from "../ProductDisplay/AddToCartButton";
import BuyItNowButton from "../ProductDisplay/BuyItNowButton";
import Title from "../ProductDisplay/Title";
import Price from "../ProductDisplay/Price";
import Description from "../ProductDisplay/Description";
import MainImage from "../ProductDisplay/MainImage";
import QuantityBar from "../ProductDisplay/QuantityBar";
import Stock from "../ProductDisplay/Stock";
import Slider from "../Slider/Slider";
import ImageSlider from "../ProductDisplay/ImageSlider";
const ProductPage = () => {
  const { productId } = useParams();
  return (
    <>
      <Layout className="mx-auto px-4 lg:px-16 mt-8 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-8 border-b border-gray-400">
          {/* <ImageSlider className='sticky top-0 h-fit' /> */}
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
      <Slider />
    </>
  );
};

export default ProductPage;
