import MenuDisplay from '../components/MenuDisplay';

const ForYouChineseRestaurant ={
    id: 8,
    title: "For You Chinese Restaurant",
    category: "Chinese",
    date: "January 17, 2024",
    preview: "A Taste of Authentic Chinese Cuisine",
    minutes: 7,
    keywords: "For You Chinese Restaurant, authentic Chinese cuisine Nairobi, fast service Chinese restaurant Nairobi, great cocktails Nairobi, diverse menu Nairobi, outdoor seating Chinese restaurant Nairobi, no-contact delivery Nairobi, quick takeaway Chinese food Nairobi, dine-in experience Nairobi, wheelchair-accessible Chinese restaurant Nairobi, halal options Nairobi, organic dishes Nairobi, vegan options Nairobi, vegetarian options Nairobi, quick bites Nairobi, small plates Nairobi, late-night food Nairobi, brunch in Nairobi, lunch spots Nairobi, dinner in Nairobi, catering Chinese food Nairobi, sweet desserts Nairobi, casual dining Nairobi, family-friendly restaurant Nairobi, kids' menu Nairobi, Nairobi restaurant with bar, clean toilets restaurant Nairobi, free parking restaurant Nairobi, Nairobi Chinese culinary experience",
    content: (
      <>
        <div className="image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/images%2FFor%20You%20Restaurant.jfif?alt=media&token=b243564c-eacd-4a79-975a-be26e2e9b5be" alt="For You Chinese Restaurant" />
        </div>
        <h2>Overview</h2>
        <p>
          For You Chinese Restaurant invites you on a gastronomic journey to experience the authentic flavors of Chinese cuisine. Nestled in a cozy setting, this restaurant is dedicated to providing fast service, great cocktails, and a diverse menu to cater to various preferences.
        </p>
  
        <h2>Service Options</h2>
        <p>
          For You Chinese Restaurant offers a variety of service options to enhance your dining experience. Whether you prefer the fresh air of outdoor seating, the convenience of no-contact delivery, a quick takeaway, or a relaxed dine-in experience, the restaurant is designed to accommodate your preferences seamlessly.
        </p>
  
        <h2>Highlights</h2>
        <p>
          Enjoy the efficiency of fast service and elevate your experience with great cocktails that complement the rich flavors of Chinese cuisine. For You Chinese Restaurant strives to create a delightful blend of taste and ambiance for its patrons.
        </p>
  
        <h2>Accessibility</h2>
        <p>
          For You Chinese Restaurant prioritizes accessibility for all guests. The establishment features wheelchair-accessible facilities, including a car park, entrance, seating, and toilets, ensuring a comfortable and inclusive environment for everyone.
        </p>
  
        <h2>Offerings</h2>
        <p>
          Explore a diverse range of offerings, from alcoholic beverages like beer, cocktails, and spirits to non-alcoholic options like coffee. For You Chinese Restaurant caters to various dietary preferences with late-night food, organic dishes, vegan and vegetarian options, quick bites, small plates, and a curated selection of wines.
        </p>
        <MenuDisplay 
        restaurantName="For You Chinese Restaurant"
        menuImages={[
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FForYouMain.jpeg?alt=media&token=e8928f06-2933-4020-a4d7-bd6651969d8f",
            category: "Main Menu 1",
            alt: "For You Chinese Restaurant Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FForYouMain2.jpeg?alt=media&token=fc0b0beb-b81b-4153-8b9e-1efebda9f262",
            category: "Main Menu 2",
            alt: "For You Chinese Restaurant Menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FForYouCockTail.jpeg?alt=media&token=4a430348-f727-4060-8c24-c40c370ae29e",
            category: "Cocktail",
            alt: " For You Chinese Restaurant Cocktail Menu"
          },
          
          
        ]}
      />
        <h2>Dining Options</h2>
        <p>
          Whether you're starting your day with a delightful brunch, enjoying a satisfying lunch or dinner, planning a catering event, or treating yourself to a sweet dessert, For You Chinese Restaurant provides a variety of dining options to suit different occasions.
        </p>
  
        <h2>Amenities</h2>
        <p>
          For You Chinese Restaurant creates a casual and cozy atmosphere, making it an ideal place for families, groups, and individuals alike. Amenities include a well-stocked bar and clean toilets, contributing to a pleasant dining experience.
        </p>
  
        <h2>Planning and Payments</h2>
        <p>
          Planning your visit is made easy with For You Chinese Restaurant accepting reservations. Payments can be conveniently made using credit cards, ensuring a smooth and hassle-free experience for patrons.
        </p>
  
        <h2>Children and Parking</h2>
        <p>
          Families with kids are warmly welcomed, and special accommodations include high chairs and a dedicated kids' menu. Parking is convenient with a free parking lot and ample spaces for patrons.
        </p>
      </>
    ),

}

export default ForYouChineseRestaurant