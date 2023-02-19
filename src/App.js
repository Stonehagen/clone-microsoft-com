import React from 'react';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Header">HEADER MENU</div>
      <div className="Main">
        <div className="Carousel-Wide">Carousel</div>
        <div className="Shop-List">Buy Stuff</div>
        <div className="News-Grid">News</div>
        <div className="Xbox-Hero">XBOX</div>
        <div className="News-Grid-Business">Business News</div>
        <div className="Carousel-Small">Carousel</div>
        <div className="Social-List"></div>
        <button>Back to top</button>
      </div>
      <div className="Footer">FOOTER TEXT</div>
    </div>
  );
};

export default App;
