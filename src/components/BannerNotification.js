import React, { useState, useEffect } from 'react';
import '../css/BannerNotification.css';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const BannerNotification = ({ message, onCancel, externalVisibility }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(externalVisibility);
  }, [externalVisibility]);

  const handleCancel = () => {
    setIsVisible(false);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className={`banner-notification ${isVisible ? '' : 'hidden'}`}>
      <div className="notification-content">
        <p>{message}</p>
        <div className="forms-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Contribute Event Information
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Share Car Hire/Rental Details
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Submit Hotel & Eateries Info
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Feedback
          </a>
        </div>
      </div>
      <button className="close-button" onClick={handleCancel}>
        <FaTimes />
      </button>
    </div>
  );
};

export default BannerNotification;
