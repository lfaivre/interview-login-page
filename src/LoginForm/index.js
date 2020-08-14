import React, { useState } from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
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
    <div>
      <p>Log In to Your Account</p>
      <form onSubmit={handleSubmission}>
        <input type="text" value={username} onChange={handleSetUsername} placeholder="username" />
        <input
          type="password"
          value={password}
          onChange={handleSetPassword}
          placeholder="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginScreen;
