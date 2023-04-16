import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Slides = ({ image, index }) => {
  return (
    <div>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`relative  min-w-[370px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
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
