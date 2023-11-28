import axios from "axios";

const testReducer =(state = [], action) => {
    switch (action.type) {
      case "test":
       return [...state,action.payload];
       case "add":
        return state;
      default:
        return state;
    }
  }
  export default testReducer;