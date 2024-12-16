import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Header from './Component/Header/Header'
import './App.css'

import CreateRoom from './Features/Room/CreateRoom'
import RazorpayPage from './RazorPay/RazorpayPage'
import AboutUs from './Pages/Aboutus/Aboutus'
import HotelList from './Pages/HotelList/HotelList'
import HotelDetails from './Pages/HotelDetails/HotelDetails'
import Booking from './Client/Booking/Booking'
import BookingDetails from './Client/Booking/BookingDetails'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import BookingSummary from './Client/Booking/BookingSummary'

const hotels = [
  {
    id : 1,
    name: 'Taj Coromandel',
    location: 'Nungambakkam, Chennai | 2.5 kms from city center',
    features: ['Free cancellation', 'No prepayment needed — pay at the property'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers",
    rating: 5,
    price: 22000,
    image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192284/wbj2vjbtt4lilcn253ax.png',
  },
  {
    id : 2,
    name: 'ITC Grand Chola',
    location: 'Guindy, Chennai | 3.0 kms from airport',
    features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi', 'Free breakfast'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 5,
    price: 25000,
    image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734195237/azfxaeomieddotmjp6mc.jpg',
  },

  {
    id : 3,
    name: 'The Leela Palace',
    location: 'Adyar Seaface, Chennai | 5.0 kms from city center',
    features: ['Free cancellation', 'Ocean view', 'Free wifi', 'Free parking'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 5,
    price: 27000,
    image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192519/aqgkqct318gpvixbwp2s.png',
  },
  {
    id : 4,
    name: 'Hyatt Regency',
    location: 'Anna Salai, Chennai | 1.5 kms from city center',
    features: ['Free cancellation', 'Free wifi', 'Free breakfast'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 4,
    price: 18000,
    image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192558/exufrgn7r59zgmxaf7tj.png',
  },
  {
    id : 5,
    name: 'Radisson Blu',
    location: 'Egmore, Chennai | 2.0 kms from railway station',
    features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 4,
    price: 15000,
    image: 'https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734192603/jvb9io61zscirifcv3ru.png',
  },
  
  {
    name: "Anna Nagar",
    id : 9,
    location: "Near anna nagar tower par | 3.3 kms from VR Mall",
    image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734186662/u6smwkdunoqqf5y0posx.png", // Replace with actual image URL
    price: 1,
    rating: 5,
    features: [
        "Free cancellation",
        "No prepayment needed — pay at the property",
    ],
},
{
    name: "Kovalam Resort",
    id : 10,
    location: "500 meters from the Rajiv Gandhi Infotech Park",
    image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734185442/wmbnr7hwaj7svm0mp2le.png", // Replace with actual image URL
    price: 25300,
    rating: 4,
    features: [
        "Free cancellation",
        "No prepayment needed — pay at the property",
        "Free wifi",
        "Free lunch",
    ],
},
{
  name: "Velachery",
  id : 11,
  location: "5.4 km from centre",
  image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734187174/hwqgkos9fv6dwhuge1cs.png", // Replace with actual image URL
  price: 11300,
  rating: 5,
  features: [
      "Free cancellation",
      "No prepayment needed — pay at the property",
      "Free wifi",
  ],
},
{
  name: "OMR",
  id : 12,
  location: "Weikfield IT City Infopark | 7.1 km from centre",
  image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734187893/zkasbrfcqeoshxbp3o10.png", // Replace with actual image URL
  price: 14599,
  rating: 3,
  features: [
      "Pets allowed",
      "Dinner + Lunch included",
      "Free wifi",
      "Free taxi from airport",
  ],
},
{
  name: "Neelankarai",
  id: 13,
  location: "Xion Complex, | 14.2 km from centre",
  image: "https://res.cloudinary.com/dgsnmd3jg/image/upload/v1734188106/ky86xvfrwtfxxqkijgqd.png", // Replace with actual image URL
  price: 9799,
  rating: 4.3,
  features: [
      "Pets allowed",
      "Free wifi",
      "Free cancellation",
      "No prepayment needed — pay at the property",
  ],
}
];



function App() {



  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home hotels={hotels} />}></Route>
       
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Create/Room" element={<CreateRoom />}></Route>
            <Route path='/RazorpayPage' element={<RazorpayPage/>}></Route>
            <Route path='/Aboutus' element={<AboutUs/>}></Route>
             <Route path='/Hotels' element={<HotelList hotels={hotels}/>}></Route>
             <Route path="/hotel/:id" element={<HotelDetails hotels={hotels} />} />
         
             <Route path="/Booking" element={<Booking/>}></Route>
             <Route path="/BookingDetails" element={<BookingDetails/>} ></Route>
             <Route path="/BookingSummary" element={<BookingSummary/>}></Route>
             <Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
