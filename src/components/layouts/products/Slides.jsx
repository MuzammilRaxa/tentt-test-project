import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Slides = ({ image, index }) => {
  return (
    <div>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`relative min-w-[220px] xs:min-w-[270px] lg:min-w-[370px] h-[350px] sm:h-[550px] lg:h-[650px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      >
        <img
          src={image}
          alt="Image"
          key={index}
          className="w-full h-full rounded-2xl pointer-events-none"
        />
      </motion.div>
    </div>
  );
};

export default Slides;
