const initialState = {
  products: [],
};

export const addProducts = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return action.payload;
    case "ADD_PROPERTY":
      return action.payload;
    default:
      return state;
  }
};
export default addProducts;
