import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, getAllUsers } from "./actions/action";

const App = () => {
  const dispacth = useDispatch();
  // //   useEffect (()=>{
  //     const fetchUsers=()=> dispacth(getAllUsers());
  //     fetchUsers();
  // //   },[])

  const counter = useSelector((state) => state.counter);
  const users = useSelector((state) => state.users);

  console.log(counter);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispacth(increment(5))}>+</button>
      <button onClick={() => dispacth(decrement())}>-</button>
      <button
        onClick={() => {
          dispacth(getAllUsers("test"));
          console.log(users);
        }}
      >
        Get Users
      </button>
      <h1>{users}</h1>
      <button onClick={()=>console.log(users)}>click</button>
      {/* <ul>
        {  users &&
            users.map((user)=>(
                <li>
                    {user.fullName}
                </li>
            ))
        }
      </ul> */}
      {/* <h1>{users && users._id}</h1> */}
    </div>
  );
};

export default App;
