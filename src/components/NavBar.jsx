import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  GithubIcon,
  LinkedInIcon,
  TelegramIcon,
  SunIcon,
  MoonIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const MotionLink = motion(Link);

const CustonLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustonMobileLink = ({ href, title, toggle, className = '' }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 translate-y-1' : 'translate-y-1'
          }`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustonLink href="/" title="Главная" className="mr-4" />
          <CustonLink href="/about" title="Обо мне" className="mx-4" />
          <CustonLink href="/projects" title="Проекты" className="mx-4" />
          <CustonLink
            href="/achives"
            title="Достижения"
            className="ml-4"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink
            href="https://github.com/Hem1x"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <GithubIcon />
          </MotionLink>
          <MotionLink
            href="https://www.linkedin.com/in/alexander-avvakumov-90773528b/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <LinkedInIcon />
          </MotionLink>
          <MotionLink
            href="https://t.me/alexxAVK"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <TelegramIcon />
          </MotionLink>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === 'light'
                ? 'bg-dark text-light'
                : 'bg-light text-dark'
            }`}>
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center flex-col justify-center">
            <CustonMobileLink
              href="/"
              title="Главная"
              toggle={handleClick}
            />
            <CustonMobileLink
              href="/about"
              title="Обо мне"
              toggle={handleClick}
            />
            <CustonMobileLink
              href="/projects"
              title="Проекты"
              toggle={handleClick}
            />
            <CustonMobileLink
              href="/achives"
              title="Достижения"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <MotionLink
              href="https://github.com/Hem1x"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1">
              <GithubIcon
                className={`dark:bg-dark bg-light rounded-full`}
              />
            </MotionLink>
            <MotionLink
              href="https://www.linkedin.com/in/alexander-avvakumov-90773528b/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1">
              <LinkedInIcon />
            </MotionLink>
            <MotionLink
              href="https://t.me/alexxAVK"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1">
              <TelegramIcon />
            </MotionLink>
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light'
                  ? 'bg-dark text-light'
                  : 'bg-light text-dark'
              }`}>
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>

          <h1
            className="absolute top-7 right-7 cursor-pointer "
            onClick={() => setIsOpen(false)}>
            &#10006;
          </h1>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
