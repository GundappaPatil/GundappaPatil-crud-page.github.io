import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import Data from "./Data";

const Edit = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  // function handleChange(e) {
  //   // console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }

  let history = useNavigate();
  var index = Data.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Data[1];
    a.name = name;
    a.lastname = lastName;
    a.age = age;
    history("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setLastName(localStorage.getItem("LastName"));
    setAge(localStorage.getItem("Age"));
  }, []);

  return (
    <div>
      <form>
        {/* <leble for="img">Select Image:</leble>
        <input
          className="pic"
          type="file"
          id="img"
          onChange={handleChange}
        ></input>
        <img src={file} /> */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter your lastName"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
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

export default Edit;
