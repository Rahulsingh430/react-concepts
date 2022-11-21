import React, { useState } from "react";

function Forms() {
  const [formvalue, setFormvalue] = useState({});
  const [textarea, setTextarea] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    alert(`hey its ${formvalue.username}, ${formvalue.age}`);
    console.log(formvalue);
    console.log(textarea);
  };

  const handleValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormvalue((x) => ({ ...x, [name]: value }));
  };

  const handleChange = (e) => {
    setTextarea(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={formvalue.username || ""}
            onChange={handleValue}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={formvalue.age || ""}
            onChange={handleValue}
          />
        </label>
        <label>
          {" "}
          Description Box:
          <textarea value={textarea} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Forms;
