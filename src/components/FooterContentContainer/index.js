import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';

const FooterContentContainer = () => {
  return (
    <div className="footer-content-container">
      <div className="top">
        <div className="left">
          <p className="title">Contact Us</p>
          <p className="content">
            <span className="accent">Phone&nbsp;&nbsp;</span>+1&nbsp;(000)&nbsp;000-0000
          </p>
          <p className="content">
            <span className="accent">Email&nbsp;&nbsp;</span>
            <a href="mailto:team@fuudie.com" className="link">
              team@fuudie.com
            </a>
          </p>
        </div>
        <div className="right">
          <div className="social-links">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p className="title">Fuudie LLC</p>
          <p>
            <span className="accent">Headquarted in&nbsp;&nbsp;</span>
            <span className="accent-white">Phoenix, Arizona</span>
          </p>
        </div>
        <div className="right">
          <p className="title">Do you have a minute?</p>
          <a href="/survey" className="content">
            Take our survey
          </a>
          <p className="title">Join Our Team</p>
          <a href="/careers/apply" className="content">
            See open positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContentContainer;
