import stdReducers, {  allAgentData ,agentReducers } from './Reducer';
import {combineReducers } from 'redux'

const rootReducer = combineReducers({
    agentReducers, allAgentData 
})

export default rootReducer
