import mongoose from "mongoose";

const connectDB = (URL) => {
  try {
    mongoose
      .connect(URL, {
        dbName: "reactUI_mui",
      })
      .then(() => {
        console.log("database connectd successfully");
      }); // Connect to MongoDB database using Mongoose
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
