import React from 'react';
import '../styles/SocialList.css';
import Twitter from '../img/twitter.png';
import Facebook from '../img/face.png';
import LinkedIn from '../img/linked.png';

const SocialList = () => {
  return (
    <div className="Social-List">
      <ul>
        <li>Follow Microsoft</li>
        <li><img src={Facebook} alt='facebook'/></li>
        <li><img src={Twitter} alt='twitter'/></li>
        <li><img src={LinkedIn} alt='linked in'/></li>
      </ul>
        <button className='Back-To-Top'>Back to top</button>
    </div>
  );
};

export default SocialList;
