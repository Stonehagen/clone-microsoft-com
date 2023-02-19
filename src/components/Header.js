import React from 'react';
import Logo from '../img/logo.png';
import {ReactComponent as Search } from '../img/search.svg'
import {ReactComponent as Cart } from '../img/cart.svg'
import {ReactComponent as Profile } from '../img/profile.svg'

const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="Microsoft" />
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
      <ul>
        <li>All Microsoft</li>
        <li><Search /></li>
        <li><Cart /></li>
        <li><Profile /></li>
      </ul>
    </div>
  );
};

export default Header;
