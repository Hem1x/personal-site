import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        whileHover={{
          transition: { duration: 1, repeat: Infinity },
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
        }}
        className="w-16 h-16 bg-dark dark:bg-dark text-light dark:text-light flex justify-center items-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light">
        AV
      </MotionLink>
    </div>
  );
};

export default Logo;
