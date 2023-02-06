import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Data from "./Data";

const Add = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    let uid = uuid();
    let uniqueId = uid.slice(0, 8);

    let a = file,
      b = name,
      c = lastName,
      d = age;

    Data.push({ id: uniqueId, image: a, name: b, lastname: c, age: d });
    history("/");
  };

  return (
    <div>
      <form>
        <leble for="img">Select Image:</leble>
        <input
          className="pic"
          type="file"
          id="img"
          onChange={handleChange}
        ></input>
        <img src={file} />
        <input
          type="text"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter your lastName"
          required
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Enter your age"
          required
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Add;
