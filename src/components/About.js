import React from "react";
import image1 from "../images/Stroll24.png";
function About({ about }) {
  const defaultImage = "https://via.placeholder.com/215";
  const altText = "blog logo";

  
  return (
    <aside>
      <img src={image1 || defaultImage} alt={altText} />
      <p>{about}</p>
    </aside>
  );
}

export default About;