import {  allAgentData ,agentReducers } from './Reducer';
import addProducts from './ProductReducer';
import {combineReducers } from 'redux'

const rootReducer = combineReducers({
    agentReducers, allAgentData, addProducts
})

export default rootReducer
