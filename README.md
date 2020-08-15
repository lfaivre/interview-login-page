<p align="center">
  <a href="http://localhost:3000/">
    <img alt="Application Icon" src="./icon.png" width="60" />
  </a>
</p>
<h1 align="center">Fuudie - Login Page for Interview</h1>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting Application

**Install Dependencies**

```sh
cd interview-login-page/
yarn
```

**Start Application (Development)**

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Application Description - Login Form**

Starting the application will bring up a login page. Enter a valid username and password to log in to the website.

Username Schema:

- must be a valid email (`hello@fuudie.com`)
- minimum length of 3
- maximum length of 255

Password Schema:

- minimum length of 3
- maximum length of 255

User login data (username and password) is validated within the client application.

**Application Description - Local Storage**

Because this a client-only application, user login data is saved to local storage (via `window.localStorage`) if valid.

When a user logs in with a valid email and password, their username is saved to local storage.

If a user reloads the page, that user will still be logged in as the application checks for a previously logged in user through a local storage query.

Once a user is logged in, a logout button is presented which can be clicked to remove a user from local storage and log them out.

## Selected Screenshots

All screenshots are located in the `screenshots/` directory.

**Desktop Screenshots**

![Desktop Splash](https://github.com/lfaivre/interview-login-page/blob/master/screenshots/desktop_splash.png?raw=true)
![Desktop Login](https://github.com/lfaivre/interview-login-page/blob/master/screenshots/desktop_login.png?raw=true)
![Desktop Login Success](https://github.com/lfaivre/interview-login-page/blob/master/screenshots/desktop_login_success.png?raw=true)
![Desktop Footer](https://github.com/lfaivre/interview-login-page/blob/master/screenshots/desktop_footer.png?raw=true)

**Mobile Screenshots**

<p float="left">
  <img alt="Mobile Splash" src="https://github.com/lfaivre/interview-login-page/blob/master/screenshots/mobile_splash.png?raw=true" width="22.5%" />
  <img alt="Mobile Login" src="https://github.com/lfaivre/interview-login-page/blob/master/screenshots/mobile_login.png?raw=true" width="22.5%" />
  <img alt="Mobile Login Success" src="https://github.com/lfaivre/interview-login-page/blob/master/screenshots/mobile_login_success.png?raw=true" width="22.5%" />
  <img alt="Mobile Footer" src="https://github.com/lfaivre/interview-login-page/blob/master/screenshots/mobile_footer.png?raw=true" width="22.5%" />
</p>
