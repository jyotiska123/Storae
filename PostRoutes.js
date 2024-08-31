import express from "express";
import { getDb, connectTodb } from "./db.js";
import { ObjectId } from "mongodb";
import login from "./login.js";
// Print new id to the console

let postRoutes = express.Router();
postRoutes.route("/users").get(async (req, res) => {
  let db = getDb();
  let data = await db.collection("users").find({}).toArray();
  //   try {
  if (data.length > 0) {
    res.json(data);
  }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  else {
    throw new Error("Hello");
  }
});

postRoutes.route("/users/:id").get(async (req, res) => {
  let db = getDb();
  let data = await db
    .collection("users")
    .findOne({ _id: new ObjectId(req.params.id) });

  if (Object.keys(data).length > 0) {
    res.json(data);
  } else {
    throw new Error("Data not found");
  }
});
postRoutes.route("/users/create").post(async (req, res) => {
  let db = getDb();
  let mongoObject = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
    Confirm_Password: req.body.Confirm_Password,
  };

  //   if (mongoObject.Password == mongoObject.Confirm_Password) {
  let data = await db.collection("users").insertOne(mongoObject);
  res.json(data);

  //   } else {
  //     throw new Error("Passwords should match");
  //   }
});
postRoutes.route("/users/edit/:id").put(async (req, res) => {
  let db = getDb();
  let mongoObject = {
    $set: {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
      Confirm_Password: req.body.Confirm_Password,
    },
  };

  if (mongoObject.Password == mongoObject.Confirm_Password) {
    let data = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(req.params.id) }, mongoObject);
    res.json(data);
  } else {
    throw new Error("Passwords must match");
  }
});

postRoutes.route("/users/delete/:id").delete(async (req, res) => {
  let db = getDb();
  let data = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(req.params.id) });

  res.json("sucessfully deleted");
});

postRoutes.route("/login").post(login);

export default postRoutes;
