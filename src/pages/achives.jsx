import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import digital2 from '../../public/images/achives/digital2.png';
import { motion, useMotionValue } from 'framer-motion';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';

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
        priority
        size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      <Link
        href={link}
        target={'_blank'}
        download={true}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </Link>
      <Link href={link} target={'_blank'} download={true}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
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
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Дорогу осилит идущий!" className="mb-16" />
          <ul className="grid grid-cols-4 gap-16">
            <FeatuedArticle
              img={digital2}
              title={`Всероссийский хакатон "Цифровой прорыв. Сезон: ИИ"`}
              summary={`Заняли с командой 2 место. Участникам хакатона предстоит создать цифровой сервис для формирования графика работы ледокольного и транспортного флота на Северном морском пути с горизонтом планирования один месяц`}
              link={'/certificate.pdf'}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
