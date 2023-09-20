import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import featuresArticle1 from '../../public/images/articles/pagination component in reactjs.jpg';
import featuresArticle2 from '../../public/images/articles/create loading screen in react js.jpg';
import { motion, useMotionValue } from 'framer-motion';
import article1 from '../../public/images/articles/create modal component in react using react portals.png';
import HireMe from '@/components/HireMe';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (e) => {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (e) => {
    imgRef.current.style.display = 'none';
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

const FeatuedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:text-light dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light " />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time} min read
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Alex | Статьи</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeatuedArticle
              img={featuresArticle1}
              title={`Build A Custom Pagination Component In Reactjs From Scratch`}
              time={9}
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              link={'/'}
            />

            <FeatuedArticle
              img={featuresArticle2}
              title={`Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens`}
              time={10}
              summary={`Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience.`}
              link={'/'}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-22">
            All Articles
          </h2>
          <ul>
            <Article
              img={article1}
              title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
              date="March 22, 2023"
              link="/"
            />
            <Article
              img={article1}
              title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
              date="March 22, 2023"
              link="/"
            />
            <Article
              img={article1}
              title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
              date="March 22, 2023"
              link="/"
            />
            <Article
              img={article1}
              title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
              date="March 22, 2023"
              link="/"
            />
            <Article
              img={article1}
              title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
      <HireMe />
    </>
  );
};

export default articles;
