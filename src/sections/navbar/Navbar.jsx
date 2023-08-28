import Logo from '../../assets/abidface.jpg';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/modal-context';
import React, { useState, useRef, useEffect } from 'react';

import musicFile from '../../static/media/juciew.mp3';
import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 7000);

    return () => clearTimeout(popupTimeout);
  }, []);

  const togglePlay = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="App">
          <button className="playButton" onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio ref={audioRef} src={musicFile} />
        </div>

        <ul className="nav__menu">
          {data.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <button className="popup-close" onClick={closePopup}>
            Close
          </button>
          <div className="model_container">

            <div className="model_header">
            <h3 style={{color:"#f57c00"}}>Currently, I am learning.</h3>
              <h1>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</h1>
              <h3 className='headeing_description'>Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!</h3>
              <p>Created by : Maximilian Schwarzmüller <span>From Udemy</span></p>
            </div>
 
            <div className="model_topic_list">
                
              <h1>NodeJS web development skills I will learn.</h1>
              
              <ul>
                <li>Work with one of the most in-demand web development programming languages</li>
                <li>Learn the basics as well as advanced concepts of NodeJS in great detail</li>
                <li>Build modern, fast and scalable server-side web applications with NodeJS, databases like SQL or MongoDB and more</li>
                <li>Understand the NodeJS ecosystem and build server-side rendered apps, REST APIs and GraphQL APIs</li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
