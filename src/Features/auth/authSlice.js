import axios from 'axios';
import toast from 'react-hot-toast';



export const loginUser = (userData, navigate) => async (dispatch) => {

  try {
    const res = await axios.post('http://localhost:5000/api/users/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    await localStorage.setItem('authToken', res.data.token)
    console.log(res.data)
    toast.success("Login success")
    if(res.data.admin){
      setTimeout(() => {
        navigate("/Dashboard");
      }, 1000);
    }
    else {
      setTimeout(() => {
        navigate("/")
      }, 1000)
    }
  
   
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message});
    const errorMessage = error?.response?.data?.error || error;
    toast.error(errorMessage)
  }
};


export const logoutUser = (navigate) => async (dispatch) => {
  try {
    await axios.post('http://localhost:5000/api/users/logout');
    dispatch({ type: 'LOGOUT_SUCCESS' });
   console.log("success")
    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  } catch (error) {
    console.log('Logout error:', error);
    const errorMessage = error?.response?.data?.error || error;
     console.log(error.message)

  }
};

export const registerUser = (userData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/users', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    toast.success("success")
    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message});
    const errorMessage = error?.response?.data?.error || error;
    console.log(error.message)
  }
};


