import React from 'react';
import AdList from './components/AdList';
import CarouselWide from './components/CarouselWide';
import Header from './components/Header';
import News from './components/News';
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
          <div className="Xbox-Hero">XBOX</div>
          <div className="News-Grid-Business">Business News</div>
          <div className="Carousel-Small">Carousel</div>
        </div>
        <div className="Social-List"></div>
        <button>Back to top</button>
      </div>
      <div className="Footer">FOOTER TEXT</div>
    </div>
  );
};

export default App;
