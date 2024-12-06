import React, { useEffect, useState } from 'react'
import { registerUser,  } from '../../Features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"
import {useNavigate, } from 'react-router-dom' 




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
        
        <div className='container'>
                  <h1 className='heading center'>Register</h1>
            <div className='form-wrapper'>
                <form onSubmit={handleSumbit}>
                    <div className='input-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' placeholder='enter your Name'
                         onChange={handleChange}  value={name}/>

                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' placeholder='Enter your email'
                         onChange={handleChange} value={email}/>

                    </div>

                    <div className='input-group'>
                        <label htmlFor='Password'>Password</label>
                        <input type='password' name='password' placeholder='Enter your password'
                        onChange={handleChange} value={password}/>

                    </div>
                     <button type='submit'>Submit</button>
                </form>

            </div>


        </div>
    )
}

export default Register