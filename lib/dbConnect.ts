// This file will set up the Mongo DB Connection

import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(uri);
    // console.log("Database Connected");
    return connection;
  } catch (error) {
    console.log("db connection fail: ", error);
  }
};

export default dbConnect;
