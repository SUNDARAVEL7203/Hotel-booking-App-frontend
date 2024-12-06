const initialState = {
    rooms: [],
    loading: false,
    error: null,
  };
  
  // Reducer for handling rooms actions
 const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_ROOM_SUCCESS':
        return {
          ...state,
          rooms: [...state.rooms, action.payload],
          loading: false,
          error: null,
        };
      case 'CREATE_ROOM_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'GET_ALL_ROOMS_SUCCESS':
        return {
          ...state,
          rooms: action.payload,
          loading: false,
          error: null,
        };
      case 'GET_ALL_ROOMS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'UPDATE_ROOM_SUCCESS':
        return {
          ...state,
          rooms: state.rooms.map((room) =>
            room.id === action.payload.id ? action.payload : room
          ),
          loading: false,
          error: null,
        };
      case 'UPDATE_ROOM_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'DELETE_ROOM_SUCCESS':
        return {
          ...state,
          rooms: state.rooms.filter((room) => room.id !== action.payload),
          loading: false,
          error: null,
        };
      case 'DELETE_ROOM_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default roomsReducer