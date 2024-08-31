// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { useNavigate, Link } from "react-router-dom";
// const Signin = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [data, setData] = useState({ Email: "", Password: "" });
//   const handleInput = (e) => {
//     // console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;
//     setData({ ...data, [name]: value });
//   };

//
//   // let userExist = await db
//   // .collection("users")
//   // .findOne({Email})
//   // if (res.ok) {
//   //   alert("Login Succesful");
//   //   setData({ Email: "", Password: "" });
//   // } else {
//   //   alert("Invalid Credentials");
//   // }

//   // useEffect(() => {
//   //   const grabData = async () => {
//   //     const res = await axios.get("http://localhost:3000/users");
//   //     console.log(res);
//   //     if (res.status === 200) {
//   //       setData(res.data);
//   //     }
//   //     console.log(res);
//   //   };
//   //   grabData();
//   // }, []);

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="Email"
//         placeholder="Enter your Email"
//         onChange={handleInput}
//       />
//       <input
//         type="password"
//         name="Password"
//         placeholder="Enter your Password"
//         onChange={handleInput}
//       />
//       <button type="submit">Submit</button>
//     </form>
//     // <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//     //   <form>
//     //     <label>
//     //       Enter your Email Id{" "}
//     //       <input
//     //         type="email"
//     //         onChange={(e) => {
//     //           setEmail(e.target.value);
//     //         }}
//     //         placeholder="Enter your email"
//     //       />
//     //     </label>
//     //     <label htmlFor="">
//     //       Enter your Password
//     //       <input
//     //         type="password"
//     //         onChange={(e) => setPassword(e.target.value)}
//     //         placeholder="Password"
//     //       />
//     //     </label>
//     //   </form>
//     //   <div>
//     //     New to our Store?
//     //     <a href="/auth/signup">Sign up</a>
//     //   </div>
//     // </div>
//     // <>{JSON.stringify(peta)}</>
//   );
// };

// export default Signin;

// // import React from "react";

// // const Signin = () => {
// //   return (
// //     <div>
// //       <input type="text" />
// //       <input
// //         type="password
// //       "
// //       />
// //     </div>
// //   );
// // };

// // export default Signin;
import React, { useState } from "react";
import img from "../../img/zodiac-sign-fashion-guide.png";
import { Link, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import "./Signin.css";
const Signin = () => {
  const navigate = useNavigate();
  // let db = getDb();
  const [data, setData] = useState({ Email: "", Password: "" });
  // let email = data.Email;
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log(res);
      if (res.ok) {
        setData({ Email: "", Password: "" });
        alert("login sucessful");
        console.log(data);
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      // console.log(JSON.parse(res));
      // try {
      //   let userExist = await db.collection("users").findOne({ email });
      //   if (!userExist) {
      //     alert("Invalid Credentials");
      //   }
      //   let user = await userExist.comparePassword(Password);
      //   if (user) {
      //     alert("Login successful");
      //   } else {
      //     res.status(401).json({ message: "Invalid password" });
      //     alert("Invalid Password");
      //   }
      //   console.log(res);
      // } catch (error) {
      //   console.log("login", error);
      // }

      console.log("login", error);
      navigate("/error/400");
    }
  }
  return (
    <div className="ouch">
      {/* <img
        style={{ width: "300px", height: "300px" }}
        src={img}
        alt="whatevs"
      /> */}
      <form onSubmit={handleSubmit}>
        <input
          className="inputt"
          type="text"
          name="Email"
          placeholder="Enter your Email"
          value={data.Email}
          onChange={handleInput}
        />
        <input
          className="inputt"
          type="password"
          name="Password"
          value={data.Password}
          placeholder="Enter your Password"
          onChange={handleInput}
        />
        <button className="buttn" type="submit">
          Submit
        </button>
        <div className="linkkk">
          New to our website? <a href="/auth/signup"> Register here!</a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
