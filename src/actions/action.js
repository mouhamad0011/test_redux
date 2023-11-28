import axios from "axios";


export const increment=(number)=> {
  return {
    type: "increment",
    payload: number
  };
}

export const decrement=()=> {
  return {
    type: "decrement"
  };
}

export const getAllUsers = (test)=>{
  return{
    type:"getAllUsers",
    payload:test
  }
}