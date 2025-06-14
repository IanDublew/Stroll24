import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import SightsList from './SightsList';
import firebaseConfig from '../firebase.config';
import '../css/SightsList.css';


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const SightsPage = () => {
    const [sights, setSights] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSights, setFilteredSights] = useState([]);
  
    useEffect(() => {
      const fetchSights = async () => {
        const snapshot = await db.collection('sights').get();
        const fetchedSights = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSights(fetchedSights);
      };
  
      fetchSights();
    }, []);
  
    useEffect(() => {
      // Perform filtering based on searchQuery
      const filtered = sights.filter((sight) =>
        sight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sight.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sight.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        removeCommas(sight.admissionFee).includes(removeCommas(searchQuery.toString())) ||
        sight.specialEvents.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      setFilteredSights(filtered);
    }, [searchQuery, sights]);
  
    const removeCommas = (str) => str.replace(/,/g, '');

    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    return (
      <div>
        {/* Add search bar */}
        <input
          type="text"
          placeholder="Search by Price, Location or Activitiy..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
  
        {/* Render the sight cards using SightsList */}
        <div className="sight-page-container">
          {filteredSights.map((sight) => (
            <SightsList
              key={sight.id}
              title={sight.title}
              description={sight.description}
              location={sight.location}
              googlemapsLink={sight.googlemapsLink}
              openingHours={sight.openingHours}
              admissionFee={sight.admissionFee}
              contactInformation={sight.contactInformation}
              rating={sight.rating}
              accessibilityInformation={sight.accessibilityInformation}
              nearbyAttractions={sight.nearbyAttractions}
              specialEvents={sight.specialEvents}
              imageURL={sight.imageURL}
              id={sight.id}
            />
          ))}
        </div>
      </div>
    );
  };

export default SightsPage;
