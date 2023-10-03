import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { bestProjects } from '@/data/bestProjects';
import { petProjects } from '@/data/projects';

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
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light  dark:border-light dark:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-lg">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold transition-all hover:dark:bg-dark hover:dark:text-light sm:px-4 sm:text-base">
            Посмотреть
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark  dark:border-light bg-light  dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
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
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl  sm:text-lg">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base">
            Посмотреть
          </Link>
          <Link href={githubLink} target="_blank" className="w-8 md:w-6">
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
            className="mb-16 !text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 flex flex-col gap-24">
              {bestProjects.slice(0, 2).map((project) => (
                <FeaturedProject
                  key={project.title}
                  title={project.title}
                  img={project.img}
                  summary={project.summary}
                  link={project.link}
                  githubLink={project.githubLink}
                  type={project.type}
                />
              ))}
            </div>

            {petProjects.slice(0, 3).map((el) => (
              <div className="col-span-4 md:col-span-12" key={el.title}>
                <Project
                  title={el.title}
                  img={el.img}
                  link={el.link}
                  githubLink={el.githubLink}
                  type={el.type}
                />
              </div>
            ))}

            {petProjects.slice(3, 5).map((el) => (
              <div className="col-span-6 md:col-span-12" key={el.title}>
                <Project
                  title={el.title}
                  img={el.img}
                  link={el.link}
                  githubLink={el.githubLink}
                  type={el.type}
                />
              </div>
            ))}

            <div className="col-span-12 flex flex-col gap-24">
              {bestProjects
                .slice(2, bestProjects.length)
                .map((project) => (
                  <FeaturedProject
                    key={project.title}
                    title={project.title}
                    img={project.img}
                    summary={project.summary}
                    link={project.link}
                    githubLink={project.githubLink}
                    type={project.type}
                  />
                ))}
            </div>

            {petProjects.slice(5).map((el) => (
              <div className="col-span-4  md:col-span-12" key={el.title}>
                <Project
                  title={el.title}
                  img={el.img}
                  link={el.link}
                  githubLink={el.githubLink}
                  type={el.type}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
