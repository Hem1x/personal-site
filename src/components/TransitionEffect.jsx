import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  const duration = 0.4;
  const ease = 'easeIn';

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#5AA1FF]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{
          duration,
          ease,
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{
          delay: 0.1,
          duration,
          ease,
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{
          delay: 0.3,
          duration,
          ease,
        }}
      />
    </>
  );
};

export default TransitionEffect;
