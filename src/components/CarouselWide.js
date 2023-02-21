import React from 'react';
import CarouselImg from '../img/Highlight-Surface-Wide.png';
import '../styles/CarouselWide.css';

const CarouselWide = () => {
  return (
    <div className="Carousel-Wide">
      <img
        src={CarouselImg}
        alt="Surface Laptop"
        className="Carousel-Wide-Img"
      />
    </div>
  );
};

export default CarouselWide;
