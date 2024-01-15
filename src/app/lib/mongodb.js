import mongoose from "mongoose";

export const connectMongodb = async () => {
    console.log("MongoDB Connection String:", process.env.MONGODB_URL);
  try {

    await mongoose.connect(process.env.MONGODB_URL, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to Mongodb");
  } catch (err) {
    console.log("Couldn't connect to mongodb" + err);
  }
};
