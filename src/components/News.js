import React from 'react';
import News1Img from '../img/news1.png';
import News2Img from '../img/news2.png';
import News3Img from '../img/news3.png';
import News4Img from '../img/news4.png';
import '../styles/News.css';

const News = () => {
  return (
    <div className="News">
      <div className="News-Card">
        <img src={News1Img} alt="" />
        <div className='News-Card-Heading'></div>
        <h2>Microsoft 365</h2>
        <p>
          Apps and features to help you turn ideas into reality, stay safer, and
          focus on the important things in life.
        </p>
        <div className='News-Card-Link-Div'>
          <a href="/001">For 1 person</a>
        </div>
        <div className='News-Card-Link-Div'>
          <a href="/001">For up to 6 people</a>
        </div>
      </div>
      <div className="News-Card">
        <img src={News2Img} alt="" />
        <div className='News-Card-Heading'>
          <h3>New</h3>
        </div>
        <h2>Surface Pro 9</h2>
        <p>
          Tablet versatility and laptop power — all in one ultra-portable
          device.
        </p>
        <div className='News-Card-Link-Div'>
          <a href="/001">Shop now</a>
        </div>
      </div>
      <div className="News-Card">
        <img src={News3Img} alt="" />
        <div className='News-Card-Heading'></div>
        <h2>Up to $400 off select Surface Laptop Studio</h2>
        <p>
          Flex your creative muscle with a touchscreen device that seamlessly
          transitions from laptop to portable creative canvas. Offer ends 3/5.
        </p>
        <div className='News-Card-Link-Div'>
          <a href="/001">Shop Surface Laptop Studio</a>
        </div>
      </div>
      <div className="News-Card">
        <img src={News4Img} alt="" />
        <div className='News-Card-Heading'></div>
        <h2>Introducing the new Bing</h2>
        <p>Your AI copilot for the web.</p>
        <div className='News-Card-Link-Div'>
          <a href="/001">Join the Bing preview</a>
        </div>
        <div className='News-Card-Link-Div'>
          <a href="/001">Learn the latest news</a>
        </div>
      </div>
    </div>
  );
};

export default News;
