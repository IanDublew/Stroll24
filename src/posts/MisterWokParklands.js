import MenuDisplay from '../components/MenuDisplay';

const MisterWokParklands = {
    id: 7,
    title: "Mister Wok Parklands",
    category: "Chinese",
    date: "January 15, 2024",
    preview: "A Culinary Haven with Asian Flair",
    minutes: 6,
    keywords: "mister wok parklands menu, mister wok parklands",
    content: (
      <>
        <div className="image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/images%2FMister%20Wok.jfif?alt=media&token=ee15a883-997f-4d50-b941-2678c42f87f3       " alt="Mister Wok Parklands" />
        </div>
      
        <h2>Service Options</h2>
        <p>
          Mister Wok Parklands understands the importance of choice, offering a variety of service options. Whether you prefer the fresh air of outdoor seating, the convenience of kerbside pickup, no-contact delivery, a quick takeaway, or a relaxed dine-in experience, Mister Wok Parklands has you covered.
        </p>
  
        <h2>Highlights</h2>
        <p>
          Enjoy the efficiency of fast service and elevate your dining experience with great cocktails that complement the flavors of the menu. The restaurant promises a perfect blend of taste and ambiance.
        </p>
  
        <h2>Accessibility</h2>
        <p>
          Mister Wok Parklands is committed to providing accessibility for all. With wheelchair-accessible facilities, including a car park, entrance, seating, and toilets, the restaurant ensures a comfortable and inclusive experience for every guest.
        </p>
  
        <h2>Offerings</h2>
        <p>
          Explore a diverse range of offerings, from alcoholic beverages like beer, cocktails, and spirits to non-alcoholic options like coffee. Mister Wok Parklands caters to various dietary preferences with halal, healthy, organic, vegan, and vegetarian options. Whether you're looking for a quick bite, small plates, or a selection of wines, the menu has something for everyone.
        </p>
        <MenuDisplay 
        restaurantName="Mister Wok Parklands"
        menuImages={[
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FMrWokBeef.png?alt=media&token=4a3eb714-52d6-492c-8d71-e54020dee04a",
            category: "Beef Menu",
            alt: "Mister Wok Parklands Beef Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FMrWokChicken.png?alt=media&token=eea13b8f-9c4a-4411-be33-85e592a0cc5d",
            category: "Chicken Menu",
            alt: "Mister Wok Parklands Chicken Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FMrWokSeafood.png?alt=media&token=ad1b14cc-9961-480b-9d3e-b597f61f8b55",
            category: "Seafood",
            alt: "Mister Wok Parklands Seafood Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FMrWokVeggy.png?alt=media&token=68b66944-da6e-49e3-9f2a-165e5993cd2a",
            category: "Vegetarian",
            alt: "Mister Wok Parklands Vegetarian Menu"
          },
          
          
        ]}
      />
        <h2>Dining Options</h2>
        <p>
          Whether you're starting your day with a delightful brunch, enjoying a satisfying lunch or dinner, planning a catering event, or treating yourself to a sweet dessert, Mister Wok Parklands offers diverse dining options to suit various occasions.
        </p>
  
        <h2>Amenities</h2>
        <p>
          Mister Wok Parklands provides a casual and cozy atmosphere, making it family-friendly and ideal for group gatherings. Amenities include a well-stocked bar and clean toilets for a pleasant dining experience.
        </p>
  
        <h2>Planning and Payments</h2>
        <p>
          Plan your visit with ease as Mister Wok Parklands accepts reservations. Payments are convenient with options including credit cards and debit cards, ensuring a smooth and hassle-free experience.
        </p>
  
        <h2>Children and Parking</h2>
        <p>
          Families with kids are welcomed with open arms. High chairs are available, and there's a special kids' menu for the little ones. Parking is convenient with a free parking lot and plenty of spaces.
        </p>
  
      </>
    ),
}

export default MisterWokParklands