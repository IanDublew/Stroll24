// IndividualSightList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from '../firebase.config';
import SightsList from './SightsList';
import Footer from './Footer'; 


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const IndividualSightList = () => {
    
  const { id } = useParams();
  const [sight, setSightDetails] = useState(null);

  useEffect(() => {
    const fetchSightDetails = async () => {
      try {
        const doc = await db.collection('sights').doc(id).get();

        if (doc.exists) {
          setSightDetails({
            id: doc.id,
            ...doc.data(),
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchSightDetails();
  }, [id]);

  return (
    <div className="sight-page-container">
      <h2 className="component-heading">Sight</h2>
      {/* Render the details for the individual sight */}
      {sight ? (
        <>
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
          <Footer /> 
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualSightList;
