import axios from "axios";
import React from "react";
import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgentLogin = () => {


const initialValues = {
    emailid: "",
    password: "",
  };

  const navigate = useNavigate()  

  const [formValues,setFormValues]= useState(initialValues)


  const handleSubmit = (e) =>{
    e.preventDefault();
    axios
    .get('http://localhost:5000/agent')
    .then((response)=>response.data)
    .then((userdata)=>{
    const user = userdata.find(
      (e)=>
      e.emailid === formValues.emailid && 
      e.password ===formValues.password 
      );

    if(user){
      navigate("/addproperty")
      console.log("match")
    }
    else{
      alert("invalid username or password")
      console.log("invalid")
    }
    })
  }

  const handleChange =(event)=>{
    const {name,value} = event.target;
    setFormValues({...formValues, [name]:value})

  }


  return (
    <>
      <div className="register-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="form">
            <div className="title">Welcome Agent</div>
            <div className="subtitle">Log In Here</div>

            <div className="input-container ic2">
              <input id="email"
               className="input" 
               type="text" 
               name = "emailid"
               placeholder=" "
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
               name = "password"
               placeholder=" "
               onChange={handleChange}
               />
              <div className="cut cut-short"></div>
              <label for="password" className="placeholder">
                Password
              </label>
            </div>
            <button 
            type="text"
             className="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AgentLogin;
