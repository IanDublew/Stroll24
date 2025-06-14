import MenuDisplay from '../components/MenuDisplay';
const CaffeCassia ={

    id: 4,
    title: "Caffe Cassia",
    category: "Brunch",
    date: "August 6, 2024",
    preview: "Casual Cafe",
    minutes: 6,
    keywords: "Cafe Cassia, Casual cafe, Coffee and small plates, Breakfast and brunch spot, Lunch and dinner cafe, Dessert options, Counter service cafe, Family-friendly cafe, Good for kids, Group-friendly restaurant, Free parking cafe, Street parking, Free parking lot, Plenty of parking",
    content: (
      <>
        <div className="image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/images%2FCafe%20Cassia.jfif?alt=media&token=23b8f7b0-9cd9-4508-a93e-dc295f2ae016" 
          alt="Caffe Cassia" />
        </div>
        <h2>Overview</h2>
<p>
  Cafe Cassia is a charming spot for a casual meal, offering a relaxed atmosphere that's perfect for groups and families. With a menu that features coffee and small plates, it caters to a variety of tastes throughout the day. Whether you're looking for a hearty breakfast, a leisurely brunch, or a satisfying dinner, Cafe Cassia provides a welcoming environment with convenient service options.
</p>

<h2>Service Options</h2>
<p>
  Cafe Cassia offers flexible service options, including takeaway and dine-in, allowing you to enjoy their offerings however you prefer.
</p>

<h2>Offerings</h2>
<p>
  The menu includes a selection of coffee and small plates, ideal for a light meal or a quick snack.
</p>
<MenuDisplay 
        restaurantName="Caffe Cassia"
        menuImages={[
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FCaffeCassia%20drinks.png?alt=media&token=784d89e4-8a9f-471d-abb4-84b368006867",
            
            category: "Drinks & Refreshments",
            alt: "Caffe Cassia Drinks & Refreshments menu"
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/stroll-24.appspot.com/o/Menu%2FCaffeCassia.png?alt=media&token=5cd1bfa3-7c4a-43ca-8e35-eee7bfcc696b",
            category: "Drinks & Refreshments",
            alt: "Caffe Cassia Drinks & Refreshments menu"
          }
        ]}
      />
<h2>Dining Options</h2>
<p>
  Guests can enjoy a range of dining options, including breakfast, brunch, lunch, dinner, and dessert. The venue also offers counter service and ample seating to accommodate different group sizes.
</p>

<h2>Amenities</h2>
<p>
  The venue provides clean toilet facilities for the convenience of its guests.
</p>

<h2>Atmosphere</h2>
<p>
  Cafe Cassia has a casual atmosphere, making it a comfortable place for relaxed meals with friends or family.
</p>

<h2>Crowd</h2>
<p>
  The cafe is well-suited for groups, providing a friendly and accommodating environment for social gatherings.
</p>

<h2>Children</h2>
<p>
  Cafe Cassia is good for kids, making it a family-friendly destination where younger guests are welcome.
</p>

<h2>Parking</h2>
<p>
  Guests can benefit from free-of-charge street parking, a free parking lot, and plenty of parking spaces, ensuring convenient access to the cafe.
</p>


      </>
    )
}

export default CaffeCassia