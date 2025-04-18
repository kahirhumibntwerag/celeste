import { useProductStore } from "../../store/productPageStore";
import VerticalSlider from "../Slider/VerticalSlider";

const ImageSlider = ({className}) => {
  const getAllProductImages = useProductStore(
    (state) => state.getAllProductImages
  );
  const productImages = [...getAllProductImages(), ...getAllProductImages()];

  return (
    <div className={className}>
      {" "}
      <VerticalSlider images={productImages} />
    </div>
  );
};

export default ImageSlider;
