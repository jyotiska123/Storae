//   res.status(200).send("Welcome to login page");
// };

import React from "react";
import mongoose  from "mongoose";
import bcrypt from "bcryptjs"
import config from "./config.json" with { type: "json" }
import User from "../client/usermodel.js"
const login = async (req, res) => {
mongoose.connect(config.connection);
  try {
    console.log(req.body);
const {Email, Password} = req.body;
    const userExist= await User.findOne( {Email})

    if (!userExist){
      return res.status(401).json({msg:"user does not exist"})
 }
 if(userExist.Email==Email&&userExist.Password==Password){
  // const user={user:userExist}
  return res.status(200).json({
  message:"Login successful"})
 }
else{
return res.status(400).json({error:true, message:"Invalid credentials"})
    }
    
// const userCreated=await User.create({Name,Email, Password, Confirm_Password})
// res.status(200).json({msg:userCreated})
  } catch (error) {
    res.status(500).json({msg:"Internal server error"})
  }
  //   return <div>login</div>;
};

export default login;
