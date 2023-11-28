import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,testing,getAllCars,addUser } from "./actions/action";

const App = () => {
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("");
  const [bool,setBool] = useState(true);
  const dispacth = useDispatch();

  const counter = useSelector((state) => state.counter);
  //const users = useSelector((state) => state.users);
  const test = useSelector((state) => state.test);
  //console.log(counter);
  const cars = useSelector((state)=> state.cars);
  const getUsers=()=>dispacth(testing());
  const getCars =()=> dispacth(getAllCars())
  
  useEffect(() => {
    getUsers();
    getCars();
  }, [dispacth]);
  console.log(cars);
  console.log(test);
  return (
    <div>
      {/* <form onSubmit={()=>{dispacth(addUser(name,number,email,password,role));setBool(!bool)}}>
        fullName<input type="text" onChange={(e)=>setName(e.target.value)}/>
        phone number<input type="text" onChange={(e)=>setNumber(e.target.value)}/>
        email<input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        password<input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        role<input type="text" onChange={(e)=>setRole(e.target.value)}/>
        <button type="submit">submit</button>
      </form> */}
      
      <button onClick={()=>dispacth(addUser(test,"test","1c12cdccc2xs43ccd3","testcccxcsccdd@gmail.com","12345","admin"))}>add</button>
   
      
      
     
    </div>
  );
};

export default App;
