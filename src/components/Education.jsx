import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIncon from './LiIncon';
import { education } from '@/data/about';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 sm:text-4xl">
        Образование
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          ref={ref}
          className="absolute left-7 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
          {education.map((edu) => (
            <Details
              key={edu.time}
              type={edu.type}
              time={edu.time}
              place={edu.place}
              info={edu.info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
