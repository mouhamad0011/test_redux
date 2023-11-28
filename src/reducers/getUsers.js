import axios from "axios";
const usersReducer =async(state="" , action) => {
  //console.log(state)
  switch (action.type) {
    case "getAllUsers":
      //const fetchUsers= await axios.get(`http://localhost:5000/users/getAll`)
      //console.log(fetchUsers)
      return state+action.payload;
        // .then((response) => {
        //   //console.log(response.data.users);
        //   return response.data.users;
        // })
        // .catch((error) => {
        //   return error;
        // });
    default:
      return state;
  }
};
export default usersReducer;
