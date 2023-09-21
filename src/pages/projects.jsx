import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  movieHub,
  calendar,
  pizza,
  shipTracker,
  smartSpend,
  taillwindNews,
  weather,
  defiSite,
  githubProfiles,
  cutSpace,
  timer,
} from '../../public/images/projects';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  githubLink,
}) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light  dark:border-light dark:bg-dark shadow-2xl p-12">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light" />
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8">
          <h2 className="my-2 w-full text-left text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold transition-all hover:dark:bg-dark hover:dark:text-light">
            Посмотреть
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark  dark:border-light bg-light  dark:bg-dark p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8">
          <h2 className="my-2 w-full text-left text-3xl font-bold">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline">
            Посмотреть
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Alex | Проекты</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={`Креатив превосходит знания!`}
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 pag-y-32">
            <div className="col-span-12 flex flex-col gap-24">
              <FeaturedProject
                title="Агрегатор фильмов"
                img={movieHub}
                summary="Веб-приложение для истинных ценителей кинематографа, предоставляющее обширную базу данных фильмов, удобные инструменты для поиска, фильтрации и организации вашего кинопросмотра."
                link="https://movie-hub-kohl.vercel.app/"
                githubLink="https://github.com/Hem1x/movie-hub"
                type="#лучшее"
              />
              <FeaturedProject
                title="Картографическое приложение"
                img={shipTracker}
                summary="Цифровой сервис для формирования графика работы ледокольного и транспортного флота на Северном морском пути с горизонтом планирования один месяц"
                link="https://ships-map.vercel.app/"
                githubLink="https://github.com/Hem1x/ships-map"
                type="#великолепно"
              />

              <FeaturedProject
                title="Финансовое приложение"
                img={smartSpend}
                summary="Приложение помогает пользователям отслеживать свои доходы и расходы, устанавливать финансовые цели и получать рекомендации по экономии и инвестированию, может помочь людям лучше управлять своими финансами."
                link="https://smart-spend-pi.vercel.app/"
                githubLink="https://github.com/Hem1x/smart-spend"
                type="#круто"
              />
            </div>

            <div className="col-span-4">
              <Project
                title="Интернет-магазин пиццы"
                img={pizza}
                link="https://pizza-webshop-eta.vercel.app/"
                githubLink="https://github.com/Hem1x/pizza-webshop"
                type="#папаДжонс"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Погодное приложение"
                img={weather}
                link="https://weather-app-hem1x.vercel.app/"
                githubLink="https://github.com/Hem1x/weather-app"
                type="#полезно"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Информационный сайт DeFi-проекта"
                img={defiSite}
                link="https://weather-app-hem1x.vercel.app/"
                githubLink="https://github.com/Hem1x/weather-app"
                type="#тренды"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Поисковик профилей"
                img={githubProfiles}
                link="https://github-profies.vercel.app/"
                githubLink="https://github.com/Hem1x/github-profies"
                type="#поиск"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Календарь"
                img={calendar}
                link="https://calendar-hem1x.vercel.app/"
                githubLink="https://github.com/Hem1x/calendar"
                type="#время"
              />
            </div>

            <div className="col-span-4">
              <Project
                title="Таймер"
                img={timer}
                link="https://countdown-timer-hem1x.vercel.app/"
                githubLink="https://github.com/Hem1x/countdown-timer"
                type="#акция"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Одностраничный сайт"
                img={cutSpace}
                link="https://sass-practic.vercel.app/"
                githubLink="https://github.com/Hem1x/sass-practic"
                type="#душа"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Вёрстка новостного сайта"
                img={taillwindNews}
                link="https://tailwindcss-news.vercel.app/"
                githubLink="https://github.com/Hem1x/tailwindcss-news"
                type="#новое"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
