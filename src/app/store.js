import authReducer from "../Features/auth/authReducer";

import {configureStore} from '@reduxjs/toolkit'
import roomsReducer from "../Features/Room/roomReducer";
import bookingsReducer from "../Client/Booking/BookingReducer";
const store = configureStore({
    reducer: {
      auth: authReducer,
      room: roomsReducer,
      booking: bookingsReducer
   
    },
  });
  
  export default store;