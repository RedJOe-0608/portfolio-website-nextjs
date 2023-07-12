import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 w-[70%] mx-auto first:mt-0 last:mb-0 flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl  sm:text-xl xs:text-lg ">
          {type}&nbsp;
        </h3>
        <span className="capitalize xs:text-sm font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32 ">
      <AnimatedText
        text="Education"
        className="py-16 md:text-6xl xs:text-4xl md:mb-16"
      />
      <div className="w-[75%] lg:w-[90%] md:w-full  mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 w-[4px] h-full top-0 bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="flex flex-col items-center xs:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            place="Massachusetts Institute Of Technology (MIT)"
            time="2016-2020"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            place="Massachusetts Institute Of Technology (MIT)"
            time="2016-2020"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            place="Massachusetts Institute Of Technology (MIT)"
            time="2016-2020"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
