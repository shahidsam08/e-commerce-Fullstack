import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/Database/db.js";
import User from "./src/model/user.js";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  console.log("Hello world");
  res.send("hello world");
});

// Sign up logic
app.post("/api/registers", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.json("already have an account");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hassedpassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hassedpassword,
      });
      if (newUser) {
        return res.status(200).json("New user created");
      }
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Log in Logic to enter securely into the websites.
// JWT token based and compare the email and the password.

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const databasepassword = await bcrypt.compare(password, user.password)
      if(databasepassword) {
        return res.json("Log In successfully!")
      } else {
        return res.json("password is wrong")
      }
    } else {
      return res.json("Email is wrong!")
    }
  } catch (error) {
    console.log("The error is ", error)
  }
});

app.listen(Number(process.env.PORT) || 5002, () => {
  console.log(process.env.PORT);
  console.log("Server is running at : ");
  console.log(`http://localhost:${process.env.PORT}`);
});
