import React from 'react';
import './index.css';
import profileImage from '../../assets/profile.jpeg';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="inner-container">
        <div className="left">
          <a href="/" className="name">
            Company.
          </a>
        </div>
        <div className="right">
          <ul className="navigation-links">
            <li className="link">
              <a href="/">About</a>
            </li>
            <li className="link">
              <a href="/">Services</a>
            </li>
            <li className="link">
              <a href="/">Showcase</a>
            </li>
            <li className="link">
              <a href="/">Account</a>
            </li>
          </ul>
          <div className="account">
            <div className="picture" style={{ backgroundImage: `url(${profileImage})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
