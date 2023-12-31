import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed left-1 bottom-1 flex items-center justify-center overflow-hidden md:right-0 md:left-auto md:-top-5 md:bottom-auto md:absolute">
      <div className="w-64 h-auto flex items-center justify-center relative md:w-36">
        <CircularText
          className={'fill-dark dark:fill-light animate-spin-slow'}
        />
        <Link
          href="https://t.me/alexxAVK"
          className="
          flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark  text-light  shadow-md border border-solid border-dark w-[5.3rem] h-[5.3rem]  rounded-full font-semibold 

          dark:bg-light dark:text-dark dark:border-transparent

          hover:bg-light hover:text-dark transition-all 
          hover:dark:bg-dark hover:dark:text-light

          md:w-12 md:h-12 md:text-[10px]
          ">
          Нанять
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
