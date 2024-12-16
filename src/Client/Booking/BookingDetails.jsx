import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { hotelName, price, name, email, checkInDate, checkOutDate, image } = state;

  const handleProceedToPay = () => {
    navigate('/RazorPaypage', { state: { price } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Booking Summary</h2>
      <div style={styles.hotelInfo}>
        <img src={image} alt={hotelName} style={styles.image} />
        <h3 style={styles.hotelName}>{hotelName}</h3>
        <p style={styles.price}>Price: ₹{price.toLocaleString()}</p>
      </div>
      <div style={styles.userDetails}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Check-In Date:</strong> {checkInDate}</p>
        <p><strong>Check-Out Date:</strong> {checkOutDate}</p>
      </div>
      <button style={styles.button} onClick={handleProceedToPay}>
        Proceed to Pay ₹{price.toLocaleString()}
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  hotelInfo: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  hotelName: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  price: {
    fontSize: '16px',
    color: '#555',
  },
  userDetails: {
    textAlign: 'left',
    marginBottom: '20px',
    lineHeight: '1.6',
    width: '300px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default BookingDetails;