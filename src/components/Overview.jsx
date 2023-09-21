import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import profilePic from '../../public/images/profile/profile_photo.jpg';

import { biography } from '@/data/about';

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Overview = () => {
  return (
    <div className="grid w-full grid-cols-8 gap-16">
      {/* Biography */}
      <div className="col-span-3 flex flex-col items-start justify-start">
        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
          Биография
        </h2>
        <p className="font-medium">{biography.p1}</p>
        <p className="my-4 font-medium">{biography.p2}</p>
        <p className="font-medium">{biography.p3}</p>
      </div>

      {/* Photo */}
      <div className="col-span-3 relative h-max rounded-2xl  border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
        <Image
          src={profilePic}
          alt="photo"
          className="w-full h-auto rounded-2xl"
          priority
          size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Stat */}
      <div className="col-span-2 flex flex-col items-end justify-between">
        <div className="flex flex-col items-end justify-center">
          <span className="inline-block text-7xl font-bold">
            <AnimateNumbers value={25} />+
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
            завершённых проектов
          </h2>
        </div>

        <div className="flex flex-col items-end justify-center">
          <span className="inline-block text-7xl font-bold">
            <AnimateNumbers value={1} /> год
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
            опыт разработки
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center">
          <span className="inline-block text-7xl font-bold">
            <AnimateNumbers value={102} />%
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
            люблю своё дело на
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
