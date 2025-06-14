// ActivitiesList.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaClock,
  FaDollarSign,
  FaAddressBook,
  FaStar,
  FaStarHalfAlt,
  FaWheelchair,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLink,
  FaCopy
} from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from './Modal';
import '../css/ActivitiesList.css';

const ActivitiesList = ({
  title,
  description,
  location,
  openingHours,
  admissionFee,
  websiteLink,
  contactInformation,
  rating,
  accessibilityInformation,
  specialEvents,
  imageURL,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const starElements = Array.from({ length: fullStars }, (_, index) => (
      <span key={index} className="icon"><FaStar /></span>
    ));

    if (hasHalfStar) {
      starElements.push(<span key="half" className="icon"><FaStarHalfAlt /></span>);
    }

    return starElements;
  };

  const renderProp = (icon, prop, label) => {
    if (label === 'WebsiteLink' && prop !== undefined && prop !== null && prop !== '') {
      return (
        <div className="button-container">
          <li key={label} className={`activity-${label.toLowerCase()}`}>
            <button className="web-link-button" onClick={() => window.open(prop, '_blank')}>
              More Details
            </button>
            <CopyToClipboard text={`${window.location.origin}/activity/${id}`} onCopy={handleCopy}>
              <button className="share-button">
                {copied ? 'Copied!' : 'Share This Activity'}
                <FaCopy />
              </button>
            </CopyToClipboard>
          </li>
        </div>
      );
    } else if (prop !== undefined && prop !== null && prop !== '') {
      return (
        <li key={label} className={`activity-${label.toLowerCase()}`}>
          <span className="icon">{icon()}</span> {prop}
        </li>
      );
    }
    return null;
  };

  return (
    <div className="activities-list-item" onClick={handleCardClick}>
      <img
        src={imageURL}
        alt={title}
        className="activity-image"
      />
      <div className="event-details">
        <h2 className="activity-title">{title}</h2>
        <ul className="activity-additional-details">
          <li className="activity-description">{description}</li>
          <div className="review-rating-stars">
            {renderStars()}
          </div>
          <div className="review-rating-number">
            <p>{rating}</p>
          </div>
          <li className="activity-location">
            <span className="icon"><FaMapMarkerAlt /></span> {location}
          </li>
          {renderProp(() => <FaClock />, openingHours, 'OpeningHours')}
          {renderProp(() => <FaDollarSign />, admissionFee, 'AdmissionFee')}
          {renderProp(() => <FaAddressBook />, contactInformation, 'ContactInformation')}
          {renderProp(() => <FaWheelchair />, accessibilityInformation, 'AccessibilityInformation')}
          {renderProp(() => <FaCalendarAlt />, specialEvents, 'SpecialEvents')}
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Add details to display in the modal */}
        <h2>{title}</h2>
        {renderProp(() => <FaLink />, websiteLink, 'WebsiteLink')}
      </Modal>
    </div>
  );
};

ActivitiesList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  openingHours: PropTypes.string.isRequired,
  admissionFee: PropTypes.string.isRequired,
  contactInformation: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired, 
  accessibilityInformation: PropTypes.string.isRequired,
  specialEvents: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ActivitiesList;
