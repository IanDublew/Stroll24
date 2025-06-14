import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <>
      <button className={`toggle-btn ${isSidePanelOpen ? 'open' : ''}`} onClick={toggleSidePanel}>
        {isSidePanelOpen ? '✕' : '☰'}
      </button>
      <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" className="nav-link" onClick={toggleSidePanel}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link" onClick={toggleSidePanel}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/categories" className="nav-link" onClick={toggleSidePanel}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="nav-link" onClick={toggleSidePanel}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
