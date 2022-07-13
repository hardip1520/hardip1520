import axios from "axios";


export const getProperty = () =>async (dispatch) =>{
    const res = await axios.get("http://localhost:5000/properties")
    dispatch({TYPE:'ADD', payload:res.data})
}


export const postallProperties = (data) =>async (dispatch) =>{

    const res = await axios.post("http://localhost:5000/properties",data)
   dispatch({TYPE:'ADD_PROPERTY',payload:data})

}