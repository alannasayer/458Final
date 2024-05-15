// components/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#ccd9e8', color: '#333', minHeight: '100vh', padding: '0 20px' }}>
      <Head>
        <title>My Next.js Site</title>
        <meta name="description" content="Welcome to my Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/" legacyBehavior><a style={{ color: '#003366' }}>Home</a></Link> | 
          <Link href="/about" legacyBehavior><a style={{ color: '#003366' }}>About</a></Link> | 
          <Link href="/contact" legacyBehavior><a style={{ color: '#003366' }}>Contact</a></Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2024 My Website. All rights reserved. By Alanna Sayer</p>
      </footer>
    </div>
  );
};

export default Layout;
