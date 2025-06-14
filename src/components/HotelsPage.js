import React, { useState, useEffect, useMemo } from 'react';
import HotelCard from './HotelCard';
import Footer from './Footer'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from '../firebase.config';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const HotelsPage = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    const fetchCards = async () => {
      const snapshot = await db.collection('cards').get();
      const fetchedCards = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        categories: doc.data().category.split(',').map(category => category.trim())
      }));
      setCards(fetchedCards);
  
      const uniqueCategories = [...new Set(fetchedCards.flatMap(card => card.categories))].filter(Boolean);
      setCategories(['All', ...uniqueCategories]);
    };
  
    fetchCards();
  }, []);
  
  useEffect(() => {
    let filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.stars.toLowerCase() === searchQuery.toLowerCase()
    );
  
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter((card) => card.categories.includes(selectedCategory));
    }
  
    setFilteredCards(filtered);
  }, [searchQuery, selectedCategory, cards]);
  
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
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

  // Use useMemo to shuffle the filtered cards
  const shuffledCards = useMemo(() => shuffleArray(filteredCards), [filteredCards]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Restaurant, Category, or Review Score..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      <div className="category-container">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`category-tag ${selectedCategory === category ? 'selected' : ''}`}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="hotels-page-container">
        {shuffledCards.map((card) => (
          <HotelCard
            key={card.id}
            imageSrc={card.imageURL}
            title={card.title}
            stars={card.stars}
            description={card.description}
            link={card.link}
            googlemapsLink={card.googlemapsLink}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default HotelsPage;