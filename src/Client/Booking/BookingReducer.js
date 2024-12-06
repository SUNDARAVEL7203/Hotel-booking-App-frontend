const initialBookingState = {
    bookings: [],
    loading: false,
    error: null,
  };
  
  // Reducer for handling bookings actions
  const bookingsReducer = (state = initialBookingState, action) => {
    switch (action.type) {
      case 'CREATE_BOOKING_SUCCESS':
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
          loading: false,
          error: null,
        };
      case 'CREATE_BOOKING_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'GET_ALL_BOOKINGS_SUCCESS':
        return {
          ...state,
          bookings: action.payload,
          loading: false,
          error: null,
        };
      case 'GET_ALL_BOOKINGS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'UPDATE_BOOKING_SUCCESS':
        return {
          ...state,
          bookings: state.bookings.map((booking) =>
            booking.id === action.payload.id ? action.payload : booking
          ),
          loading: false,
          error: null,
        };
      case 'UPDATE_BOOKING_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'DELETE_BOOKING_SUCCESS':
        return {
          ...state,
          bookings: state.bookings.filter(
            (booking) => booking.id !== action.payload
          ),
          loading: false,
          error: null,
        };
      case 'DELETE_BOOKING_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bookingsReducer;
  