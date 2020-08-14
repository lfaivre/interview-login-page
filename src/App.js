import React from 'react';

import NavigationBar from './components/NavigationBar';
import PageContentContainer from './components/PageContentContainer';
import FooterContentContainer from './components/FooterContentContainer';

import LoginMediaContainer from './components/LoginMediaContainer';
import LoginFormContainer from './components/LoginFormContainer';

import 'modern-css-reset';
import './index.css';

function App() {
  const showAccountMenu = (visible) => {
    console.log(`Show account menu: ${visible}`);
  };

  return (
    <div className="App">
      <NavigationBar showAccountMenu={showAccountMenu} />
      <PageContentContainer>
        <LoginMediaContainer />
        <LoginFormContainer />
      </PageContentContainer>
      <FooterContentContainer />
    </div>
  );
}

export default App;
