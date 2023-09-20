import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIncon from './LiIncon';

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIncon referance={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Опыт</h2>

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
            position={`Frontend-разработчик`}
            company={`Портфолио`}
            companyLink={`https://github.com/Hem1x`}
            time={`Июнь 2022 - наст.`}
            address={`Москва, Россия`}
            work={`
            Разрабатывал компоненты и логику веб-приложения на стеке: React + TypeScript + Redux + NextJS. Работал с API при помощи RTK Query и RTK Thunk. Реализовывал авторизацию и приватные роуты благодаря NextJS + Firebase. Улучшал производительность веб-приложения (оптимизация перерисовок, запросов и кэширование). Работал с Git и Github (commit, branch, checkout, pull request, merge). Также доводилось работать с API-картой (Построение картографических объектов, Установление поитов на карте, а также кастомизация и добавление доп функционала)`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
