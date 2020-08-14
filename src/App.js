import React from 'react';

import NavigationBar from './components/NavigationBar';
import PageContentContainer from './components/PageContentContainer';
import LoginMediaContainer from './components/LoginMediaContainer';
import LoginFormContainer from './components/LoginFormContainer';

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
      <PageContentContainer>
        <LoginMediaContainer />
        <LoginFormContainer />
      </PageContentContainer>
    </div>
  );
}

export default App;
