import React from 'react';
import { FaHotel,FaMountain, FaBus, FaCalendarAlt, FaSkating } from 'react-icons/fa';
import HotelsPage from './HotelsPage';
import TransportPage from './TransportPage';
import WeekendPage from './WeekendPage';
import SightsPage from './SightsPage';
import ActivitiesPage from './ActivitiesPage';

import '../css/Home.css';

const HomeBar = ({ activeComponent, handleComponentChange }) => {
  const getComponentHeading = () => {
    switch (activeComponent) {
      case 'hotels':
        return 'Restaurants';
      case 'transportPage':
        return 'Transport';
      case 'sightsPage':
        return 'Sights';
      case 'activitiesPage':
        return 'Activities';
      case 'weekendPage':
        return 'Events';
      default:
        return '';
    }
  };

  return (
    <div>
      <h2 className="component-heading">{getComponentHeading()}</h2>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className={activeComponent === 'hotels' ? 'active hotel-button' : 'hotel-button' }
            onClick={() => {
              handleComponentChange('hotels');
            }}
          >
            <FaHotel />
            <span> Restaurants</span>
          </button>
          <button
            className={activeComponent === 'transportPage' ? 'active transport-button' : 'transport-button'}
            onClick={() => {
              handleComponentChange('transportPage');
            }}
          >
            <FaBus />
            <span> Transport</span>
          </button>
          <button
            className={activeComponent === 'sightsPage' ? 'active sights-button' : 'sights-button'}
            onClick={() => {
              handleComponentChange('sightsPage');
            }}
          >
            <FaMountain />
            <span> Sights</span>
          </button>
          <button
            className={activeComponent === 'activitiesPage' ? 'active activities-button' : 'activities-button'}
            onClick={() => {
              handleComponentChange('activitiesPage');
            }}
          >
            <FaSkating />
            <span> Activities</span>
          </button>
          <button
            className={activeComponent === 'weekendPage' ? 'active weekend-button' : 'weekend-button'}
            onClick={() => {
              handleComponentChange('weekendPage');
            }}
          >
            <FaCalendarAlt />
            <span> Events</span>
          </button>
        </div>
        <div className="component-container">
          {activeComponent === 'hotels' && <HotelsPage />}
          {activeComponent === 'transportPage' && <TransportPage />}
          {activeComponent === 'weekendPage' && <WeekendPage />}
          {activeComponent === 'sightsPage' && <SightsPage />}
          {activeComponent === 'activitiesPage' && <ActivitiesPage />}
        </div>
      </nav>
    </div>
  );
};

export default HomeBar;
