

const carsReducer =(state = {}, action) => {
    switch (action.type) {
      case "getAll":
       return {...state,cars:action.payload};
      default:
        return state;
    }
  }
  export default carsReducer;