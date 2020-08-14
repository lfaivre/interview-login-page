import React from 'react';
import LoginForm from '../LoginForm';

import './index.css';

const LoginFormContainer = () => {
  return (
    <div className="login-form-container">
      <p className="title">Let's get you logged in.</p>
      <LoginForm />
    </div>
  );
};

export default LoginFormContainer;
