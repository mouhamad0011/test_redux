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
// export const testing = (dispatch,test)=>{
//   return new Promise((resolve, reject) => {
//     dispatch({
//         type: 'test',
//         payload: test
//     })
//       .then(res => resolve(res))
//       .catch(err => reject(err))
// })
// };
// export const testing = (dispatch, test) => {
//   return new Promise((resolve, reject) => {
//     try {
//       dispatch({
//         type: 'test',
//         payload: test
//       });

//       // Assuming the dispatch is successful, resolve the promise
//       resolve('Dispatch successful');
//     } catch (error) {
//       // If an error occurs during dispatch, reject the promise
//       reject(error);
//     }
//   });
// };

export const testing = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/getAll`)
      .then((response) => {
        const testData = response.data.users;
        dispatch({
          type: "test",
          payload: testData
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const getAllCars = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/cars/getAll`)
      .then((response) => {
        //console.log(response);
        const testData = response.data.cars;
        dispatch({
          type: "getAll",
          payload: testData
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const addUser = (state,fullName,phoneNumber,email,password,role) => {
  const newUser={
    fullName,phoneNumber,email,password,role
  }
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users/register`,newUser)
      .then((response) => {
        //console.log(response);
        
        const testData = response.data.newUser;
        state.push(testData);
        dispatch({
          type: "add",
          payload: state
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

