import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIncon from './LiIncon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
      <LiIncon referance={ref} />
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Образование
      </h2>

      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Цифровая трансформация, Бакалавр"
            time="2022-2026"
            place="Московский политехнический университет (МПУ)"
            info="Программа ориентирована на подготовку специалистов работающих на стыке информационных технологий, экономики и управленческой деятельности. Формируется системный подход к управлению современными предприятиями на основе цифровых решений."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
