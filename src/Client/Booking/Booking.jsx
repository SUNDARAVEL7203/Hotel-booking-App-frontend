import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { hotelName, price, image } = state;

  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: today,
    checkOutDate: today,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.checkInDate ||
      !formData.checkOutDate
    ) {
      alert('Please fill in all the details.');
      return;
    }

    // Navigate to Booking Details if validation passes
    navigate('/BookingDetails', {
      state: {
        ...formData,
        hotelName,
        price,
        image,
      },
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Details</h2>
      <div style={styles.hotelInfo}>
        <img src={image} alt={hotelName} style={styles.image} />
        <h3 style={styles.hotelName}>{hotelName}</h3>
        <p style={styles.price}>Price: ₹{price.toLocaleString()}</p>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <label style={styles.label}>Check-In Date:</label>
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          min={today}
          onChange={handleChange}
          required
          style={styles.dateInput}
        />
        <label style={styles.label}>Check-Out Date:</label>
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          min={formData.checkInDate}
          onChange={handleChange}
          required
          style={styles.dateInput}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  dateInput: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Booking;