import React, { useState } from 'react';
import './index.css';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const resetInput = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
    resetInput();
  };

  const handleSetUsername = (event) => {
    const enteredData = event.target.value;

    // @todo perform input validation
    setUsername(enteredData);
  };

  const handleSetPassword = (event) => {
    const enteredData = event.target.value;

    // @todo perform input validation
    setPassword(enteredData);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmission}>
        <label htmlFor="username">Username</label>
        <div className="text-input-container">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleSetUsername}
            placeholder="hello@company.com"
          />
        </div>

        <label htmlFor="password">Password</label>
        <div className="text-input-container">
          <input type="password" id="password" value={password} onChange={handleSetPassword} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginScreen;
