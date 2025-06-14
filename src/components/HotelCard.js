// HotelCard.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import FaStarHalfAlt for half stars
import Modal from './Modal';
import '../css/HotelCard.css';

const HotelCard = ({
  imageSrc,
  title,
  stars,
  description,
  link,
  googlemapsLink,
}) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderStars = () => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;

    const starElements = Array.from({ length: fullStars }, (_, index) => (
      <FaStar key={index} />
    ));

    if (hasHalfStar) {
      starElements.push(<FaStarHalfAlt key="half" />);
    }

    return starElements;
  };

  return (
    <div className="review-card" onClick={handleCardClick}>
      <img
        src={imageSrc}
        alt="Review"
        className="review-image"
        
      />
      <h2 className="review-title">{title}</h2>

      <div className="review-stars">{renderStars()}</div>

      <div className="review-rating-number">
        <p>{stars}</p>
      </div>

      <p className="review-description">{description}</p>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Add details to display in the modal */}
        <h2>{title}</h2>
        <p>{description}</p>

        <a href={link} rel="noopener noreferrer">
       
          <button>More Details</button>
        </a>
        <a
          href={googlemapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
  
          <button>See Location</button>
        </a>
      </Modal>
    </div>
  );
};

HotelCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HotelCard;
