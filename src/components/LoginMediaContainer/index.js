import React from 'react';
import './index.css';
import LoginPageArt from '../../assets/login_page_art.svg';

const LoginMediaContainer = () => {
  return (
    <div className="login-media-container">
      <img src={LoginPageArt} alt="Placeholder Art" className="art" />
    </div>
  );
};

export default LoginMediaContainer;
