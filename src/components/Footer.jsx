import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; Все права защищены.</span>
        <div className="flex items-center">
          Создан{' '}
          <span className="text-primary text-2xl px-1">&#9825;</span>{' '}
          by&nbsp;
          <Link
            href="https://github.com/Hem1x"
            target={'_blank'}
            className="underline underline-offset-2">
            Hem1x
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
