import {  allAgentData ,agentReducers } from './Reducer';
import addProperties from './ProductReducer';
import {combineReducers } from 'redux'

const rootReducer = combineReducers({
    agentReducers, allAgentData, addProperties
})

export default rootReducer
