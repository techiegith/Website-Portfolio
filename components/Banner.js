import React from "react";

// images
import Image from "../assets/Image.png";

// icons

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// type animation

import { TypeAnimation } from "react-type-animation";
// motion
//motion.component is used to add animations !
//initial is to add initial state
// initial={{ opacity: 0, scale: 0.5 }}
//animate is to add the final state
// animate={{ opacity: 1, scale: 1 }}
//Transition makes it cool
// transition={{ duration: 0.5 }}
// className="col-span-4 place-self-center mt-4 lg:mt-0"

import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Hello<span> ,I&apos;m {""}</span>
            </motion.h1>
            {/* <div> */}
            {/* <span>I am a </span> */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-[34px] lg:text-[50px] font-secondary font-semibold  leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Shruti Kumari!",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Frontend Developer",
                  1000,
                  "Java Developer",
                  1000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hello, I am Shruti Kumari, a passionate Java and Enthusiastic
              Frontend Developer, I thrive on crafting innovation solutions
              through coding and design ,and also want to create impactful and
              innovative solutions in the field of technology through my skills.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <a href="https://drive.google.com/file/d/1HMpiucS_Va9l9uATRgKJv9qXc5dQ-Qs9/view?usp=drivesdk">
                  Download CV
                </a>
              </button>

              <a href="#" className="text-gradient btn-link">
                Contact Me
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/shrutiln07">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/ShrutiK0707?t=n7EG0RNCoDJefoksZV9TsQ&s=09">
                <FaTwitter />
              </a>
              <a href="https://github.com/techiegith?tab=repositories">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="mx-auto lg:flex flex-1 max-w-[320px] lg:max-w-[380px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
