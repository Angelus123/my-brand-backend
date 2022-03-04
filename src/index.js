import express from "express"
import userRouter from "./users/routers/user.route.js"
const app = express();
app.use(express.json());
app.use(userRouter);
app.listen(3000,()=>console.log("server is running at port 3000"))