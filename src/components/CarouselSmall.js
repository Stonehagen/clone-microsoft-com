import React, { useState } from 'react';
import CarouselImg from '../img/Highlight-Small.png';
import CarouselImg2 from '../img/small-car.png';
import { ReactComponent as Left } from '../img/arrow-left.svg';
import { ReactComponent as Right } from '../img/arrow-right.svg';
import { ReactComponent as Fill } from '../img/circle-svgrepo.svg';
import { ReactComponent as Empty } from '../img/circle-drashed.svg';
import '../styles/CarouselSmall.css';

const CarouselSmall = () => {
  const [index, setIndex] = useState(0);
  const length = 2;
  const [slideClass, setslideClass] = useState('Carousel-Small-Slide left');

  const changeSlideClass = () => {
    setslideClass(
      slideClass === 'Carousel-Small-Slide left'
        ? 'Carousel-Small-Slide right'
        : 'Carousel-Small-Slide left',
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
    <div className="Carousel-Small">
      <div className="No-Look">
        <div
          className={slideClass}
          id="Carousel-Small-Slide-1"
          style={{ backgroundImage: `url(${CarouselImg})` }}
        >
          <div className="Carousel-Small-Slide-Text-Right">
            <h2>Meet the Feelings Monster</h2>
            <p>
              Learn how educators are using a furry character that lives within
              the Microsoft Reflect app to help students improve their emotional
              intelligence
            </p>
            <button>Read about Microsoft Reflect</button>
          </div>
        </div>
        <div
          className={slideClass}
          id="Carousel-Small-Slide-2"
          style={{ backgroundImage: `url(${CarouselImg2})` }}
        >
          <div className="Carousel-Small-Slide-Text">
            <h2>Celebrating the Black and African American community</h2>
            <p>
              This month and beyond, explore how to engage, learn, and take
              action
            </p>
            <button>Find out more</button>
          </div>
        </div>
      </div>
      <div className="Carousel-Controls">
        <Left className="Arrow-left" onClick={handlePrevious} />
        <div id="dot-0">
          {index === 0 ? <Fill className="dot" /> : <Empty className="dot" />}
        </div>
        <div id="dot-1">
          {index === 1 ? <Fill className="dot" /> : <Empty className="dot" />}
        </div>
        <Right className="Arrow-right" onClick={handleNext} />
      </div>
    </div>
  );
};

export default CarouselSmall;
