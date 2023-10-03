import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div
      className={`w-full mx-auto flex items-center justify-center text-center overflow-hidden sm:py-0`}>
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark dark:text-light font-bold text-8xl  ${className}`}>
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
