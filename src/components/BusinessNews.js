import React from 'react';
import News1Img from '../img/news2.png';
import News2Img from '../img/news6.png';
import News3Img from '../img/news5.png';
import News4Img from '../img/news7.png';
import '../styles/News.css';

const BusinessNews = () => {
  return (
    <div className="News">
      <div className="News-Card">
        <img src={News1Img} alt="" />
        <div className="News-Card-Heading">
          <h3>New</h3>
        </div>
        <h2>Surface Pro 9 for Business</h2>
        <p>
          Empower flexible, all-day impact with tablet portability and laptop
          performance.
        </p>
        <div className="News-Card-Link-Div">
          <a href="/001">Shop now</a>
        </div>
      </div>
      <div className="News-Card">
        <img src={News2Img} alt="" />
        <div className="News-Card-Heading"></div>
        <h2>Get Microsoft Teams for free</h2>
        <p>Online meetings, chat, and shared cloud storage—all in one place.</p>
        <div className="News-Card-Link-Div">
          <a href="/001">Sign up for free</a>
        </div>
      </div>
      <div className="News-Card">
        <img src={News3Img} alt="" />
        <div className="News-Card-Heading"></div>
        <h2>Thrive in a hybrid world</h2>
        <p>
          Discover tools, resources, and strategies to help your employees
          succeed in the new world of flexible work.
        </p>
        <div className="News-Card-Link-Div">
          <a href="/001">Learn more</a>
        </div>
      </div>
      <div className="News-Card">
        <img src={News4Img} alt="" />
        <div className="News-Card-Heading"></div>
        <h2>Microsoft 365 for business</h2>
        <p>
          Stay a step ahead with powerful apps for productivity, connection, and
          security. Make an appointment with an expert to determine the best
          solution for your business.
        </p>
        <div className="News-Card-Link-Div">
          <a href="/001">Shop now</a>
        </div>
        <div className="News-Card-Link-Div">
          <a href="/001">Book a consultation</a>
        </div>
      </div>
    </div>
  );
};

export default BusinessNews;
