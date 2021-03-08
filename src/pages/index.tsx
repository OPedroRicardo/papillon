import Head from 'next/head';
import React from 'react';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Papillion</title>
        <link rel="shortcut icon" href="papillonLogo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;1,400&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <div>
          <div>
          <h1>Título <strong>curto</strong> <br/> top.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        <div>
          <Banner />
        </div>
        </div>
        <div>
          <Carousel />
        </div>
      </main>
    </div>
  )
}