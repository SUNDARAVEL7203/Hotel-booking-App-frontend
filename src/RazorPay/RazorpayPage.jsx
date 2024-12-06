import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RazorpayPage.css";

const RazorpayPage = () => {
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

  const handleSubmit = (values) => {
    alert("Payment form submitted with values: " + JSON.stringify(values));
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
                Pay Now
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RazorpayPage;