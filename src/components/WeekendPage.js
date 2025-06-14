import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from '../firebase.config';
import '../css/WeekendList.css';
import WeekendList from './WeekendList';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const WeekendPage = () => {
  const [weekendEvents, setWeekendEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchWeekendEvents = async () => {
      const snapshot = await db.collection('weekendevent').orderBy('date', 'desc').get();
      const fetchedWeekendEvents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setWeekendEvents(fetchedWeekendEvents);
    };

    fetchWeekendEvents();
  }, []);

  useEffect(() => {
    // Perform filtering based on searchQuery
    const filtered = weekendEvents.filter((event) =>
      (event.title && event.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (event.priceRange && removeCommas(event.priceRange).includes(removeCommas(searchQuery.toLowerCase()))) ||
      (event.date && event.date.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (event.time && event.time.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (event.priceRange && event.priceRange.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
    setFilteredEvents(filtered);
  }, [searchQuery, weekendEvents]);
  

  const removeCommas = (str) => str.replace(/,/g, '');
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Add search bar */}
      <input
        type="text"
        placeholder="Search by Event, Price, Date, or Time ..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {/* Render the weekend events using WeekendList */}
      <div className="weekend-page-container">
        {filteredEvents.map((weekend) => {
          // Convert socialMediaLinks to an array if it's a comma-separated string
          const socialMediaLinksArray = weekend.socialMediaLinks
            ? weekend.socialMediaLinks.split(',').map(link => link.trim())
            : [];

          return (
            <WeekendList
              key={weekend.id}
              imageURL={weekend.imageURL}
              title={weekend.title}
              stars={weekend.stars}
              description={weekend.description}
              date={weekend.date}
              time={weekend.time}
              venue={weekend.venue}
              organizerName={weekend.organizerName}
              organizerContact={weekend.organizerContact}
              ticketTypes={weekend.ticketTypes}
              priceRange={weekend.priceRange}
              categories={weekend.categories}
              tags={weekend.tags}
              ageRestrictions={weekend.ageRestrictions}
              dressCode={weekend.dressCode}
              accessibilityInfo={weekend.accessibilityInfo}
              parkingInfo={weekend.parkingInfo}
              websiteLink={weekend.websiteLink}
              socialMediaLinks={socialMediaLinksArray}
              id={weekend.id}
            />
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default WeekendPage;
