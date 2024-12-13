import axios from 'axios';
import { toast } from 'react-toastify';

// Action for fetching all bookings
export const getBookings = () => async (dispatch) => {
  try {
    const res = await axios.get('https://hotel-booking-app-backend-fpkz.onrender.com/api/bookings');
    dispatch({ type: 'GET_BOOKINGS_SUCCESS', payload: res.data });
    console.log('Bookings fetched successfully');
  } catch (error) {
    dispatch({ type: 'GET_BOOKINGS_FAILURE', payload: error.response?.data?.message || error.message });
    alert('Failed to fetch bookings');
    console.log(error.message);
  }
};

// Action for creating a booking
export const createBooking = (newBooking) => async (dispatch) => {
  try {
    const res = await axios.post('https://hotel-booking-app-backend-fpkz.onrender.com/api/bookings', newBooking);
    dispatch({ type: 'CREATE_BOOKING_SUCCESS', payload: res.data });
    toast.success('Booking created successfully!');
    console.log('Booking created successfully');
  } catch (error) {
    dispatch({ type: 'CREATE_BOOKING_FAILURE', payload: error.response?.data?.message || error.message });
    alert('Failed to create booking');
    console.log(error.message);
  }
};

// Action for deleting a booking
export const deleteBooking = (bookingId) => async (dispatch) => {
  try {
    await axios.delete(`https://hotel-booking-app-backend-fpkz.onrender.com/api/bookings/${bookingId}`);
    dispatch({ type: 'DELETE_BOOKING_SUCCESS', payload: bookingId });
    toast.success('Booking deleted successfully!');
    console.log('Booking deleted successfully');
  } catch (error) {
    dispatch({ type: 'DELETE_BOOKING_FAILURE', payload: error.response?.data?.message || error.message });
    alert('Failed to delete booking');
    console.log(error.message);
  }
};

// Action for updating a booking
export const updateBooking = (bookingId, updatedData) => async (dispatch) => {
  try {
    const res = await axios.put(`https://hotel-booking-app-backend-fpkz.onrender.com/api/bookings/${bookingId}`, updatedData);
    dispatch({ type: 'UPDATE_BOOKING_SUCCESS', payload: res.data });
    toast.success('Booking updated successfully!');
    console.log('Booking updated successfully');
  } catch (error) {
    dispatch({ type: 'UPDATE_BOOKING_FAILURE', payload: error.response?.data?.message || error.message });
    alert('Failed to update booking');
    console.log(error.message);
  }
};