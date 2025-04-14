import { useProductStore } from '../../store/productPageStore';
import VerticalSlider from '../Slider/VerticalSlider';

const ImageSlider = () => {
    const getAllProductImages = useProductStore(state => state.getAllProductImages);
    const productImages = [...getAllProductImages(), ...getAllProductImages()];

    return (
        <VerticalSlider images={productImages} />    
    );
};

export default ImageSlider;