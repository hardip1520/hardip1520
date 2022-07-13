import React, { useState } from "react";
import Addimg from "../../Accets/Images/addproperty.png";
import "./Agentproperty.css";
import { postallProperties } from "../../Actions/Agentactions";
import { useDispatch } from "react-redux";

const Agentproperty = () => {

  const dispatch= useDispatch();

  const [property,setproperty] = useState({})


  const handleChange = (event) => {
    
    const {name, value} =  event.target;
    setproperty({...property, [name]:value})

  }

const handleAdd = async(e) =>{
 
dispatch(postallProperties(property))

}

console.log(property)
  return (
    <>
      <div className="add-container">
        <div className="add-img">
          <h1>Sell or Rent your Property on Harry RE</h1>
          <img src={Addimg} width="500" height="300" />
        </div>
        <div className="add-form">
          <form>
            <div className="add-details">
            <label for="name">Full Name</label>
              <input
                type="text"
                className="add-feild"
                autoComplete="off" 
                name="name"
                onChange={handleChange}
              />
              
            </div>

            <div className="add-details">
            <label for="phonenumber">Ph number</label>
              <input
                type="phonenumber"
                className="add-feild"
                autoComplete="off"
                name="phone"
                onChange={handleChange}
              />
              
            </div>

            <div className="add-details">
            <label for="comment">Email</label>
              <input
                type="email"
                className="add-feild"
                autoComplete="off"
                name="emailid"
                onChange={handleChange}
              />
             
            </div>

            <div class="wrapper">
              <input type="radio" name="select" value='sell' id="option-1" onChange={handleChange} />
              <input type="radio" name="select" value='rent' id="option-2" onChange={handleChange}/>
              <label for="option-1" class="option option-1">
                <div class="dot"></div>
                <span>Sell</span>
              </label>
              <label for="option-2" class="option option-2">
                <div class="dot"></div>
                <span>Rent</span>
              </label>
            </div>

            <div className="add-details">
            
              <textarea
                rows="4"
                cols="50"
                placeholder="say something about property.."
                className="add-feild"
                autoComplete="off"
                name="emailid"
                onChange={handleChange}
              />
              
            </div>
            <button className="add-property-btn"  onClick={handleAdd}>Post Your Property</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Agentproperty;
