import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

interface IUser {
  name: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);

    console.log("✅ Connected to MongoDB!");

    const users = await User.find();
    console.log("Users:", users);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

run();
