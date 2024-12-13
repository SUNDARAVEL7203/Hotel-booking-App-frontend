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

const hotels = [
  {
    id : 1,
    name: 'Taj Coromandel',
    location: 'Nungambakkam, Chennai | 2.5 kms from city center',
    features: ['Free cancellation', 'No prepayment needed — pay at the property'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers",
    rating: 5,
    price: 22000,
    image: 'https:/unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-wVmIezfRjUA/150',
  },
  {
    id : 2,
    name: 'ITC Grand Chola',
    location: 'Guindy, Chennai | 3.0 kms from airport',
    features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi', 'Free breakfast'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 5,
    price: 25000,
    image: 'https://via.placeholder.com/150',
  },

  {
    id : 3,
    name: 'The Leela Palace',
    location: 'Adyar Seaface, Chennai | 5.0 kms from city center',
    features: ['Free cancellation', 'Ocean view', 'Free wifi', 'Free parking'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 5,
    price: 27000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id : 4,
    name: 'Hyatt Regency',
    location: 'Anna Salai, Chennai | 1.5 kms from city center',
    features: ['Free cancellation', 'Free wifi', 'Free breakfast'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 4,
    price: 18000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id : 5,
    name: 'Radisson Blu',
    location: 'Egmore, Chennai | 2.0 kms from railway station',
    features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 4,
    price: 15000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id : 6,
    name: 'Radisson Blu',
    location: 'Egmore, Chennai | 2.0 kms from railway station',
    features: ['Free cancellation', 'No prepayment needed — pay at the property', 'Free wifi'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 4,
    price: 15000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id : 7,
    name: 'Park Hyatt Chennai',
    location: 'Guindy, Chennai | 2.5 kms from Guindy National Park',
    features: ['Luxury spa', 'Free cancellation', 'Pet-friendly', 'Free breakfast'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 5,
    price: 26000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id : 8,
    name: 'Hilton Chennai',
    location: 'Guindy, Chennai | 1.5 kms from airport',
    features: ['Rooftop pool', 'Free cancellation', 'Free wifi', '24/7 room service'],
    descrption : "A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.",
    rating: 5,
    price: 24000,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: "Anna Nagar",
    id : 9,
    location: "Near anna nagar tower par | 3.3 kms from VR Mall",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
    price: 18900,
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
    image: "https://via.placeholder.com/200", // Replace with actual image URL
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
  image: "https://via.placeholder.com/200", // Replace with actual image URL
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
  image: "https://via.placeholder.com/200", // Replace with actual image URL
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
  name: "Green Park",
  id: 13,
  location: "Xion Complex, | 14.2 km from centre",
  image: "https://via.placeholder.com/200", // Replace with actual image URL
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
             <Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
