import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const Hero = () => {
  return (
    <div className="relative w-[100%]">
      <img
        className="w-[100%] object-cover hidden sm:block object-center fade-in-zoom"
        loading="lazy"
        src="https://mlameh.com/cdn/shop/files/WEB-DESK-eid_0811f6c4-1053-49b7-bead-61210a66ae2c.jpg?v=1743248027"
        alt="celeste logo"
      />
      <img
        className="w-[100%] object-cover sm:hidden object-center fade-in-zoom"
        loading="lazy"
        src="https://mlameh.com/cdn/shop/files/WEB--PHONE-eid_88af04c7-56ed-4227-b053-64cc74dceae1.jpg?v=1743248020&width=750"
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
