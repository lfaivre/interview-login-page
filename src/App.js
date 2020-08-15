import React, { useState } from 'react';

import NavigationBar from './components/NavigationBar';
import PageContentContainer from './components/PageContentContainer';
import FooterContentContainer from './components/FooterContentContainer';

import LoginMediaContainer from './components/LoginMediaContainer';
import LoginFormContainer from './components/LoginFormContainer';
import LoginSuccessScreen from './components/LoginSuccessScreen';

import 'modern-css-reset';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const showAccountMenu = (visible) => {
    console.log(`Show account menu: ${visible}`);
  };

  return (
    <div className="App">
      <div className="max-width-wrapper">
        <NavigationBar showAccountMenu={showAccountMenu} />
        <PageContentContainer>
          <LoginMediaContainer />
          {loggedIn ? <LoginSuccessScreen /> : <LoginFormContainer setLoggedIn={setLoggedIn} />}
        </PageContentContainer>
        <FooterContentContainer />
      </div>
    </div>
  );
}

export default App;
