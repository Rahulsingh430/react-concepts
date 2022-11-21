import React, { useState } from "react";

export default function App() {
  const [myCar, setMyCar] = useState("Volvo");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const handleUpdate = (e) => {
    const cc = e.target.value;
    setCar((x) => {
      return { ...x, color: cc,brand:cc };
    });
  };

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };
  return (
    <div>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
      <p>{myCar}</p>
      {/* <p>{car}</p> */}
      <label>Enter to change dictionary value of color:</label>
      <input type="text" value={car.color} onChangeCapture={handleUpdate} />
      {console.log(car.color)}
      {console.log(car)}
      <p>{car.color}</p>
      <p>{car.brand}</p>
    </div>
  );
}
