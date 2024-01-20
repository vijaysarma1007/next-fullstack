import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(db.connections[0].readyState);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
