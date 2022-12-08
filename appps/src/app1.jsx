import { useState, useEffect, useContext } from "react";
import React from "react";
import Axios from "axios";
import { AppContext } from ".";

let LOGINUSERKEY = "LOGINUSERKEY";
function App1() {
  const {userName, setUserName}=useContext(AppContext);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  const [num, setNum] = useState(1);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const key = JSON.parse(localStorage.getItem("LOGINUSERKEY"));
  //   console.log(key);
  // });
const takeInput=(e)=>{
  setUserName(e.target.value)
}

  const handleget = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  const get = async () => {
    setLoading(true);
    const { data } = await Axios.get(
      `https://jsonplaceholder.typicode.com/photos/${num}`
    );
    setUser(data);
    setLoading(false);
    localStorage.setItem("LOGINUSERKEY", JSON.stringify(data));
    console.log(data);
    
  };
  useEffect(() => {
    // Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
    //   (response) => {
    //     setUser(response.data);
    //     console.log(response.data);
    //   }
    // );
    get();
  }, [num]);
  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <h1>I've rendered {userName} as User name</h1>
      <input type="text" onChange={takeInput} />
      
      <button onClick={handleget}>Get image</button>
      {/* {user.map((x) => ( */}
      <div>
        <h1>{user.userId}</h1>
        <h1>{user.title}</h1>
        <img src={user.url} />
      </div>
      {/* ))} */}
    </>
  );
}

export default App1;
