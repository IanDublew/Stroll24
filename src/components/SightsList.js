import React, { useState} from 'react';
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
  FaCopy
} from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from './Modal'; 
import '../css/SightsList.css';

const SightsList = ({
  title,
  description,
  location,
  googlemapsLink,
  openingHours,
  admissionFee,
  contactInformation,
  rating,
  accessibilityInformation,
  nearbyAttractions,
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


  return (
    <div className="sight-list-item" onClick={handleCardClick}>
      <img
        src={imageURL}
        alt={title}
        className="sight-image"
      />
      <div className="sight-details">
        <h2>{title}</h2>
        <p className="sight-description">{description}</p>
        <div className="sight-rating-stars">
        {renderStars()}
        </div>
        <div className="sight-rating-number">
            {rating}
          </div>
        <p className="sight-location">Location: {location}</p>
        {openingHours && (
          <p className="sight-opening-hours">
            <FaClock /> Opening Hours: {openingHours}
          </p>
        )}
        {admissionFee && (
          <p className="sight-admission-fee">
            <FaDollarSign /> Admission Fee: {admissionFee}
          </p>
        )}
        {contactInformation && (
          <p className="sight-contact">
            <FaAddressBook /> Contact: {contactInformation}
          </p>
        )}
        
        {accessibilityInformation && (
          <p className="sight-accessibility">
            <FaWheelchair /> Accessibility: {accessibilityInformation}
          </p>
        )}
        {nearbyAttractions && (
          <p className="sight-nearby-attractions">
            <FaMapMarkerAlt /> Nearby Attractions: {nearbyAttractions}
          </p>
        )}
        {specialEvents && (
          <p className="sight-special-events">
            <FaCalendarAlt /> Special Events: {specialEvents}
          </p>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Add details to display in the modal */}
        <h2>{title}</h2>
        <div className="button-container">
        <a href={googlemapsLink} target='_blank' rel="noopener noreferrer">
          <button  className="map-button">View in Google Maps</button>
        </a>
        <CopyToClipboard text={`${window.location.origin}/sight/${id}`} onCopy={handleCopy}>
              <button className="share-button">
                {copied ? 'Copied!' : 'Share This Sight'}
                <FaCopy />
              </button>
          </CopyToClipboard>
          </div>
      </Modal>
    </div>
  );
};

SightsList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  openingHours: PropTypes.string,
  admissionFee: PropTypes.string,
  contactInformation: PropTypes.string,
  rating: PropTypes.string.isRequired,
  accessibilityInformation: PropTypes.string,
  nearbyAttractions: PropTypes.string,
  specialEvents: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SightsList;
