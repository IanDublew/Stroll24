import React, { useEffect, useState, useMemo } from 'react';
import '../css/ActivitiesList.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import ActivitiesList from './ActivitiesList';
import firebaseConfig from '../firebase.config';
import Footer from './Footer';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const snapshot = await db.collection('activities').get();
        const fetchedActivities = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log('Fetched activities:', fetchedActivities);
        setActivities(fetchedActivities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  useEffect(() => {
    // Perform filtering based on searchQuery
    const filtered = activities.filter((activity) =>
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.specialEvents.toLowerCase().includes(searchQuery.toLowerCase()) ||
      removeCommas(activity.admissionFee).includes(removeCommas(searchQuery.toString()))
    );

    setFilteredActivities(filtered);
  }, [searchQuery, activities]);

  const removeCommas = (str) => str.replace(/,/g, '');
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Use useMemo to shuffle the filtered activities
  const shuffledActivities = useMemo(() => shuffleArray(filteredActivities), [filteredActivities]);

  return (
    <div>
      {/* Add search bar */}
      <input
        type="text"
        placeholder="Search by Price, Location or Activity..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {/* Render the activity cards using ActivitiesList */}
      <div className="activity-page-container">
        {shuffledActivities.map((activity) => (
          <ActivitiesList
            key={activity.id}
            title={activity.title}
            description={activity.description}
            location={activity.location}
            openingHours={activity.openingHours}
            admissionFee={activity.admissionFee}
            contactInformation={activity.contactInformation}
            rating={activity.rating}
            accessibilityInformation={activity.accessibilityInformation}
            specialEvents={activity.specialEvents}
            websiteLink={activity.websiteLink}
            imageURL={activity.imageURL}
            id={activity.id}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ActivitiesPage;