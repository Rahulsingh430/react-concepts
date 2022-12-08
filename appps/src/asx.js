import React from "react";
import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import New from "./New";
import { AppContext } from ".";

const Asx = () => {
  const {userName}=useContext(AppContext);
  const cars = ["Ford", "BMW", "Audi"];
  const One = {
    brand: "Tesla",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };
  const Hello = ({ color, brand, registration: { country } }) => {
    return (
      "my car is " + " with " + color + " color in " + country
    );
  };
  const Hey = ({ model, type, year, registration: { city } }) => {
    return (
      "My Car model " + model + "of " + type + " of " + year + " in " + city
    );
  };
  const q = 1;
  const myq = <h1>{q < 10 ? "small" : "big"}</h1>;

  const [Value, setValue] = useState(false);
  const shoot = (a) => {
    alert(a);
  };

  return (
    <>
      <div>Hey this new componenet username is : {userName}</div>
      <p>{Hello(One)}</p>
      {myq}

      {Value ? <p>{Hello(One)}</p> : <p>{Hey(One)}</p>}

      <button
        type="button"
        onClick={() => {
          setValue(!Value);
        }}
      >
        click me
      </button>

      <button
        onClick={() => {
          shoot("bhot badhiya");
        }}
      >
        Daba
      </button>
      <div>{Value && <h1>ye true hai </h1>}</div>

      <New brands={cars} />
      <Outlet />
    </>
  );
};

export default Asx;
