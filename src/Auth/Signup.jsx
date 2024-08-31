import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
// import { getDb } from "../../db";
const Signup = () => {
  // let db = getDb();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
    Confirm_Password: "",
  });
  const handleInput = (e) => {
    // e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    try {
      const res = await fetch("http://localhost:3000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      setUser({
        Name: "",
        Email: "",
        Phone: "",
        Password: "",
        Confirm_Password: "",
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log("register", error);
    }

    // await db.collection("users").insertOne(user);

    // alert("d");
  }
  // useEffect(() => {
  //   const grabData = async () => {
  //     const res = await axios.post("http://localhost:3000/users/create");
  //     console.log(res);
  //     // if (res.status === 200) {
  //     //   setData(res.data);
  //     // }
  //     // console.log(res);
  //   };
  //   grabData();
  // }, []);
  return (
    <form className="ouch" onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          {/* Name */}
          <input
            className="inputt"
            type="text"
            name="Name"
            placeholder="Enter your name here"
            value={user.Name}
            onChange={handleInput}
          />
        </label>
        <label>
          {/* Email Address */}
          <input
            className="inputt"
            type="email"
            name="Email"
            placeholder="Enter your email address here"
            value={user.Email}
            onChange={handleInput}
          />
        </label>
        <label>
          {/* Phone Number */}
          <input
            className="inputt"
            type="number"
            name="Phone"
            placeholder="Enter your phone number here"
            value={user.Phone}
            onChange={handleInput}
          />
        </label>
        <label>
          {/* Password */}
          <input
            className="inputt"
            type="password"
            name="Password"
            placeholder="Enter your password here"
            value={user.Password}
            onChange={handleInput}
          />
        </label>
        <label>
          {/* Password */}
          <input
            className="inputt"
            type="password"
            name="Confirm_Password"
            placeholder="Confirm your password here"
            value={user.Confirm_Password}
            onChange={handleInput}
          />
        </label>
        <button className="buttn" type="submit">
          Submit
        </button>
        <div className="linkkk">
          Already have an account? <a href="/auth/signin">Click here</a>
        </div>
      </div>
    </form>
  );
};

export default Signup;

//   } else {
//     throw new Error("Passwords should match");
//   }
