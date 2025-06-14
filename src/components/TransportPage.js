import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import TransportCard from './TransportCard';
import firebaseConfig from '../firebase.config';
import '../css/TransportCard.css';
import Footer from './Footer';
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const TransportPage = () => {
  const [transport, setTransport] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransport, setFilteredTransport] = useState([]);

  useEffect(() => {
    const fetchTransport = async () => {
      const snapshot = await db.collection('transport').get();
      const fetchedTransport = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setTransport(fetchedTransport);
    };

    fetchTransport();
  }, []);

  useEffect(() => {
    // Perform filtering based on searchQuery
    const filtered = transport.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.priceRange.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredTransport(filtered);
  }, [searchQuery, transport]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Add search bar */}
      <input
        type="text"
        placeholder="Search by Company, Price, Review Score "
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {/* Render the transport cards using TransportCard */}
      <div className="transport-page-container">
        {filteredTransport.map((item) => (
          <TransportCard
            key={item.id}
            title={item.title}
            priceRange={item.priceRange}
            link={item.link}
            description={item.description}
            imageSrc={item.imageURL}
            stars={item.stars}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default TransportPage;
