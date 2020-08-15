import React from 'react';
import './index.css';

const LoginSuccessScreen = ({ handleAuthentication, username }) => {
  const handleInternalNavigation = () => {
    console.log('Navigate to dashboard.');
  };

  return (
    <div className="login-success-screen">
      <p className="message">Welcome to fuudie.</p>
      <button className="dashboard-button" onClick={handleInternalNavigation}>
        Continue to dashboard
      </button>
      <div className="user-section">
        <p className="username">{`Logged in as ${username}`}</p>
        <button onClick={(e) => handleAuthentication(false)} className="logout">
          Not you? Log out
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessScreen;
