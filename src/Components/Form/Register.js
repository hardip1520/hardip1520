import React from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAllData } from '../../Actions/Useractions'

const Register = () => {
  const Navigate = useNavigate();

  const [radio, setRadio] = useState("");

  const [initformdata, setINITFormData] = useState({});

  const dispatch = useDispatch();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setINITFormData({ ...initformdata, role:radio,[name]: value });
  };

  const fineldata = async (e) => {

    dispatch(postAllData(initformdata))

    Navigate("/");
  };


  return (
    <>
      <div className="register-hero"></div>
      <div className="register-container-1">
        <form>
          <div className="container my-4">
            <p className="pf">Hello and Welcome.</p>
            <p className="ps">Let's create your account</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-6 col-xl-5 mx-auto">
                <div className="card px-5 pt-4 d-flex justify-content-center">
                  <form className="mydetails">
                    <div className="form-heading">
                      <p className="text-left">
                        Choose what would you like to do
                      </p>
                    </div>
                    <div className="form-group mt-3 mb-4">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="radio">
                            {" "}
                            <input
                              type="radio"
                              name="buysell"
                              value="sell"
                              onChange={e => setRadio(e.target.value)}
                            />
                            <span>I want to sell</span>
                          </label>
                        </div>
                        <div className="col-md-6 mcol">
                          <label className="radio">
                            {" "}
                            <input
                              type="radio"
                              name="buysell"
                              value="buy"
                              onChange={e => setRadio(e.target.value)}
                            />{" "}
                            <span>I want to buy</span>{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="fullname"
                        required
                        onChange={handleChange}
                      />
                      <label className="form-control-placeholder" for="name">
                        Full Name
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        name="number"
                        required
                        onChange={handleChange}
                      />  
                      <label className="form-control-placeholder" for="name">
                       Ph.Number
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="mail"
                        name="emailid"
                        required
                        onChange={handleChange}
                      />
                      <label className="form-control-placeholder" for="mail">
                        Email Address
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        for="password"
                      >
                        Enter a memorable password
                      </label>
                    </div>

                    <div className="form-group pt-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p className="signin pt-2">
                            Already a member?&nbsp;<a href="#">Sign in</a>
                          </p>
                        </div>
                        <div className="col-md-6">
                          <button
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={fineldata}
                          >
                            <span>Join</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
