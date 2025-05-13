import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import BlurImage from "../../components/BlurImage";
import hero1 from '../../assets/hero1.webp'
import hero2 from '../../assets/hero2.webp'
import { motion } from "motion/react";
const Hero = () => {
  return (
    <motion.div
    initial={{x:-5,opacity:0}}
    animate={{x: 0, opacity:1}}
    transition={{duration:1}}
     className="relative w-full overflow-hidden h-[600px] sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[700px] ">
      <BlurImage
        src={hero1}
        alt="celeste logo"
        className="w-full h-full hidden sm:block"
      />
      <BlurImage
        src={hero2}
        alt="celeste logo"
        className="w-full h-full sm:hidden mt-20"
      />
      <div className="absolute top-[60%] left-[50%] translate-[-50%]">
        <CustomButton
          text="Explore Collection"
          to="/collections/all"
          animated={true}
          variant="primary"
          size="md"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
