import { MongoClient } from "mongodb";
let dbConnection;
const url =
  "mongodb+srv://jyotiskasaha743:jo1234@cluster0.82nxvpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectTodb = (cb) => {
  try {
    MongoClient.connect(url).then((client) => {
      dbConnection = client.db("Users");
      return cb();
    });

    // const client = await MongoClient.connect();
  } catch (err) {
    console.log(err.messge);
    return cb(err);
  }
};
const getDb = () => dbConnection;

// const someFunction = (person) => {
//     console.log(person.name)
// }

// const personInAnotherPlace = {
//     name: "Supriyo"
// }

// someFunction(personInAnotherPlace)

export { connectTodb, getDb };
