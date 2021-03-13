import Head from 'next/head';
import React from 'react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { GuideMenuProvider } from '../contexts/GuideMenu';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Papillion</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="papillonDarkLogo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;1,400&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <GuideMenuProvider>
          <Header />
        </GuideMenuProvider>
      </header>
      <main>
        <div>
        <div>
          <Banner />
        </div>
        </div>
        <div className='products'>
          <Products />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}