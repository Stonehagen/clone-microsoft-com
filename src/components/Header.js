import React from 'react';
import '../styles/Header.css';
import Logo from '../img/logo.png';
import { ReactComponent as Search } from '../img/search.svg';
import { ReactComponent as Cart } from '../img/cart.svg';
import { ReactComponent as Profile } from '../img/profile.svg';
import { ReactComponent as DropDown } from '../img/dropDown.svg';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Nav-Left">
        <img src={Logo} alt="Microsoft" className="logo" />
        <ul>
          <li>Microsoft 365</li>
          <li>Teams</li>
          <li>Windows</li>
          <li>Surface</li>
          <li>Xbox</li>
          <li>Deals</li>
          <li>Small Business</li>
          <li>Support</li>
        </ul>
      </div>
      <ul className="Header-Nav-Right">
        <li className="All-Microsoft">
          <span>All Microsoft</span>
          <DropDown />
        </li>
        <li>
          <Search />
        </li>
        <li>
          <Cart />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </div>
  );
};

export default Header;
