import { Link, useNavigate } from "react-router-dom"
import './Headerstyle.css'



const Header = () => {
  const navigate = useNavigate()
    const handleLogout = () => {
        // Perform any logout operations (e.g., clearing user data, tokens)
        console.log("User logged out");
        // Navigate to the login page
        navigate('/login');
      };

  const user = JSON.parse(localStorage.getItem('user'))
  return (

    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="stayease">STAY EASE</h1>

      </div>
      <ul className="navbar-links">
  

          <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/Hotels" className="nav-link">Hotels</Link>
        </li>
        <li>
          <Link to="/Aboutus" className="nav-link">About Us</Link>
        </li>
        <li>
          <Link to="/Login" className="nav-link highlight">Login</Link>
        </li>
        <li>
          <Link to="/Register" className="nav-link highlight">Register</Link>
        </li>


     
      </ul>
    </nav>

  )
}

export default Header



