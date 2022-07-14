import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getProperty} from '../../Actions/Agentactions'
import './AddProperty.css'

const AddProperty = () => {
	const[jdata, setdata] = useState([])

    const dispatch = useDispatch();

// const { properties } = useSelector((state) => state.properties);

useEffect(()=>{
const allproperties = () =>{
	fetch("http://localhost:5000/properties")
	.then((response) => response.json())
	.then(data => setdata(data))
} 
allproperties()  
},[])

const handleDelete = async (id) => {
 await axios.delete(`http://localhost:5000/properties/${id}`)
 dispatch(getProperty()) 

}



 return(
	<>
	<div>

		{jdata.map((e,index)=>(
			<>
			<div className="detail-table">
				<h1>Details of Properties</h1>
			<table>
  <tr>
    <th>Name</th>
    <th>Contact</th>
    <th>Property for</th>
  </tr>
  <tr>
    <td>{e.name}</td>
    <td>{e.phone}</td>
    <td>{e.select}</td>
	<td><button className='detail-btn' onClick={()=>handleDelete(e.id)}>delete</button></td>
  </tr>
  
</table>
</div>
			</>
		))}
	</div>
	</>

 )
}

export default AddProperty