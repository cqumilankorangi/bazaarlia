import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    // const password = encodeURIComponent(process.env.MONGO_PASSWORD)
    const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(process.env.MONGO_URI)
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
