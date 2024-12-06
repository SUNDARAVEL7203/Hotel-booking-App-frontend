import { useEffect, useState } from "react"
import { loginUser } from '../../Features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, } from 'react-router-dom'




const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user, isSuccess } = useSelector((state) => state.auth)

  const [formData, setformData] = useState({
    email: " ",
    password: ""
  })

  const { email, password } = formData

  useEffect(() => {
    if (isSuccess) {
      navigate("/Dashboard");
      dispatch()
    }
  }, [isSuccess, user, navigate, dispatch])


  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const dataTosubmit = {
      email,
      password
    }
    dispatch(loginUser(dataTosubmit, navigate))

  }
  return (
    <div className="container">

      <h1 className="heading center">Login</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSumbit}>

          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Enter your email'
              onChange={handleChange} value={email} />

          </div>

          <div className='input-group'>
            <label htmlFor='Password'>Password</label>
            <input type='password' name='password' placeholder='Enter your password'
              onChange={handleChange} value={password} />

          </div>
          <button type='submit' >Submit</button>

        </form>
       
      </div>

    </div>
  )
}

export default Login