import Logo from '../../assets/abidface.jpg';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/modal-context';
import React, { useState, useEffect } from 'react';

import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 7000);

    return () => clearTimeout(popupTimeout);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map(item => (
            <li key={item.id}>
              {item.id === 6 ? (
                <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
              ) : (
                <a href={item.link}>{item.title}</a>
              )}
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
              <h3 style={{ color: "#f57c00" }}>Angular Developer at @Leadrat CRM.</h3>
              <h1>Proficient in HTML, CSS, JavaScript, React , Angular, Python, Django, and Django Rest Framework,</h1>
              <h3 className='headeing_description'>I specialize in dynamic web solutions. Expert in front-end design, I create appealing interfaces with HTML, CSS, and ReactJS and Angular.</h3>
              <p>**fundamental Node.js and Express expertise**.</p>
            </div>
            <div className="model_topic_list">
              <h1> Back-end proficiency in Python, Django, and Django Rest Framework enables secure, scalable development,</h1>
              <h3 style={{ color: "#f57c00" }}>Experience</h3>
              <ul>
                <li>Leadrat CRM | Angular Developer <small>present</small></li>
                <li>Newton School | Fullstack Developer Bootcamp <small>Aug 2022 to Oct 2023</small></li>
                <li>Care 24 | Python Django Developer <small>Mar 2022 to Jun 2022</small></li>
                <li>Maxgen Technology | Python Developer <small>Aug 2021 to Feb 2022</small></li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
