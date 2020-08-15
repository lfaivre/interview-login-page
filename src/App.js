import React, { useState, useEffect } from 'react';

import NavigationBar from './components/NavigationBar';
import PageContentContainer from './components/PageContentContainer';
import FooterContentContainer from './components/FooterContentContainer';

import LoginMediaContainer from './components/LoginMediaContainer';
import LoginFormContainer from './components/LoginFormContainer';
import LoginSuccessScreen from './components/LoginSuccessScreen';

import { getUserData, saveUserData, removeUserData } from './utils/modifyLocalStorage';

import 'modern-css-reset';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    const userData = getUserData();

    if (userData && userData.username) {
      setUsername(userData.username);
      setLoggedIn(true);
    } else {
      setUsername(undefined);
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    console.log(`User logged in: ${loggedIn}`);
  }, [loggedIn]);

  useEffect(() => {
    console.log(`Successfully set username: ${username}`);
  }, [username]);

  const handleAuthentication = async (status, userData) => {
    if (status && userData && userData.username) {
      const userDataSavedSuccessfully = saveUserData(userData);

      if (userDataSavedSuccessfully) {
        setUsername(userData.username);
        setLoggedIn(userDataSavedSuccessfully);
      }
    } else {
      const userDataRemovedSuccessfully = removeUserData();

      if (userDataRemovedSuccessfully) {
        setUsername(undefined);
        setLoggedIn(false);
      }
    }
  };

  const showAccountMenu = (visible) => {
    console.log(`Show account menu: ${visible}`);
  };

  return (
    <div className="App">
      <div className="max-width-wrapper">
        <NavigationBar showAccountMenu={showAccountMenu} />
        <PageContentContainer>
          <LoginMediaContainer />
          {loggedIn ? (
            <LoginSuccessScreen handleAuthentication={handleAuthentication} username={username} />
          ) : (
            <LoginFormContainer handleAuthentication={handleAuthentication} />
          )}
        </PageContentContainer>
        <FooterContentContainer />
      </div>
    </div>
  );
}

export default App;
