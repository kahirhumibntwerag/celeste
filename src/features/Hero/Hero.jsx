import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import hero1 from '../../assets/hero1.webp'
import hero2 from '../../assets/hero2.webp'

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden h-[600px] sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[700px] fade-in-zoom">
      <img
        className="w-full h-full object-cover hidden sm:block object-center"
        loading="lazy"
        src={hero1}
        alt="celeste logo"
      />
      <img
        className="w-full h-full object-cover sm:hidden object-center fade-in-zoom"
        loading="lazy"
        src={hero2}
        alt="celeste logo"
      />
      <div className="absolute top-[60%] left-[50%] translate-[-50%]">
        <CustomButton
          text="Explore Collection"
          to="/about"
          animated={true}
          variant="primary"
          size="md"
        />
      </div>
    </div>
  );
};

export default Hero;
