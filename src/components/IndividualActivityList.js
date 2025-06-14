// IndividualActivityList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from '../firebase.config';
import ActivitiesList from './ActivitiesList';
import Footer from './Footer'; 


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const IndividualActivityList = () => {
  const { id } = useParams();
  const [activity, setActivityDetails] = useState(null);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const doc = await db.collection('activities').doc(id).get();

        if (doc.exists) {
          setActivityDetails({
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

    fetchActivityDetails();
  }, [id]);

  return (
    <div className="activity-page-container" >
      <h2 className="component-heading">Activity</h2>
      {/* Render the details for the individual activity */}
      {activity ? (
        <>
          <ActivitiesList
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
          <Footer /> 
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualActivityList;
