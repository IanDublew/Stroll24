import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../css/WeekendList.css';
import { FaInstagram, FaFacebook, FaTwitter, FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from './Modal';

const renderDetail = (label, value) => (
  value ? (
    <li key={label} className="detail-item">
      <strong>{label}:</strong> {value}
    </li>
  ) : null
);

const getSocialMediaPlatform = (link) => {
  if (link.includes("https://www.facebook.com")) {
    return { link, icon: <FaFacebook /> };
  } else if (link.includes("https://www.twitter.com")) {
    return { link, icon: <FaTwitter /> };
  } else if (link.includes("https://www.instagram.com")) {
    return { link, icon: <FaInstagram /> };
  } else {
    return { found: false };
  }
};

const WeekendList = ({
  imageURL,
  title,
  stars,
  description,
  date,
  time,
  venue,
  organizerName,
  organizerContact,
  ticketTypes,
  priceRange,
  categories,
  tags,
  ageRestrictions,
  dressCode,
  accessibilityInfo,
  parkingInfo,
  websiteLink,
  socialMediaLinks,
  id, // New prop for the individual event page link
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const socialMediaLinksArray = Array.isArray(socialMediaLinks) ? socialMediaLinks : [socialMediaLinks].filter(Boolean);

  const socialMediaPlatforms = socialMediaLinksArray.map(link => getSocialMediaPlatform(link));

  const foundPlatforms = socialMediaPlatforms.filter(platform => platform.found !== false);
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="weekend-list-item" onClick={handleCardClick}>
      <img src={imageURL} alt={title} className="event-image" />
      <div className="event-details">
        <h2 className="event-title">{title}</h2>
        <div className="social-media-links">
          {foundPlatforms.map((platform, index) => (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
              {platform.icon}
            </a>
          ))}
        </div>
        <div className="review-stars">
          {Array.from({ length: parseInt(stars, 10) || 0 }, (_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <div className="price-range">{priceRange}</div>
        <p className="event-description">{description}</p>
      </div>
      <ul className="additional-details">
        {renderDetail('Date', date)}
        {renderDetail('Time', time)}
        {renderDetail('Venue', venue)}
        {renderDetail('Organizer', organizerName)}
        {renderDetail('Contact', organizerContact)}
        {renderDetail('Ticket Types', ticketTypes)}
        {renderDetail('Categories', categories)}
        {renderDetail('Tags', tags)}
        {renderDetail('Age Restrictions', ageRestrictions)}
        {renderDetail('Dress Code', dressCode)}
        {renderDetail('Accessibility', accessibilityInfo)}
        {renderDetail('Parking', parkingInfo)}
        
      </ul>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Add details to display in the modal */}
        <h2>{title}</h2>
        {websiteLink && (
         <div>
         <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="website-link">
         More Details
         </a>
         <CopyToClipboard text={`${window.location.origin}/event/${id}`} onCopy={handleCopy}>
           <button className="share-button">
             {copied ? 'Copied!' : 'Share This Event'}
             <FaCopy />
           </button>
         </CopyToClipboard>
       </div>
        )}
      </Modal>
      
    </div>
  );
};

WeekendList.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  organizerName: PropTypes.string.isRequired,
  organizerContact: PropTypes.string.isRequired,
  ticketTypes: PropTypes.string,
  priceRange: PropTypes.string,
  categories: PropTypes.string,
  tags: PropTypes.string,
  ageRestrictions: PropTypes.string,
  dressCode: PropTypes.string,
  accessibilityInfo: PropTypes.string,
  parkingInfo: PropTypes.string,
  websiteLink: PropTypes.string,
  socialMediaLinks: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  id: PropTypes.string.isRequired, // Prop for the individual event page link
};

export default WeekendList;
