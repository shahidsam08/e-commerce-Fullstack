import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "store_user" });
    console.log("MongoDB is connected!");
  } catch (err) {
    console.log("MongoDB connection failed : ", err);
  }
};

export default connectDB;
