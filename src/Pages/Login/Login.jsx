import { useEffect, useState } from "react"
import { loginUser } from '../../Features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, } from 'react-router-dom'
import './Login.css'




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
    if (isSuccess && user) {
      // Check the role and navigate accordingly
      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (user.role === "user") {
        navigate("/user-dashboard");
      }
    }
  }, [isSuccess, user, navigate]);



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
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to continue to your account</p>
        <form className="login-form" onSubmit={handleSumbit}>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange={handleChange}
            value={email}
            className="login-input"
          />
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={handleChange}
            value={password}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="login-links">
         
          <div className="divider">
            <span>New to Stay Ease?</span>
          </div>
          <a href="#" className="create-account"
                onClick={() => navigate("/register")} >
            Create an account
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login