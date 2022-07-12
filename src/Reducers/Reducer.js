const initialState = {
    info: [],
  };
  
  export const allAgentData = (state = [], action) => {
    switch (action.type) {
      case "API":
        return action.payload;
      case "APIPOST":
        return action.payload;
      default:
        return state;
    }
  };

  export const agentReducers = (state = initialState, action) => {
    switch (action.type) {
      case "AAA":
        const newItems = action.payload;
        return {
          ...state,
          info: [...state.info, newItems],
        };
      default:
        return state;
    }
  };
  
  export const userProfile = (state = {}, action) => {
    switch (action.type) {
      case "ADD_USER":
        const newUser = action.payload;
        return {
          ...state, newUser
        };
        default: return state;
    }
  };

  export default  agentReducers;