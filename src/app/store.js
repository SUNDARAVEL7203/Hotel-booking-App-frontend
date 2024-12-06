import authReducer from "../Features/auth/authReducer";

import {configureStore} from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
      auth: authReducer,
   
    },
  });
  
  export default store;