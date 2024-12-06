import React from 'react'
import './Home.css'

const Home = () => {
  const destinations = [
    { name: "Anna Nagar", image: "https://via.placeholder.com/150" },
    { name: "Velachery", image: "https://via.placeholder.com/150" },
    { name: "OMR", image: "https://via.placeholder.com/150" },
    { name: "Neelankarai", image: "https://via.placeholder.com/150" },
    { name: "Kovalam", image: "https://via.placeholder.com/150" },
];

const hotels = [
  {
      name: "Anna Nagar",
      location: "Near anna nagar tower par | 3.3 kms from VR Mall",
      image: "https://via.placeholder.com/200", // Replace with actual image URL
      price: "₹18,900",
      rating: 5,
      features: [
          "Free cancellation",
          "No prepayment needed — pay at the property",
      ],
  },
  {
      name: "Kovalam Resort",
      location: "500 meters from the Rajiv Gandhi Infotech Park",
      image: "https://via.placeholder.com/200", // Replace with actual image URL
      price: "₹25,300",
      rating: 4,
      features: [
          "Free cancellation",
          "No prepayment needed — pay at the property",
          "Free wifi",
          "Free lunch",
      ],
  },
  {
    name: "Velachery",
    location: "5.4 km from centre",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
    price: "₹11,300",
    rating: 5,
    features: [
        "Free cancellation",
        "No prepayment needed — pay at the property",
        "Free wifi",
    ],
},
{
    name: "OMR",
    location: "Weikfield IT City Infopark | 7.1 km from centre",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
    price: "₹14,599",
    rating: 3,
    features: [
        "Pets allowed",
        "Dinner + Lunch included",
        "Free wifi",
        "Free taxi from airport",
    ],
},
{
    name: "Green Park",
    location: "Xion Complex, | 14.2 km from centre",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
    price: "₹9,799",
    rating: 4.3,
    features: [
        "Pets allowed",
        "Free wifi",
        "Free cancellation",
        "No prepayment needed — pay at the property",
    ],
},
];
  return (
    <div>
<div className="search-bar-container">
            <h1>Discover your perfect stay around the globe</h1>
            <p>Enter your dates to see the latest prices and begin your journey of relaxation and adventure today.</p>
            <div className="search-bar">
                <div className="search-input">
                    <span className="icon">&#128205;</span> 
                    <input type="text" placeholder="Chennai" />
                </div>
                <div className="search-input">
                    <span className="icon">&#128197;</span> 
                    <input type="date" placeholder="Check-in" />
                </div>
                <div className="search-input">
                    <span className="icon">&#128197;</span>
                    <input type="date" placeholder="Check-out" />
                </div>
                <div className="search-input">
                    <span className="icon">&#128101;</span>
                    <input type="number" placeholder="No. Of Guests" />
                </div>
                <button className="search-button">SEARCH</button>
            </div>

            <div className="destinations-container">
            <h2>Book Hotels at Popular Destinations</h2>
            <div className="destinations-grid">
                {destinations.map((destination, index) => (
                    <div key={index} className="destination-card">
                        <img src={destination.image} alt={destination.name} />
                        <p>{destination.name}</p>
                    </div>
                ))}
            </div>
            <h3>Handpicked nearby hotels for you</h3>
        </div>
        </div>
        <div className="hotel-list-container">
            {hotels.map((hotel, index) => (
                <div key={index} className="hotel-card">
                    <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                    <div className="hotel-details">
                        <h3>{hotel.name}</h3>
                        <p className="hotel-location">{hotel.location}</p>
                        <ul className="hotel-features">
                            {hotel.features.map((feature, i) => (
                                <li key={i}>&#10003; {feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="hotel-price">
                        <div className="hotel-rating">
                            <span>{hotel.rating}</span>
                            <span>★</span>
                        </div>
                        <p>{hotel.price}</p>
                        <button className="book-button">Book now</button>
                    </div>
                </div>
            ))}
        </div>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Company Info</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/faqs">FAQs</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Newsletter</h4>
                    <p>Stay updated with our latest trends</p>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Designed and styled by Sundaravel</p>
                <p>© 2024 Sundaravel . All rights reserved.</p>
            </div>
        </footer>
    </div>

    
  )
}

export default Home