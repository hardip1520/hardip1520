import React from "react";
import "./Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CustomerLogin = () => {

  const [formValues, setFormValues] = useState(intialValues);
  const navigate = useNavigate();


const handleSubmit = (e)=>{
   e.preventDefault();
  axios 
       .get("http://localhost:5000/users")
       .then((response)=>response.data)
       .then((userdata)=>{const user =userdata.find((e)=>e.emailid ===formValues.emailid && e.emailid === formValues.password);

        if(user){
          console.log(user)
        }
        else{
          console.log("not Match")
        }
        
        )}
 

}

  const handleChange = () => {
 const{name,value} = event.target;
 setFormValues({...formValues,[name]:value})


  };

  return (
    <>
      <div className="register-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="form">
            <div className="title">Welcome Customer</div>
            <div className="subtitle">Log In Here</div>
            <div className="input-container ic1">
              <input
                id="firstname"
                className="input"
                type="text"
                name="name"
                placeholder=" "
              />
              <div className="cut"></div>
              <label for="firstname" className="placeholder">
                Name
              </label>
            </div>
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
