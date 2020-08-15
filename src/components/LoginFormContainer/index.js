import React from 'react';
import LoginForm from '../LoginForm';

import './index.css';

const LoginFormContainer = ({ handleAuthentication }) => {
  return (
    <div className="login-form-container">
      <p className="title">Let's get you logged in.</p>
      <LoginForm handleAuthentication={handleAuthentication} />
    </div>
  );
};

export default LoginFormContainer;
