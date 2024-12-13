import React, {  useState } from 'react'
import {   useLocation, useNavigate, useParams } from 'react-router-dom'

const HotelDetails = ({ hotels }) => {
    const { id } = useParams();
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id, 10));
    const navigate = useNavigate()

    const location = useLocation();
    const { hotelName, price } = location.state || {};

    // Debugging - Check if data is being received correctly
    console.log("Hotel Name:", hotelName);
    console.log("Price:", price);
      
    const [formData, setFormData] = useState({
      dateFrom: '',
      dateTo: '',
      room: '',
      guests: '',
      roomType: '',
    });

 
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleBooking = () => {
      const { dateFrom, dateTo, room, guests, roomType } = formData;
      if (!dateFrom || !dateTo || !room || !guests || !roomType) {
        alert('Please fill all the details before confirming booking.');
      } else {
        alert('Booking Confirmed!');
        navigate("/RazorpayPage", );
      }
    };

    if (!hotel) {
      return <h2>Hotel not found!</h2>;
    }
  
    return (
      <div style={styles.container}>
        <img src={hotel.image} alt={hotel.name} style={styles.image} />
        <p style={styles.description}>{hotel.description}</p>
        <div style={styles.detailsContainer}>
          <div style={styles.card}>
            <h4 style={styles.sectionTitle}>Booking Details</h4>
            <p><strong>Total Price:</strong> ₹{hotel.price.toLocaleString() }</p>
            <p style={styles.freeCancellation}>Free cancellation 1 day prior to stay</p>
            <div style={styles.section}>
              <label>Dates & Time:</label>
              <div style={styles.dateInputs}>
                <input
                  type="date"
                  name="dateFrom"
                  style={styles.dateInput}
                  value={formData.dateFrom}
                  onChange={handleInputChange}
                />
                <input
                  type="date"
                  name="dateTo"
                  style={styles.dateInput}
                  value={formData.dateTo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div style={styles.section}>
              <label>Reservation:</label>
              <select
                name="room"
                style={styles.select}
                value={formData.room}
                onChange={handleInputChange}
              >
                <option value="">Select room</option>
                <option value="1 room">1 room</option>
                <option value="2 rooms">2 rooms</option>
              </select>
              <select
                name="guests"
                style={styles.select}
                value={formData.guests}
                onChange={handleInputChange}
              >
                <option value="">Select guests</option>
                <option value="2 guests">2 guests</option>
                <option value="4 guests">4 guests</option>
              </select>
            </div>
            <div style={styles.section}>
              <label>Room Type:</label>
              <select
                name="roomType"
                style={styles.select}
                value={formData.roomType}
                onChange={handleInputChange}
              >
                <option value="">Select room type</option>
                <option value="1 King Bed Standard Non-Smoking">1 King Bed Standard Non-Smoking</option>
                <option value="1 Queen Bed Standard Non-Smoking">1 Queen Bed Standard Non-Smoking</option>
              </select>
            </div>
            <p>Per day rate: ₹{hotel.price.toLocaleString()}</p>
        
            <button style={styles.bookButton} onClick={handleBooking}>Confirm Booking</button>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: "'Poppins', sans-serif",
    },
    image: {
      width: '80%',
      maxWidth: '300px',
      height: 'auto',
  
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#555',
      textAlign: 'center',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    detailsContainer: {
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      padding: '20px',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    freeCancellation: {
      fontSize: '14px',
      color: 'green',
      marginBottom: '10px',
    },
    section: {
      marginBottom: '15px',
    },
    dateInputs: {
      display: 'flex',
      gap: '10px',
    },
    dateInput: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    select: {
      width: '100%',
      padding: '8px',
      marginBottom: '5px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    bookButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#FFD700',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: "'Poppins', sans-serif",
    },
  };
  
  export default HotelDetails;
  