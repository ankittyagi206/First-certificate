import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Article from '../Article';
import ServicesContent from '../ServicesContent';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Article />
    </>
  );
}

export default Home;