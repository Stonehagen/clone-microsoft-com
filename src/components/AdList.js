import React from 'react';
import SurfaceImg from '../img/link01.png';
import WinImg from '../img/link02.png';
import XboxImg from '../img/link03.png';
import KeyboardImg from '../img/link04.png';
import CaseImg from '../img/link05.png';
import '../styles/AdList.css';

const AdList = () => {
  const AdCards = [
    { img: SurfaceImg, text: 'Shop Surface devices', link: '/ShopI' },
    { img: WinImg, text: 'Choose your Microsoft 365', link: '/WinI' },
    { img: XboxImg, text: 'Buy Xbox games and consoles', link: '/XboxI' },
    { img: WinImg, text: 'Get Windows 11', link: '/WinI' },
    { img: KeyboardImg, text: 'Shop for accessories', link: '/KeyI' },
    { img: CaseImg, text: 'Shop Business', link: '/CaseI' },
  ];

  return (
    <div className="Ad-List">
      {AdCards.map((card, index) => {
        return (
          <div className="Ad-Card" key={`ad-card-${index}`}>
            <img src={card.img} alt={card.text} />
            <a href={card.link}>{card.text}</a>
          </div>
        );
      })}
    </div>
  );
};

export default AdList;
