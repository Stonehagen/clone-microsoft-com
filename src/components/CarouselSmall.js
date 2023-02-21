import React from 'react';
import CarouselImgSmall from '../img/Highlight-Small.png';
import '../styles/CarouselSmall.css';

const CarouselSmall = () => {
  return (
    <div className="Carousel-Small">
      <img
        src={CarouselImgSmall}
        alt="Surface Laptop"
        className="Carousel-Wide-Img"
      />
    </div>
  );
};

export default CarouselSmall;
