import React from 'react';

import LoginForm from './components/LoginForm';
import NavigationBar from './components/NavigationBar';

import 'modern-css-reset';
import './index.css';
import './App.css';

function App() {
  const showAccountMenu = (visible) => {
    console.log(`Show account menu: ${visible}`);
  };

  return (
    <div className="App app-outer-container">
      <NavigationBar showAccountMenu={showAccountMenu} />
      <LoginForm />
    </div>
  );
}

export default App;
