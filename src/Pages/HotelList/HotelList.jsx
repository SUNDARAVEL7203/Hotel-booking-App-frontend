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
      image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192284/wbj2vjbtt4lilcn253ax.png',
    },
    {
      id : 2,
      name: 'ITC Grand Chola',
      location: 'Guindy, Chennai | 3.0 kms from airport',
      features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi', 'Free breakfast'],
      rating: 5,
      price: 25000,
      image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734195237/azfxaeomieddotmjp6mc.jpg',
    },

    {
      id : 3,
      name: 'The Leela Palace',
      location: 'Adyar Seaface, Chennai | 5.0 kms from city center',
      features: ['Free cancellation', 'Ocean view', 'Free wifi', 'Free parking'],
      rating: 5,
      price: 27000,
      image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192519/aqgkqct318gpvixbwp2s.png',
    },
    {
      id : 4,
      name: 'Hyatt Regency',
      location: 'Anna Salai, Chennai | 1.5 kms from city center',
      features: ['Free cancellation', 'Free wifi', 'Free breakfast'],
      rating: 4,
      price: 18000,
      image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192558/exufrgn7r59zgmxaf7tj.png',
    },
    {
      id : 5,
      name: 'Radisson Blu',
      location: 'Egmore, Chennai | 2.0 kms from railway station',
      features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi'],
      rating: 4,
      price: 15000,
      image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192603/jvb9io61zscirifcv3ru.png',
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
