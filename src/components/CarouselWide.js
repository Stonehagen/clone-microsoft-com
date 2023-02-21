import React, { useState } from 'react';
import CarouselImg from '../img/Highlight-Surface-Wide.png';
import CarouselImg2 from '../img/Xbox-Carou.png';
import { ReactComponent as Left } from '../img/arrow-left.svg';
import { ReactComponent as Right } from '../img/arrow-right.svg';
import { ReactComponent as Fill } from '../img/circle-svgrepo.svg';
import { ReactComponent as Empty } from '../img/circle-drashed.svg';
import '../styles/CarouselWide.css';

const CarouselWide = () => {
  const [index, setIndex] = useState(0);
  const length = 2;
  const [slideClass, setslideClass] = useState('Carousel-Slide left');

  const changeSlideClass = () => {
    setslideClass(
      slideClass === 'Carousel-Slide left'
        ? 'Carousel-Slide right'
        : 'Carousel-Slide left',
    );
  };

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    changeSlideClass();
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    changeSlideClass();
  };

  return (
    <div className="Carousel-Wide">
      <div className="No-Look">
        <div
          className={slideClass}
          id="Carousel-Slide-1"
          style={{ backgroundImage: `url(${CarouselImg})` }}
        >
          <div className="Carousel-Slide-Text">
            <h2>Save up to $200 on Surface Laptop 5</h2>
            <p>
              Sophisticated style and multitasking speed powered by 12th Gen
              Intel® Core. Offer ends 2/26.
            </p>
            <button>Shop Surface Laptop 5</button>
          </div>
        </div>
        <div
          className={slideClass}
          id="Carousel-Slide-2"
          style={{ backgroundImage: `url(${CarouselImg2})` }}
        >
          <div className="Carousel-Slide-Text">
            <h2>$60 off Xbox Series S</h2>
            <p>
              Score savings on the smallest, sleekest Xbox yet. Only $239.99,
              offer ends 4/30.
            </p>
            <button>Shop Xbox Series S</button>
          </div>
        </div>
      </div>
      <div className="Carousel-Controls">
        <Left className="Arrow-left" onClick={handlePrevious} />
        <div id="dot-0">
          {index === 0 ? <Fill className='dot'/> : <Empty className='dot'/>}
        </div>
        <div id="dot-1">
        {index === 1 ? <Fill className='dot'/> : <Empty className='dot'/>}
        </div>
        <Right className="Arrow-right" onClick={handleNext} />
      </div>
    </div>
  );
};

export default CarouselWide;
