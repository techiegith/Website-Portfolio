import React from "react";
// motion

import { motion } from "framer-motion";

import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
// variant

import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-3xl uppercase text-accent font-medium mb-2 tracking-wide">
                Let's Connect
              </h4>
              <p className="text-[10px] lg:text-[23px] leading-none mb-12">
                {/* {/* I'm currently looking for new opportunities, */}
                To get in touch with me,please reach out:
                <br /> Email--Id, LinkedIn.
              </p>
              <div className="inline-flex text-gray-500 gap-4 text-3xl">
                <FaGithubSquare />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitterSquare />
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent trasition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent trasition-all"
              type="text"
              placeholder="Your Email"
            />

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent trasition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-lg"> Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
