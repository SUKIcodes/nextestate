import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Mongodb is already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB, {
      dbName: "next-estate",
    });
    initialized = true;
    console.log("Mongodb is connected");
  } catch (error) {
    console.log(`Mongodb is not connected ${error.message}`);
  }
};
