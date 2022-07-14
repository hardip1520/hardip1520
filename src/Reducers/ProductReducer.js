// const initialState = {
//   products: [],
// };

const addProperties = (state = {allProducts:[], singleProduct:{}}, action) => {
  switch (action.type) {
    case "ADD":
      return {...state, allProducts: action.payload}
    // case "ADD_PROPERTY":
    //   return action.payload;
    default:
      return state;
  }
};
export default addProperties;
