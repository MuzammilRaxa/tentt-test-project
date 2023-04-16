import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../../../constants/ProductSlides";
import { fadeIn } from "../../utils/motion";

const ProductSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  console.log(images, "Slidess-->");
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div className="py-20 px-12">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          >
            {images.map((image, index) => {
              return (
                <motion.div className="min-h-[40rem] min-w-[30rem] p-10 ">
                  <img
                    src={image}
                    alt="Image"
                    key={index}
                    className="w-full h-full rounded-2xl pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSlider;
