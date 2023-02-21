import React from 'react';
import AdList from './components/AdList';
import BusinessNews from './components/BusinessNews';
import CarouselSmall from './components/CarouselSmall';
import CarouselWide from './components/CarouselWide';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import SocialList from './components/SocialList';
import XboxHero from './components/XboxHero';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <CarouselWide />
        <div className="Sub-Main">
          <AdList />
          <News />
          <XboxHero />
          <h1>For business</h1>
          <BusinessNews />
          <CarouselSmall />
          <SocialList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
