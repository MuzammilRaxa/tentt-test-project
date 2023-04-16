import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../../../constants/ProductSlides";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Slides from "./Slides";

const ProductSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  console.log(images, "Slidess-->");
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div className="py-20 px-5 lg:px-20 flex lg:max-w-7">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mx-auto"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex  space-x-5"
            >
              {images.map((slide, index) => {
                return <Slides image={slide} index={index} />;
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSlider;
