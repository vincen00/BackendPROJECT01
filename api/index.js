import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import bookingRoute from "./routes/booking.js";
import reviewRoute from "./routes/review.js";
import userRoute from "./routes/user.js";
import vehiclesRoute from "./routes/vehicles.js";
const app = express();
dotenv.config();

const connect =async ()=>{

try {
  await mongoose.connect(process.env.MONGO);
  console.log("connected to mongoDB")
} catch (error) {
  throw error;
}
};

mongoose.connection.on("disconnected", ()=>{
  console.log("mongoDB disconnected!")
})

///middleware
app.use("/auth", authRoute);
app.use("/booking", bookingRoute);
app.use("/review", reviewRoute);
app.use("/user", userRoute);
app.use("/vehicles", vehiclesRoute);


app.listen(8800, ()=>{
  connect()
  console.log("connected to backend!");
});