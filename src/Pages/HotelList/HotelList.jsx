import React from 'react';
import './HotelList.css';
import { useNavigate } from 'react-router-dom';



const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <img src={hotel.image} alt={hotel.name} className="image" />
      <div className="detailsContainer">
        <h3 className="title">{hotel.name}</h3>
        <p className="location">{hotel.location}</p>
        <ul className="featuresList">
          {hotel.features.map((feature, index) => (
            <li key={index} className="feature">
              ✓ {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="actionContainer">
        <div className="rating">{hotel.rating} ★</div>
        <div className="price">₹ {hotel.price.toLocaleString()}</div>
        <button
  className="bookButton"
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
  );
};

const HotelList = () => {
  const hotels = [
    {
      id : 1,
      name: 'Taj Coromandel',
      location: 'Nungambakkam, Chennai | 2.5 kms from city center',
      features: ['Free cancellation', 'No prepayment needed — pay at the property'],   
      rating: 5,
      price: 22000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id : 2,
      name: 'ITC Grand Chola',
      location: 'Guindy, Chennai | 3.0 kms from airport',
      features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi', 'Free breakfast'],
      rating: 5,
      price: 25000,
      image: 'https://via.placeholder.com/150',
    },

    {
      id : 3,
      name: 'The Leela Palace',
      location: 'Adyar Seaface, Chennai | 5.0 kms from city center',
      features: ['Free cancellation', 'Ocean view', 'Free wifi', 'Free parking'],
      rating: 5,
      price: 27000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id : 4,
      name: 'Hyatt Regency',
      location: 'Anna Salai, Chennai | 1.5 kms from city center',
      features: ['Free cancellation', 'Free wifi', 'Free breakfast'],
      rating: 4,
      price: 18000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id : 5,
      name: 'Radisson Blu',
      location: 'Egmore, Chennai | 2.0 kms from railway station',
      features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi'],
      rating: 4,
      price: 15000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id : 6,
      name: 'Radisson Blu',
      location: 'Egmore, Chennai | 2.0 kms from railway station',
      features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi'],
      rating: 4,
      price: 15000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id : 7,
      name: 'Park Hyatt Chennai',
      location: 'Guindy, Chennai | 2.5 kms from Guindy National Park',
      features: ['Luxury spa', 'Free cancellation', 'Pet-friendly', 'Free breakfast'],
      rating: 5,
      price: 26000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id : 8,
      name: 'Hilton Chennai',
      location: 'Guindy, Chennai | 1.5 kms from airport',
      features: ['Rooftop pool', 'Free cancellation', 'Free wifi', '24/7 room service'],
      rating: 5,
      price: 24000,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="listContainer">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
