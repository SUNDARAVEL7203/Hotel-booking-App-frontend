import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Header from './Component/Header/Header'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import CreateRoom from './Features/Room/CreateRoom'
import RazorpayPage from './RazorPay/RazorpayPage'











function App() {



  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/Dashboard' element={<Dashboard />} ></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Create/Room" element={<CreateRoom />}></Route>
       
            <Route path='/RazorpayPage' element={<RazorpayPage/>}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
