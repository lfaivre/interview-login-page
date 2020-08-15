import React from 'react';
import './index.css';

const LoginSuccessScreen = () => {
  const handleInternalNavigation = () => {
    console.log('Navigate to dashboard.');
  };

  return (
    <div className="login-success-screen">
      <p className="message">Welcome to fuudie.</p>
      <button className="dashboard-button" onClick={handleInternalNavigation}>
        Continue to dashboard
      </button>
    </div>
  );
};

export default LoginSuccessScreen;
