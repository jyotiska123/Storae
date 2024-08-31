import express from "express";
import { connectTodb, getDb } from "./db.js";
import cors from "cors";
import postRoutes from "./PostRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(postRoutes);
let db;

//db connection
connectTodb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app is listening on port 3000");
    });
    db = getDb();
  }
});
app.get("/", (req, res) => {
  res.json({});
});
// app.post("/books", (req, res) => {
//   res.json({
//     success: true,
//     data: "item,",
//   });
// });
// app.get("/books", (req, res) => {
//   res.json({ success: "true" });
// });
