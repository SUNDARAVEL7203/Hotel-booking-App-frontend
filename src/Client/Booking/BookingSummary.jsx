import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state || {};
  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle delete button
  const handleDelete = () => {
    navigate("/");
  };

  // Handle proceed to pay button
  const handleProceedToPay = () => {
    navigate("/RazorPayPage", {
        state: { price: formData.price }, // Pass price in state
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Booking Summary</h2>
      <div style={styles.card}>
        {isEditing ? (
          <>
            <label>Check-in Date: 
              <input type="date" name="dateFrom" value={formData.dateFrom} onChange={handleInputChange} />
            </label>
            <label>Check-out Date: 
              <input type="date" name="dateTo" value={formData.dateTo} onChange={handleInputChange} />
            </label>
            <label>Rooms: 
              <input type="text" name="room" value={formData.room} onChange={handleInputChange} />
            </label>
            <label>Guests: 
              <input type="text" name="guests" value={formData.guests} onChange={handleInputChange} />
            </label>
            <label>Room Type: 
              <input type="text" name="roomType" value={formData.roomType} onChange={handleInputChange} />
            </label>
          </>
        ) : (
          <>
            <p><strong>Hotel Name:</strong> {formData.hotelName}</p>
            <p><strong>Check-in Date:</strong> {formData.dateFrom}</p>
            <p><strong>Check-out Date:</strong> {formData.dateTo}</p>
            <p><strong>Rooms:</strong> {formData.room}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
            <p><strong>Room Type:</strong> {formData.roomType}</p>
            <p><strong>Price:</strong> ₹{formData.price.toLocaleString()}</p>
          </>
        )}
        <div style={styles.buttonContainer}>
          {isEditing ? (
            <button onClick={() => setIsEditing(false)} style={styles.saveButton}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>Edit</button>
          )}
          <button onClick={handleDelete} style={styles.deleteButton}>Delete</button>
          <button onClick={handleProceedToPay} style={styles.payButton}>Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  editButton: { backgroundColor: "#FFD700", padding: "8px 12px", border: "none", cursor: "pointer", borderRadius: "5px" },
  saveButton: { backgroundColor: "green", color: "white", padding: "8px 12px", border: "none", cursor: "pointer", borderRadius: "5px" },
  deleteButton: { backgroundColor: "red", color: "white", padding: "8px 12px", border: "none", cursor: "pointer", borderRadius: "5px" },
  payButton: { backgroundColor: "blue", color: "white", padding: "8px 12px", border: "none", cursor: "pointer", borderRadius: "5px" },
};

export default BookingSummary;