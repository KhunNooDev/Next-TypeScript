import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const dbURI = process.env.MONGODB_URI; // Get the connection string from an environment variable

    if (!dbURI) {
      throw new Error(
        "MongoDB connection string not found in environment variable"
      );
    }

    const options: ConnectOptions = {
      // Add any other Mongoose options you need here
    };

    await mongoose.connect(dbURI, options);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
