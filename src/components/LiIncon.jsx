import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIncon = ({ referance }) => {
  const { scrollYProgress } = useScroll({
    target: referance,
    offset: ['center end', 'center center'],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] stroke-[0px]"
        width={75}
        height={75}
        viewBox="0 0 100 100">
        <motion.circle cx="75" cy="50" r="20" className="fill-none" />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <motion.circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-[5px] fill-primary dark:fill-primaryDark dark:drop-shadow-neon"
        />
      </svg>
    </figure>
  );
};

export default LiIncon;
