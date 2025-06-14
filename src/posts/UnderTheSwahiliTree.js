import MenuDisplay from '../components/MenuDisplay';
const UnderTheSwahiliTree ={

    id: 42,
    title: "Under The Swahili Tree",
    category: "Swahili",
    date: "October 24, 2024",
    preview: "Casual Dining Spot",
    minutes: 8,
    keywords: "Under The Swahili Tree, Casual dining, Coffee and cocktails, Vegan options, Family-friendly, Group-friendly, Reservations, Wheelchair accessible, Outdoor seating, Late-night food, Kids menu, Ample parking",
    content: (
      <>
        <div className="image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/images%2FUnderTheSwahiliTree.jpg?alt=media&token=1c4e1b4e-77d8-4a58-9626-d0d48440ca1b" alt="Under The Swahili Tree" />
        </div>
        <h2>Overview</h2>
<p>
  Under The Swahili Tree offers a warm, inviting dining experience, combining casual charm with an array of flavorful offerings. Whether you're stopping by for a coffee, a crafted cocktail, or a full meal, the relaxed and cozy atmosphere makes it perfect for both family gatherings and nights out with friends. With a spacious seating arrangement and accessible amenities, this spot ensures a comfortable experience for all guests.
</p>

<h2>Accessibility</h2>
<p>
  Designed to accommodate all guests, Under The Swahili Tree provides a wheelchair-accessible car park, entrance, seating, and toilets, making it a welcoming destination for everyone.
</p>

<h2>Service Options</h2>
<p>
  The restaurant offers flexible service options, including outdoor seating, delivery, takeaway, and dine-in, allowing patrons to enjoy their meals in a way that best suits their preference.
</p>

<h2>Offerings</h2>
<p>
  From coffee and small plates to cocktails, wine, and a range of beers, Under The Swahili Tree caters to diverse tastes. Guests can also enjoy late-night food, vegan, and vegetarian options, making it ideal for various dietary preferences.
</p>
<MenuDisplay 
        restaurantName="Under The Swahili Tree"
        menuImages={[
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FUndertheSwahiliTreeMain.jpg?alt=media&token=1942463c-4c59-4462-aaeb-057abdca7a7f",
            category: "Food",
            alt: "Under The Swahili Tree Food menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FUndertheSwahiliTreeWines.jpg?alt=media&token=37eb20c1-9944-44f9-a2ed-8679d0b7cdb7",
            category: "Wines",
            alt: " Under The Swahili Tree Wines menu"
          },
          
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FUndertheSwahiliTreePizzas.jpg?alt=media&token=789f1d8e-6bd7-47c7-be10-c7cfe4e47f10",
            category: "Pizza",
            alt: "Under The Swahili Tree Food menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FUndertheSwahiliTreeDrinks.jpg?alt=media&token=5609e32c-2675-45bd-af53-675f706e786b",
            category: "Drinks",
            alt: "Under The Swahili Tree Drinks menu"
          }
        ]}
      />
<h2>Dining Options</h2>
<p>
  Whether it's breakfast, brunch, lunch, dinner, or dessert, Under The Swahili Tree provides an all-day dining experience. They also offer catering services for events and celebrations, ensuring that every occasion is well-served.
</p>

<h2>Amenities</h2>
<p>
  The restaurant is equipped with a bar on site and clean toilet facilities, adding to the convenience and comfort for all guests.
</p>

<h2>Atmosphere</h2>
<p>
  Enjoy a cozy and casual vibe that sets the perfect mood for leisurely meals, intimate conversations, or group gatherings.
</p>

<h2>Crowd</h2>
<p>
  Under The Swahili Tree is group-friendly, providing ample space for gatherings with family, friends, or coworkers.
</p>

<h2>Planning</h2>
<p>
  Reservations are accepted, making it easy to plan ahead for larger groups or special occasions.
</p>

<h2>Payments</h2>
<p>
  For added convenience, credit card payments are accepted.
</p>

<h2>Children</h2>
<p>
  With amenities for families, including high chairs, a kids' menu, and suitability for children's birthday celebrations, Under The Swahili Tree is a family-friendly dining spot.
</p>

<h2>Parking</h2>
<p>
  Guests can enjoy free street parking, a complimentary parking lot, and ample parking spaces, ensuring easy access to the restaurant.
</p>

      </>
    )
}

export default UnderTheSwahiliTree;
