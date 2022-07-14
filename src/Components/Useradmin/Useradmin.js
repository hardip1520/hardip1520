import React, { useEffect } from 'react'
import './Useradmin.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactWhatsapp from 'react-whatsapp';


const Useradmin = () => {

	const[jdata, setdata] = useState([])

    // const dispatch = useDispatch();

// const { properties } = useSelector((state) => state.properties);

useEffect(()=>{
const allproperties = () =>{
	fetch("http://localhost:5000/properties")
	.then((response) => response.json())
	.then(data => setdata(data))
} 
allproperties()  
},[])

// const handleDelete = async (id) => {
//  await axios.delete(`http://localhost:5000/properties/${id}`)
//  dispatch(getProperty()) 

// }



 return(
	<>
	<div className='user-container'>
		{jdata.map((e,index)=>(
			<>
			
			<div className="container">
  <div className="card">
    <div className="card__header">
      <img src={e.image} alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-blue">{e.select}</span>
      <h4>Name : {e.name} </h4>
	  <h4>Email : {e.emailid}</h4>
	  
      <p>{e.description}</p>
    </div>
    <div className="card__footer">
	<ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
      <div className="user">
        
        <div className="user__info">
          <h5>{e.phone}</h5>
          <small>{new Date().toLocaleTimeString()}</small>

        </div>
      </div>
    </div>
  </div>
  
</div>

			</>
		))}
	</div>
	</>

 )
}

export default Useradmin