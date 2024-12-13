import axios from 'axios'
import toast from 'react-hot-toast'

 const token = localStorage.getItem('authToken');
export const createRoom = (roomData) => async (dispatch) => {
  console.log(roomData)
  try {
    const res = await axios.post('https://hotel-booking-app-backend-fpkz.onrender.com/api/rooms', roomData, {
      headers: {
        "Content-Type": "application/json", // Specify the content type
        Authorization: `Bearer ${token}`, // Include an authorization token, if required
        Accept: "application/json", // Specify accepted response format
      },
    } );
     console.log(res.data.room)
    dispatch({ type: 'CREATE_ROOM_SUCCESS', payload: res.data.room});
    toast.success('Room created successfully!');
    console.log("Room creation success");
  } catch (error) {
    dispatch({ type: 'CREATE_ROOM_FAILURE', payload: error.response?.data?.message || error.message });
    alert("Failed to create room")
    console.log(error.message)
  }
};

export const getAllRooms = () => async (dispatch) => {
  try {
    const res = await axios.get('https://hotel-booking-app-backend-fpkz.onrender.com/api/rooms');
    dispatch({ type: 'GET_ALL_ROOMS_SUCCESS', payload: res.data });
    toast.success('Rooms fetched successfully!');
    console.log("Fetched all rooms successfully");
  } catch (error) {
    dispatch({ type: 'GET_ALL_ROOMS_FAILURE', payload: error.response?.data?.message || error.message });
  alert("Failed to get rooms")
    console.log(error.message);
  }
};

export const updateRoom = (roomId, updatedData) => async (dispatch) => {
  try {
    const res = await axios.put(`https://hotel-booking-app-backend-fpkz.onrender.com/api/rooms/672afa425a4d81c9ae37325e${roomId}`, updatedData);
    dispatch({ type: 'UPDATE_ROOM_SUCCESS', payload: res.data });
    toast.success('Room updated successfully!');
    console.log("Room updated successfully");
  } catch (error) {
    dispatch({ type: 'UPDATE_ROOM_FAILURE', payload: error.response?.data?.message || error.message });
  alert("failed to update rooms")
    console.log(error.message);
  }
};

export const deleteRoom = (roomId) => async (dispatch) => {
  try {
    await axios.delete(`https://hotel-booking-app-backend-fpkz.onrender.com/api/rooms/672afa425a4d81c9ae37325e${roomId}`);
    dispatch({ type: 'DELETE_ROOM_SUCCESS', payload: roomId });
    toast.success('Room deleted successfully!');
    console.log("Room deleted successfully");
  } catch (error) {
    dispatch({ type: 'DELETE_ROOM_FAILURE', payload: error.response?.data?.message || error.message });
  alert("failed to delete rooms")
    console.log(error.message);
  }
};