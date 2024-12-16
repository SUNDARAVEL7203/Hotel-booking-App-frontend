import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"
import './Headerstyle.css';

const Header = () => {
  const navigate = useNavigate();

  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    // Clear user data and tokens
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    console.log("User logged out");
    // Navigate to the login page
    navigate('/login');
  };

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

        {/* Conditional rendering based on user login status */}
        {user ? (
          <>
            {/* Profile Icon (Placeholder Image) */}
            <li>
            <FaUserCircle
                size={30} // Set icon size
                color="white"
                style={{ cursor: "pointer", marginRight: "10px" }}
              />
            </li>
            {/* Logout Button */}
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/Login" className="nav-link highlight">Login</Link>
            </li>
            <li>
              <Link to="/Register" className="nav-link highlight">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;









