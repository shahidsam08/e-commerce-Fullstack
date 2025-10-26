import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/Database/db.js";
import User from "./src/model/user.js";


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  console.log("Hello world");
  res.send("hello world");
})


// Sign up logic
app.post("/registers", (req,res) => {
  const { firstname, lastname, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.json("already have an account");
    } else {
      User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
        .then((result) => res.json("Account created!", result))
        .catch((err) => res.json(err))
    }
  });
});

// sign in logic 
app.post("/login", (req, res)=> {
  const {email, password} = req.body;
  User.findOne({ email: email}).then((user) => {
    if(user) {
      if(user.password === password ) {
        res.json("Log in successfully!")
      } else {
        res.json("The password is incorrect!")
      }
    } else {
      res.json("Create your account!")
    }
  })
})



app.post("/api/userdata",async (req, res) => {
  await User.findById("68fb33b0f4ef8a35d4e8c6cf").then((result) => {
    res.json(result.email)
 }).catch((error) => {
  res.json({message : error})
 })
})
  

app.listen(Number(process.env.PORT) || 5002, () => {
  console.log(process.env.PORT);
  console.log("Server is running at : ");
  console.log(`http://localhost:${process.env.PORT}`);
});
