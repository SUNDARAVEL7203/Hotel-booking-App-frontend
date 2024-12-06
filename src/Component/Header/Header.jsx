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
console.log(user)
  
    return (
        <header className="main-header">
            <div className="container">
                <Link>
                    <h1 className="logo"> STAY PRO</h1>
                </Link>

                <nav>
                    <Link to="/">Home </Link>
                    <Link to ="/Register">Register</Link>
                    <Link to = "/Login">Login</Link>
                  
                   
                 
                   
    
                 
                  
                
                </nav>

            </div>
        </header>
    )
}

export default Header



