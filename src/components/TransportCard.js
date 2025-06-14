import React from 'react';
import PropTypes from 'prop-types';
import { FaBus, FaDollarSign} from 'react-icons/fa';
import '../css/TransportCard.css';

const TransportCard = ({ title, priceRange, description, link, imageSrc, stars }) => {


  return (
    <div className="transport-card">
     
      <img
          src={imageSrc}
          alt={title}
          className="transport-image"
         
        />
      <h2 className="transport-title">{title}</h2>
      <div className="review-stars">
        {Array.from({ length: stars }, (_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
      <div className="review-rating-number">
        <p>{stars}</p>
      </div>
      <div className="price-range">
        <FaDollarSign /> {priceRange}
      </div>
      <p className="transport-description">
        <FaBus /> {description} 
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="transport-link-button">  More Details</button>
        </a>
    </div>
  );
};

TransportCard.propTypes = {
  title: PropTypes.string.isRequired,
  priceRange: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  stars: PropTypes.string.isRequired,
};

export default TransportCard;
