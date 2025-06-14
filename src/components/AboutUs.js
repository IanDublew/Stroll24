import React from "react";
import aboutImage from "../images/Stroll24.png";
import {
  FaEnvelope,
  FaCoffee, 
  FaRedditAlien,
  
} from 'react-icons/fa';

import "../css/AboutUs.css";

function AboutUs() {
  const subredditLink = "https://www.reddit.com/r/stroll24";

  return (
    <div className="about-us-container">
      <img src={aboutImage} alt="About Us" className="about-image" />
      <div className="about-description">
        <p >🔆For Redditors, By Redditors🔆</p>
        <p>🙂🙂🙂</p>


        <h1>Join Our Subreddit</h1>
        <a href={subredditLink} 
        target="_blank" rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: '#61dafb', fontSize: '40px'}}>
               <FaRedditAlien />
        </a>
        <h1>FeedBack</h1>
        <a href="" 
        target="_blank" rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: '#61dafb', fontSize: '40px'}}>
               <FaEnvelope />
        </a>
        
        <h1>Buy Us Coffee</h1>
        <a href="" 
        target="_blank" rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: '#61dafb', fontSize: '40px',}}>
               <FaCoffee />
        </a>
        
      </div>
    </div>
  );
}

export default AboutUs;
