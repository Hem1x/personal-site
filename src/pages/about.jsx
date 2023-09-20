import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/profile_photo.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

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

const about = () => {
  return (
    <>
      <Head>
        <title>Alex | О себе</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText
            text="Страсть подпитывает цель!"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Биография
              </h2>
              <p className="font-medium">{`Привет, я молодой разработчик, специализирующийся на React, и имею за плечами год опыта в сфере информационных технологий. Мое отличительное черта - это позитивный настрой и страсть к миру IT. Я всегда готов делиться позитивом и энергией в команде, что помогает нам успешно взаимодействовать и находить нестандартные, инновационные решения для сложных задач.`}</p>
              <p className="my-4 font-medium">{`Мои проекты всегда заканчиваются успешно, и я не боюсь браться за решение проблем, которые могут возникнуть на пути к цели. Я страстно увлечен разработкой на React и всегда стремлюсь к совершенству в этой области.`}</p>
              <p className="font-medium">{`Надеюсь, стать частью вашей команды и вместе достичь отличных результатов, создавая инновационные решения и улучшая пользовательский опыт. Давайте сделаем будущее IT ярче и более успешным вместе!`}</p>
            </div>
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
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
