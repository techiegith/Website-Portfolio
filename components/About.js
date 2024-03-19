import React from "react";

// countup
import Countup from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto items-center">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cover bg-no-repeat bg-center rounded-lg h-[470px] mix-blend-lighten"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h3 text-accent">About me</h2>
            <p className="mb-4 text-[15px]">
              Hi I am shruti kumari passionate Coder, dedicated individual with
              a strong background in Information Technology, particularly in
              Java development. My journey in the field has equipped me with a
              diverse skill set, ranging from full-stack web development to
              graphic design. With a keen eye for detail and a drive for
              continuous learning, I strive to create impactful solutions that
              address real-world challenges. My expertise in Java programming
              enables me to tackle complex problems efficiently and deliver
              high-quality software solutions.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12  ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <Countup start={0} end={5} duration={3} /> : null}+
                </div>
                <div className="font-priamry text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <Countup start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className="font-priamry text-sm tracking-[2px]">
                  Canva's <br />
                  Posters
                </div>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
