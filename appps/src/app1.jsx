import { useState, useEffect } from "react";
import React from "react";
import Axios from "axios";

let LOGINUSERKEY = "LOGINUSERKEY";
function App1() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("LOGINUSERKEY"));
    console.log(key);
  });

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  const get = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setUser(data);
    localStorage.setItem("LOGINUSERKEY", JSON.stringify(data));
    // console.log(data);
  };
  useEffect(() => {
    // Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
    //   (response) => {
    //     setUser(response.data);
    //     console.log(response.data);
    //   }
    // );
    get();
  }, []);

  return (
    <>
      <h1>I've rendered {count} times!</h1>;
      <div>
        <p>{user.userId}</p>
        <h1>{user.title}</h1>
      </div>
    </>
  );
}

export default App1;
