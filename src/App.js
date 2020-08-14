import React from 'react';

import LoginForm from './components/LoginForm';
import NavigationBar from './components/NavigationBar';

import 'modern-css-reset';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App app-outer-container">
      <NavigationBar />
      <LoginForm />
    </div>
  );
}

export default App;
