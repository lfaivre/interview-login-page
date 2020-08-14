import React from 'react';
import LoginForm from '../LoginForm';

import './index.css';

const LoginContainer = () => {
  return (
    <div className="login-container">
      <p className="title">Let's get you logged in.</p>
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
