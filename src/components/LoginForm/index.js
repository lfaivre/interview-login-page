import React, { useState } from 'react';
import { validateUserLoginInput } from '../../utils/validateLogin';
import './index.css';

const LoginScreen = ({ handleAuthentication }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const resetInput = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    const userLoginInput = { email: username, password };
    const validationErrors = await validateUserLoginInput(userLoginInput);

    if (validationErrors.length !== 0) {
      console.log('Validation errors:', validationErrors);
      setErrorMessage('Invalid username or password.');
      resetInput();
    } else {
      setErrorMessage(undefined);

      const userData = { username };
      handleAuthentication(true, userData);
    }
  };

  const handleSetUsername = (event) => {
    const enteredData = event.target.value;
    setUsername(enteredData);
  };

  const handleSetPassword = (event) => {
    const enteredData = event.target.value;
    setPassword(enteredData);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmission}>
        <p className="error-message">{errorMessage ? errorMessage : ''}</p>
        <label htmlFor="username">Username</label>
        <div className="text-input-container">
          <input type="text" id="username" value={username} onChange={handleSetUsername} />
        </div>

        <label htmlFor="password">Password</label>
        <div className="text-input-container">
          <input type="password" id="password" value={password} onChange={handleSetPassword} />
        </div>

        <input type="submit" value="Submit" />

        <a href="/account/help" className="help">
          Account Help
        </a>
      </form>
    </div>
  );
};

export default LoginScreen;
