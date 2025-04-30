import { useProductStore } from "../../store/productPageStore";
import VerticalSlider from "../Slider/VerticalSlider";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const ImageSlider = ({className}) => {

  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]);
  const productImages = product[0]?.images.map(obj=>obj.image)

  return (
    <div className={className}>
      {" "}
      <VerticalSlider images={productImages} />
    </div>
  );
};

export default ImageSlider;
