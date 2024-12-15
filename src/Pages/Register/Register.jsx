import React, { useEffect, useState } from 'react'
import { registerUser,  } from '../../Features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"
import {useNavigate, } from 'react-router-dom' 
import './Register.css'




const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const {user , isSuccess} = useSelector((state) => state.auth)

    const [formData, setformData ] = useState({
        name :" ",
        email: " ",
        password: ""
    })

     const {name , email , password} = formData

     useEffect(() => {
        if(isSuccess) {
            navigate("/Login");
            dispatch()
        }
     } , [isSuccess, user, dispatch, navigate])

     const handleChange = (e) => {
        setformData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
        }))
     }

     const handleSumbit = (e) => {
        e.preventDefault();
        const dataTosubmit = {
            name,
            email,
            password
        }
        dispatch(registerUser(dataTosubmit, navigate))
     }

    return (
        
        <div className="register-container">
        <div className="register-card">
          <h1 className="register-title">Join the Adventure!</h1>
          <p className="register-subtitle">
            Create your account and start your journey with us
          </p>
          <form className="register-form">
            <div className="register-name-fields">
           
            </div>
            
            <input
            type="name"
            name='name'
            placeholder="Enter your name"
            onChange={handleChange} 
             value={name}
            className="register-input"
            required
            />
            <input
              type='email'
              name='email' 
              placeholder='Enter your email'
              onChange={handleChange}
               value={email}
              className="register-input"
              required
            />
            <input
            type='password' 
            name='password' 
            placeholder='Enter your password'
            onChange={handleChange}
            value={password}
              className="register-input"
              required
            />
            <button type="submit" className="register-button" onClick={handleSumbit}>
              Register
            </button>
          </form>
          <div className="register-links">
            <a href="/login" className="back-to-login">
              Back to login
            </a>
          </div>
        </div>
      </div>
    )
}

export default Register