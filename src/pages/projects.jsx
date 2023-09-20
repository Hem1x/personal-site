import HireMe from '@/components/HireMe';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

const projects = () => {
  return (
    <>
      <>
        <Head>
          <title>Alex | Проекты</title>
          <meta name="description" content="any description" />
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
          <Layout className="pt-16"></Layout>
        </main>
        {/* <HireMe /> */}
      </>
    </>
  );
};

export default projects;
