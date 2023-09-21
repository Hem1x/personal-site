import Head from 'next/head';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Overview from '@/components/Overview';

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
          <Overview />
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
