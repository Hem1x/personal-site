import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
} from './Icons';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const CustonLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustonLink href="/" title="Главная" className="mr-4" />
        <CustonLink href="/about" title="Обо мне" className="mx-4" />
        <CustonLink href="/projects" title="Проекты" className="mx-4" />
        <CustonLink href="/articles" title="Статьи" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <MotionLink
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3">
          <TwitterIcon />
        </MotionLink>
        <MotionLink
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <GithubIcon />
        </MotionLink>
        <MotionLink
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <LinkedInIcon />
        </MotionLink>
        <MotionLink
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <PinterestIcon />
        </MotionLink>
        <MotionLink
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3">
          <DribbbleIcon />
        </MotionLink>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
