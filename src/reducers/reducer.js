const counterReducer =(state = 1, action) => {
  switch (action.type) {
    case "increment":
     // return state + 1;
     return state + action.payload;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
export default counterReducer;
