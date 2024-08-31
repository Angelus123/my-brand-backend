import express from "express";
import userRouter from "./users/routers/user.route.js";
import blogRouter from "./blogs/routers/blog.route.js";
import messageRouter from "./messages/routers/message.route.js";
import dotenv from "dotenv";
import cors from "cors";
import booksRouter from "./routes/books.js";

dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT;
const app = express(); 
app.use("/books", booksRouter);
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{res.status(200).send({
  status:200, 
  message:'welcome to patiente registration',
})})
app.use("/books", booksRouter);
app.use("/api/v1/", userRouter);
app.use("/api/v1/", blogRouter);
app.use("/api/v1/", messageRouter);
app.listen(port, () => console.log(`server is running at port ${port}`));
export default app