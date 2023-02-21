import React from 'react';
import XboxImg from '../img/xbox-wide.png';
import '../styles/XboxHero.css'

const XboxHero = () => {
  return (
    <div className="Xbox-Hero" style={{ backgroundImage: `url(${XboxImg})`}}>
      <div className='Xbox-Hero-Text'>
        <h2>Power your adventure</h2>
        <p>Get an Xbox Series X and Forza Horizon 5 Premium Edition</p>
        <button>Shop Xbox Series X Bundle</button>
      </div>
    </div>
  );
};

export default XboxHero;
