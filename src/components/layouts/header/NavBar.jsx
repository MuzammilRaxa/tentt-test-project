import React, { useState } from "react";
import { Navbar } from "../../../constants/Navbar";
import MenuIcon from "./MenuIcon";
import styles from "../../../styles";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const NavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` relative`}
    >
      <div className="px-10 py-8 bg-white flex justify-between items-center">
        <div className="hidden md:block">
          <ul className="flex justify-between space-x-5 text-sm h-9 items-center">
            {Navbar.map((item, index) => (
              <li
                key={index}
                className="px-3 py-2 duration-100 cursor-pointer hover:font-medium hover:text-[#c0c0c0]"
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="w-max h-9 border border-gray-900 px-4 py-1 hover:cursor-pointer">
            Contact us
          </p>
        </div>

        <MenuIcon active={active} setActive={setActive} />

        <div
          className={`mobileMenu fixed top-0 right-0 z-40 flex flex-col items-start px-7 pt-24 md:px-10 md:hidden ${
            active ? "active" : ""
          }`}
          id="mobileMenu"
        >
          <ul className="w-full flex flex-col items-start space-y-5 text-xl mt-14">
            {Navbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className=" px-3 py-2 duration-300 cursor-pointer hover:text-lg hover:text-[#d1d1d1]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
