import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL ||
        "MONGODB_URL is not defined in environment variables."
    );
    console.log("DB Connection!");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
