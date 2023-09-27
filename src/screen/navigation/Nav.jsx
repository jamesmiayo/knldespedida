import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            <h3>Home</h3>
          </div>
          <div
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            <h3>Map</h3>
          </div>
          <div
            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(3)}
          >
            <h3>Message</h3>
          </div>
        </div>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? 'active-content' : 'content'}>
          <div className="container about__container">
            <div className="title">
              <h2>THEY ARE READY TO GO! </h2>
              <h1>Kevin & Nikkis'</h1>
              <h1> Despedida Party</h1>
              <h3>October 14, 2023 | 4:00 PM</h3>
              <h3>Monalisa Kitchen</h3>
              <h4>(98 E Dela Paz St., San Roque, Marikina City)</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 2 ? 'active-content' : 'content'}>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.5653744636661!2d121.0978207903299!3d14.626227869289101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8373c9418d1%3A0x6287306b864307eb!2s98%20E%20dela%20Paz%20St%2C%20Marikina%2C%201800%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1695806142550!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map2"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className={toggleState === 3 ? 'active-content' : 'content'}>
        <div className="message">Message</div>
      </div>
    </div>
  );
};

export default Nav;
