import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await axios.get('http://localhost:5000/api/rooms');
    setRooms(res.data);
  };

  const handleCreateRoom = async () => {
    await axios.post('http://localhost:5000/api/rooms', newRoom);
    fetchRooms();
    setNewRoom({ name: '', price: '' });
  };

  const handleEditRoom = async (id, updatedRoom) => {
    await axios.put(`http://localhost:5000/api/rooms/${id}`, updatedRoom);
    fetchRooms();
  };

  const handleDeleteRoom = async (id) => {
    await axios.delete(`http://localhost:5000/api/rooms/${id}`);
    fetchRooms();
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <span>Admin Panel</span>
      </header>
      <h2>Manage Rooms</h2>
      <div>
        <input
          type="text"
          placeholder="Room Name"
          value={newRoom.name}
          onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Room Price"
          value={newRoom.price}
          onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
        />
        <button onClick={handleCreateRoom}>Add Room</button>
      </div>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            <span>{room.name} - ₹{room.price}</span>
            <button onClick={() => handleEditRoom(room._id, { name: 'Updated Name', price: 2000 })}>
              Edit
            </button>
            <button onClick={() => handleDeleteRoom(room._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  header: { display: 'flex', justifyContent: 'flex-end', padding: '10px', background: '#f5f5f5' },
};

export default AdminDashboard;