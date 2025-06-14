import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from '../firebase.config';
import WeekendList from './WeekendList';
import Footer from './Footer';


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const IndividualWeekendList = () => {
  const { id } = useParams();
  const [weekend, setWeekendDetails] = useState(null);

  useEffect(() => {
    const fetchWeekendDetails = async () => {
      try {
        const doc = await db.collection('weekendevent').doc(id).get();

        if (doc.exists) {
          setWeekendDetails({
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

    fetchWeekendDetails();
  }, [id]);

  return (
    <div className="weekend-page-container">
      <h2 className="component-heading">Event</h2>
      {/* Render the details for the individual weekend */}
      {weekend ? (
        <>
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
          socialMediaLinks={weekend.socialMediaLinks ? weekend.socialMediaLinks.split(',').map(link => link.trim()) : []}
          id={weekend.id} 
        />
        <Footer /> 
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndividualWeekendList;
