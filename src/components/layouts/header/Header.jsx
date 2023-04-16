import { useState } from "react";
import NavBar from "./NavBar";
import { IMAGE_URLS } from "../../../constants/HeroSection";
import { TitleText, TypingText } from "../../utils/TypingText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import styles from "../../../styles";

function Header() {
  const [imageIndex, setImageIndex] = useState(0);

  function handleButtonClick() {
    const nextIndex = (imageIndex + 1) % IMAGE_URLS.length;
    setImageIndex(nextIndex);
  }

  return (
    <section className="mx-auto relative h-screen md:min-h-[920px] mb-20">
      <div
        className="bg-gray-900 bg-cover bg-center w-full h-[900px] absolute inset-0 transition-transform ease-in-out"
        style={{ backgroundImage: `url(${IMAGE_URLS[imageIndex].url})` }}
      />
      <section className="absolute p-5 w-full">
        <NavBar />
      </section>
      <div
        className="border border-white absolute bottom-[88px] left-32  cursor-pointer flex justify-center items-center"
        style={{ width: "8rem", height: "8rem" }}
        onClick={handleButtonClick}
      >
        <div className="relative w-24 h-24 mx-auto my-auto">
          <div
            className="progress-bar absolute top-0 left-0 w-full h-full rounded-md"
            style={{
              backgroundImage: `linear-gradient(to right, #1a202c, transparent)`,
            }}
          />
          <div
            className="bg-gray-900 bg-cover bg-center w-full h-full absolute inset-0"
            style={{
              backgroundImage: `url(${
                IMAGE_URLS[(imageIndex + 1) % IMAGE_URLS.length].url
              })`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Next
          </div>
        </div>
        <div className="absolute text-white flex w-[174px] justify-between items-center left-48">
          <p>0{imageIndex + 1}</p>
          <div className="w-[103px] border-t border-white"></div>
          <p>0{IMAGE_URLS.length}</p>
        </div>
      </div>
      <div className="absolute top-1/3 text-white max-w-xl left-32">
        <section className={`relative z-10`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex-[0.95] flex justify-center flex-col"
            >
              <TypingText title={IMAGE_URLS[imageIndex].title} />
              <TitleText title={IMAGE_URLS[imageIndex].text} />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}

export default Header;
