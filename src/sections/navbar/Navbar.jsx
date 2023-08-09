import Logo from '../../assets/abidface.jpg';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/modal-context';
import React, { useState, useRef, useEffect } from 'react';

import musicFile from '../../static/media/juciew.mp3';
import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
  // const audioRef = useRef(null);

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying]);

  // useEffect(() => {
  //   const popupTimeout = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 5000);

  //   return () => clearTimeout(popupTimeout);
  // }, []);

  // const togglePlay = () => {
  //   setIsPlaying(prevIsPlaying => !prevIsPlaying);
  // };

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        {/* <div className="App">
          <button className="playButton" onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio ref={audioRef} src={musicFile} />
        </div> */}

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
      {/* {showPopup && (
        <div className="popup">
          <button className="popup-close" onClick={closePopup}>
            Close
          </button>
          <p>You can listen music by clicking on the play button!</p>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
