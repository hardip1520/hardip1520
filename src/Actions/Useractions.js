import axios from "axios";
import { useNavigate } from "react-router-dom";

export const getAlldata = () => async (dispatch, getstate) =>{
    const res =await axios.get("http://localhost:5000/users")
    dispatch({TYPE:'API', payload:res.data})
}


export const postAllData = (data) =>  async (dispatch) => {
    console.log(data)
    if(data.role === "buy"){
        const res = await axios.post('http://localhost:5000/users',data)
       
    }
    if(data.role === "sell"){
        const res = await axios.post('http://localhost:5000/agent',data)
    }
    dispatch({ type: 'APIPOST', payload: data})
}

export const createProperty = (adddata) => async(dispatch) =>{
     const res = await axios.post()
       
}