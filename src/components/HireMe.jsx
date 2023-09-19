import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed left-1 bottom-1 flex items-center justify-center overflow-hidden">
      <div className="w-64 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-dark animate-spin-slow'} />
        <Link
          href="mailto:name@yandex.ru"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[5.3rem] h-[5.3rem]  rounded-full font-semibold hover:bg-light hover:text-dark transition-all duration-300 ease-in">
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
