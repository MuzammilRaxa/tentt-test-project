import { motion } from "framer-motion";
import styles from "../../../styles";
import { TypingText } from "../../utils/TypingText";
import { fadeIn, staggerContainer } from "../../utils/motion";
import ProductSlider from "./ProductSlider";

const About = () => (
  <section className={`${styles.paddings} justify-center relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
    >
      <TypingText
        title="Quality Producs"
        textStyles="text-center  !text-[56px] !leading-normal "
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] max-w-3xl font-normal sm:text-2xl leading-7 text-center text-secondary-white mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </motion.p>
    </motion.div>
    <ProductSlider />   
  </section>
);

export default About;
