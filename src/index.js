import express from "express";
import userRouter from "./users/routers/user.route.js";
import blogRouter from "./blogs/routers/blog.route.js";
import messageRouter from "./messages/routers/message.route.js";
import * as globalErrorHandling from "./utils/ErrorController.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("uncaught Exception * Shutdown");
  process.exit(1);
});
dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT;
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" Db connection done successfully"));
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{res.status(200).send({
  status:200, 
  message:'welcome to patiente registration',
})})
app.use("/api/v1/", userRouter);
app.use("/api/v1/", blogRouter);
app.use("/api/v1/", messageRouter);
app.use(globalErrorHandling.globalErrorHandling);
app.listen(port, () => console.log(`server is running at port ${port}`));
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhundled rejection * Shutdown");
  server.close(() => process.exit(1));
});
export default app