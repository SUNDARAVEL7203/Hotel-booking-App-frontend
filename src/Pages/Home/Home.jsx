import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import to access the Redux state

const Home = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth); // Get user state from Redux

    const destinations = [
        { name: "Anna Nagar", image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734180908/bxjknhq90ak98lzopxeb.jpg" },
        { name: "Velachery", image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734181351/n5v2lcrvlmhuk14tfmat.png" },
        { name: "OMR", image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734181741/rlqjtshgcurwyxvjjbsr.png" },
        { name: "Neelankarai", image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734185127/d0ktkegpa0ufpxdq4ot1.png" },
        { name: "Kovalam", image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734185442/wmbnr7hwaj7svm0mp2le.png" },
    ];

    const hotels = [
        {
            name: "Anna Nagar",
            id: 9,
            location: "Near anna nagar tower par | 3.3 kms from VR Mall",
            image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734186662/u6smwkdunoqqf5y0posx.png",
            price: "18,900",
            rating: 5,
            features: [
                "Free cancellation",
                "No prepayment needed — pay at the property",
            ],
        },
        {
            name: "Kovalam Resort",
            id: 10,
            location: "500 meters from the Rajiv Gandhi Infotech Park",
            image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734185442/wmbnr7hwaj7svm0mp2le.png",
            price: "25,300",
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
            id: 11,
            location: "5.4 km from centre",
            image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734187174/hwqgkos9fv6dwhuge1cs.png",
            price: "11,300",
            rating: 5,
            features: [
                "Free cancellation",
                "No prepayment needed — pay at the property",
                "Free wifi",
            ],
        },
        {
            name: "OMR",
            id: 12,
            location: "Weikfield IT City Infopark | 7.1 km from centre",
            image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734187893/zkasbrfcqeoshxbp3o10.png",
            price: "14,599",
            rating: 3,
            features: [
                "Pets allowed",
                "Dinner + Lunch included",
                "Free wifi",
                "Free taxi from airport",
            ],
        },
        {
            name: "Neelankarai",
            id: 13,
            location: "Xion Complex, | 14.2 km from centre",
            image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734188106/ky86xvfrwtfxxqkijgqd.png",
            price: "9,799",
            rating: 4.3,
            features: [
                "Pets allowed",
                "Free wifi",
                "Free cancellation",
                "No prepayment needed — pay at the property",
            ],
        },
    ];

    const today = new Date().toISOString().split('T')[0];
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('');

    const handleSearch = () => {
        if (!location || !checkIn || !checkOut || !guests) {
            alert('Please fill all the details');
        } else {
            window.location.href = '/Hotels';
        }
    };


    return (
        <div>
            <div className="search-bar-container">
                <h1>Discover your perfect stay around the globe</h1>
                <p>Enter your dates to see the latest prices and begin your journey of relaxation and adventure today.</p>
                <div className="search-bar">
                    <div className="search-input">
                        <span className="icon">&#128205;</span>
                        <input
                            type="text"
                            placeholder="Chennai"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="search-input">
                        <span className="icon">&#128197;</span>
                        <input
                            type="date"
                            placeholder="Check-in"
                            value={checkIn}
                            min={today} // Restrict to today or later
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>
                    <div className="search-input">
                        <span className="icon">&#128197;</span>
                        <input
                            type="date"
                            placeholder="Check-out"
                            value={checkOut}
                            min={checkIn || today} // Ensure check-out is after check-in
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>
                    <div className="search-input">
                        <span className="icon">&#128101;</span>
                        <input
                            type="number"
                            placeholder="No. Of Guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                    <button className="search-button" onClick={handleSearch}>
                        SEARCH
                    </button>
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
            {/* Other content remains unchanged */}
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
                            <button
                                className="book-button"
                                onClick={() =>
                                    navigate(`/hotel/${hotel.id}`, {
                                        state: { hotelName: hotel.name, price: hotel.price },
                                    })
                                }

                            >
                                Book now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-section">
                            <h3>Company Info</h3>
                            <ul>
                                <li><a href="/AboutUs">About Us</a></li>
                                <li><a href="/AboutUS">Contact</a></li>
                                <li><a href="/AboutUs">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="/faqs">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Newsletter</h3>
                            <p>Stay updated with our latest trends</p>
                            <form>
                                <input type="email" placeholder="Enter email" className="newsletter-input" />
                                <button type="submit" className="subscribe-button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2024 Stay  Ease. All rights reserved.</p>
                        <p>Designed and styled by Stay Ease.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;