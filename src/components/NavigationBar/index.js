import React from 'react';
import './index.css';
import { navigationLinks } from '../../data/navigation';
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
            {navigationLinks.map((linkData) => {
              return (
                <li className="link" key={linkData.text}>
                  <a href={linkData.href}>{linkData.text}</a>
                </li>
              );
            })}
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
