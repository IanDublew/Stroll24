import React, { useEffect, useState } from 'react';

import '../css/Footer.css';

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoaded(true);
    }, 7000); // Change the delay to 7000 milliseconds (7 seconds)

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  const ads = [
    { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/ads%2FFXPESA.JPG?alt=media&token=7bed6b37-209b-4cdc-b58b-7be7d96320dc', 
    referralLink: 'https://portal.fxpesa.com/live-account/?clickid=32263&affid=C03350985' },
    
    { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/ads%2FYC%20L.JPG?alt=media&token=77910e26-0ace-4256-82b7-8707eedf3467',
     referralLink: 'https://web.yellowcard.io/auth/signup/?referral=83577181' },
    
  ];

  return (
    <footer className={`footer-container ${isLoaded ? 'visible' : 'hidden'}`}>
      {/* Your footer content */}
      <div className="footer-content">
        <p>AD BANNER</p>
      </div>
      <div className="ad-container">
        {ads.map((ad, index) => (
          <a key={index} href={ad.referralLink} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.imageUrl}
              alt={`Ad ${index + 1}`}
              className="ad-image"
              style={{ width: '100%', marginBottom: '5px' }}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
