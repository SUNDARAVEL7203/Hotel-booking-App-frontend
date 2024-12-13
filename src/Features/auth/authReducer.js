const initialState = {

    authUser: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
    isLoading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
      case 'REGISTER_REQUEST':
      case 'LOGOUT_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
   
        localStorage.setItem('user', JSON.stringify(action.payload));
        return {
          ...state,
          authUser: action.payload,
          isLoading: false,
          error: null,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          isLoading: false,
          error: null,
        };
      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case 'LOGOUT_SUCCESS':
        
        localStorage.removeItem('user');
        return {
          ...state,
          authUser: null,
          isLoading: false,
          error: null,
        };
      default:
        return state;
    }
  };
  

  export default authReducer;