import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection/HeroSection';
import OurStory from '../components/OurStory/OurStory';
import Popular from '../components/Popular/Popular';
import OurReviews from '../components/OurReviews/OurReviews';
import TableBook from '../components/TableBook/TableBook';

export default function Home() {
  return (
    <>
      <Head>
        <title>Koreana Restaurant</title>
        <meta name="description" content="Welcome to Koreana Restaurant where Seoul meets Food. Most authentic Korean cuisine you'll ever experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <OurStory />
      <Popular />
      <OurReviews />
      <TableBook />
    </>
  );
};
