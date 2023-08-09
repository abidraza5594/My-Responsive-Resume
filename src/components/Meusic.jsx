import React, { useState, useEffect } from 'react';
import Song from '../../src/static/media/juciew.mp3'; 

const MusicPlayer = () => {
  console.log(Song)
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Automatically start playing music after 5 seconds
    const playTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, 5000);

    return () => clearTimeout(playTimeout);
  }, []);

  useEffect(() => {
    // Show popup to pause music after 2 seconds
    if (isPlaying) {
      const popupTimeout = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(popupTimeout);
    }
  }, [isPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="music-section">
      {isPlaying && showPopup && (
        <div className="music-popup">
          <button className="popup-close" onClick={handleClosePopup}>
            &#x2715;
          </button>
          <button className="popup-pause" onClick={handleTogglePlay}>
            Pause Music
          </button> 
        </div>
      )}
      <audio autoPlay={isPlaying} loop>
        <source src={Song} type="audio/ogg" />
      </audio>
      <button className="navbar-music-button" onClick={handleTogglePlay}>
        Music
      </button>
    </div>
  );
};

export default MusicPlayer;
