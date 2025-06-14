import MenuDisplay from '../components/MenuDisplay';

const   MamboItalia = {
    id: 6,
    title: "Mambo Italia",
    category: "Italian",
    date: "January 12, 2024",
    preview: "A Culinary Fiesta with a Touch of Elegance",
    minutes: 10,
    keywords: "Mambo Italia, Italian restaurant Nairobi, best Italian food Nairobi, Mambo Italia menu, fast service restaurant Nairobi, great cocktails Nairobi, rooftop seating Nairobi, sports bar Nairobi, outdoor seating Italian restaurant Nairobi, no-contact delivery Nairobi, takeaway Italian food Nairobi, vegan options Nairobi, vegetarian options Nairobi, happy hour Nairobi, healthy dishes Nairobi, organic food Nairobi, quick bites Nairobi, brunch in Nairobi, lunch spots Nairobi, dinner in Nairobi, catering Italian food Nairobi, sweet desserts Nairobi, casual dining Nairobi, group dining Nairobi, family-friendly Italian restaurant Nairobi, kids' menu Nairobi, Nairobi restaurant with bar, clean toilets restaurant Nairobi, free Wi-Fi restaurant Nairobi, Nairobi restaurant with parking, Nairobi Italian culinary experience",
    content: (
      <>
        <div className="image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/images%2FMambo%20italia.jfif?alt=media&token=df4bc948-50bc-4fe6-ac4c-66277baec080" 
          alt="Mambo Italia" />
        </div>
  
        <h2>Service Options</h2>
        <p>
          Mambo Italia caters to various preferences with a range of service options. Whether you prefer the fresh air of outdoor seating, the convenience of no-contact delivery, a quick takeaway, or a leisurely dine-in experience, Mambo Italia offers it all.
        </p>
  
        <h2>Highlights</h2>
        <p>
          Enjoy the essence of fast service, sip on great cocktails, and elevate your dining experience with rooftop seating. Sports enthusiasts will appreciate the atmosphere that complements their passion for the game.
        </p>
  
        <h2>Accessibility</h2>
        <p>
          Mambo Italia is committed to providing accessibility for all. With wheelchair-accessible facilities, including a car park, entrance, lift, seating, and toilets, the restaurant ensures a comfortable and inclusive experience.
        </p>
  
        <h2>Offerings</h2>
        <p>
          From alcoholic beverages like beer, cocktails, and spirits to non-alcoholic options like coffee, Mambo Italia caters to diverse preferences. Enjoy happy-hour drinks, explore healthy and organic dishes, or grab a quick bite with small plates. Vegan and vegetarian options are also available, along with a selection of wines.
        </p>
  
        <h2>Dining Options</h2>
        <p>
          Whether you're starting your day with a delicious breakfast, indulging in a brunch, having a satisfying lunch or dinner, planning a catering event, or treating yourself to a sweet dessert, Mambo Italia has a diverse menu to satisfy your cravings.
        </p>
        <MenuDisplay 
        restaurantName="Mambo Italia"
        menuImages={[
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2Fmambo_italia_menu_1.jpg?alt=media&token=35471280-c224-46af-9765-b514d7cd7824",
            
            category: "AntiPasti",
            alt: " AntiPasti Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2Fmambo_italia_menu_2.jpg?alt=media&token=d6e6be02-3eaa-4993-8ce3-7fd088aab4da",
            category: "Red Pizza Menu",
            alt: "Red Pizza Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2Fmambo_italia_menu_3.jpg?alt=media&token=38b93cef-a001-4b13-997c-a4f6dee6c41e",
            category: "White Pizza Menu",
            alt: " White Pizza Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2Fmambo_italia_menu_6.jpg?alt=media&token=62f8f183-d44b-4978-9641-414d3020b1f8",
            category: "Salads, Sides Menu",
            alt: "Salads, Sides Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2Fmambo_italia_menu_8.jpg?alt=media&token=f46f0e7e-e2c7-4933-9946-6b2d851ab5f1",
            category: "Kids Menu",
            alt: "Kids Menu"
          },
        ]}
      />
        <h2>Amenities</h2>
        <p>
          Mambo Italia creates a casual and cozy atmosphere, making it family-friendly and ideal for group gatherings. Amenities include a well-stocked bar, clean toilets, and free Wi-Fi for those who want to stay connected while enjoying their meal.
        </p>
  
        <h2>Planning and Payments</h2>
        <p>
          Planning your visit is made easy with the option to make reservations. Payments can be conveniently made using credit cards or debit cards, ensuring a hassle-free experience.
        </p>
  
        <h2>Children and Parking</h2>
        <p>
          Families with kids are not only welcome but celebrated. High chairs are available, and there's a special kids' menu to cater to the younger guests. Parking is convenient with a free parking lot and plenty of spaces.
        </p>
      </>
    ),

}

export default MamboItalia