import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "./RazorPayPage.css";

const RazorpayPage = () => {
  const location = useLocation();
  const { price } = location.state || { price: 0 }; // Price passed from previous page

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    name: Yup.string().required("Required"),
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
      .required("Required"),
    expiry: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format must be MM/YY")
      .required("Required"),
    cvc: Yup.string()
      .matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits")
      .required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    postalCode: Yup.string()
      .matches(/^[0-9]{5,6}$/, "Invalid postal code")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      // Step 1: Create order on backend
      const response = await axios.post("http://localhost:5000/order", {
        amount: price,
      });

      const { data } = response.data;


      const options = {
        key: "UvnZ5ZE5hApj4HNPSlryN0PH", 
        amount: data.amount,
        currency: "INR",
        name: "SUNDARAVEL",
        description: "Hotel Booking Payment",
        order_id: rzp_test_IP4i7NRQlNrS69 ,
        handler: async function (response) {
          
          const verifyResponse = await axios.post("https://hotel-booking-app-backend-4dcd.onrender.com/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          alert(verifyResponse.data.message); // Show success message
        },
        prefill: {
          name: values.name,
          email: values.email,
          contact: "9999999999", // Dummy contact (optional)
        },
        notes: {
          address: `${values.address}, ${values.city}, ${values.state}, ${values.postalCode}`,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        alert("Payment Failed. Please try again.");
      });
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="razorpay-page">
      <div className="razorpay-card">
        <h2>Complete Your Payment</h2>
        <Formik
          initialValues={{
            email: "",
            name: "",
            cardNumber: "",
            expiry: "",
            cvc: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label>Email Address</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <label>Name on Card</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <label>Card Number</label>
                <Field type="text" name="cardNumber" className="form-control" />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiration Date (MM/YY)</label>
                  <Field type="text" name="expiry" className="form-control" />
                  <ErrorMessage
                    name="expiry"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <Field type="text" name="cvc" className="form-control" />
                  <ErrorMessage name="cvc" component="div" className="error" />
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <Field type="text" name="address" className="form-control" />
                <ErrorMessage name="address" component="div" className="error" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <Field type="text" name="city" className="form-control" />
                  <ErrorMessage name="city" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <Field type="text" name="state" className="form-control" />
                  <ErrorMessage name="state" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <Field
                    type="text"
                    name="postalCode"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="postalCode"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <button type="submit" className="pay-button">
                Pay Now ₹{price.toLocaleString()}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RazorpayPage;