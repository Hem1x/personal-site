import Link from 'next/link';
import React from 'react';
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

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustonLink href="/" title="Главная" className="mr-4" />
        <CustonLink href="/about" title="Обо мне" className="mx-4" />
        <CustonLink href="/projects" title="Проекты" className="mx-4" />
        <CustonLink href="/achives" title="Достижения" className="ml-4" />
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
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}>
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
