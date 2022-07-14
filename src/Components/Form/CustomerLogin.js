import React from "react";
import "./Form.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerLogin = () => {
  const initialValues = {
    emailid: "",
    password: "",
  };
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialValues);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/users")
      .then((responses) => responses.data)
      .then((userData) => {
        const user = userData.find(
          (e) =>
            e.emailid === formValues.emailid &&
            e.password === formValues.password
        );
        console.log(user);

        if (user) {
          console.log(user);
          navigate("/userarea")
        } else {
          console.log("not Match");
          alert("Not Match");
        }
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="register-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form">
            <div className="title">Welcome Customer</div>
            <div className="subtitle">Log In Here</div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                placeholder=" "
                name="emailid"
                onChange={handleChange}
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Email
              </label>
            </div>
            <div className="input-container ic2">
              <input
                className="input"
                type="password"
                placeholder=" "
                name="password"
                onChange={handleChange}
              />
              <div className="cut cut-short"></div>
              <label for="password" className="placeholder">
                Password
              </label>
            </div>
            <button type="text" className="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerLogin;
