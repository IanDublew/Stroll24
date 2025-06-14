import React, { useState, useEffect } from 'react';
import BannerNotification from './BannerNotification';

import '../css/Home.css';
import HomeBar from './HomeBar';

// Mock data or local notification message
const mockNotificationMessage = "This is a notification message. Click 'X' to dismiss. Assist Us in  Bringing this Site to Life by Contributing Below.";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState('hotels');
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const handleCancelNotification = () => {
    
    console.log('Notification cancelled');
  };

  useEffect(() => {
    // Fetch notification message from local or mock data
    setNotificationMessage(mockNotificationMessage);
  }, []);  

  return (
    <div>
      <HomeBar activeComponent={activeComponent} handleComponentChange={handleComponentChange} />
      <BannerNotification
        message={notificationMessage}
        onCancel={handleCancelNotification}
      />
    </div>
  );
};

export default Home;
