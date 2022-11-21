import React, { useState } from "react";

function New(props) {
  let [Value, setValue] = useState(true);
  let x = props.brands;
  return (
    <div>
      <button onClick={() => setValue(false)}>press</button>
      {x.map((car) => (car === "BMW" ? <h1>{car}</h1> : <h1>not BMW</h1>))}
    </div>
  );
}

export default New;
