import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer_profile.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 mr-20 md:w-full md:mx-auto">
              <Image
                src={profilePic}
                alt="portfolio photo"
                className="w-full  h-auto lg:hidden md:inline-block md:w-full"
                priority
                size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Превращаем идеи в реальность с помощью кода и дизайна."
                className="!text-5xl !text-left mb-2 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl md:mt-5"
              />
              <p className="my-4 text-base font-medium md:text-center">
                Я стремлюсь превращать идеи в инновационные веб-приложения.
                Изучите мои последние проекты, демонстрирующие мой опыт в
                React.js и веб-разработке.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Аввакумов_Александр_Frontend_developer.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all duration-200 ease-in-out

                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-2 hover:dark:border-light
                  "
                  download={true}>
                  Резюме <LinkArrow className={'w-6 ml-1'} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 innline-block w-24">
          <Image
            src={lightBulb}
            alt="name"
            className="w-full h-auto md:hidden"
            priority
            size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </main>
    </>
  );
}
