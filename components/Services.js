import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Education",
    description:
      "Graduation: United College of Engineering and Research, High school: Gyan bharti public school, Gaya Bihar",
    link: "#",
  },
  {
    name: "Skills",
    description:
      "C++, JavaScript, HTML, CSS, Java, Tailwind CSS, Spring Boot, PostgreSQL, Docker",
    link: "#",
  },
  {
    name: "Achievement",
    description:
      "Solved over 200+ DSA questions on platforms like LeetCode and Code Studio, Produced 100+ captivating designs utilizing design principles.",
    link: "#",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="min-h-[85vh] lg:min-h-[108vh] flex items-center"
      id="services"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-x-6"
        >
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0 h-auto">
            <h2 className="h2 mb-2">What I Do.</h2>
            <button className="btn btn-sm">See my work</button>
          </div>
          <div className="flex-1">
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href={link}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className="text-gradient text-sm">
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

// const Services = () => {
//   return (
//     <section className="section" id="services">
//       Services
//     </section>
//   );
// };

// export default Services;
