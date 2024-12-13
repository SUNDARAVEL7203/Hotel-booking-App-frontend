import React from "react";
import "./AboutUs.css"; // Ensure this file contains the necessary styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>STAY EASE</strong>, where we are dedicated to
        providing you with the best experience for booking hotels around the
        world. Our mission is to make your travel comfortable, convenient, and
        memorable.
      </p>
      <h2>Our Vision</h2>
      <p>
        At <strong>STAY EASE</strong>, we envision a world where every
        traveler finds the perfect accommodation that suits their needs and
        preferences. We aim to simplify the hotel booking process, offering a
        wide range of options for every budget.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          We offer a diverse range of hotels, from luxury resorts to cozy
          boutique stays, ensuring that you find the perfect match for your
          travel style.
        </li>
        <li>
          Our user-friendly interface makes it simple and quick to book your
          ideal stay. With just a few clicks, you can secure your reservation
          hassle-free.
        </li>
        <li>
          Our dedicated customer support team is available 24/7 to assist you
          with any inquiries or issues you may encounter during your booking
          process or stay.
        </li>
        <li>
          We prioritize the security of your personal information and
          transactions. Book with confidence, knowing that your data is safe
          with us.
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;