import express from "express"
import userRouter from "./users/routers/user.route.js"
import blogRouter from "./blogs/routers/blog.route.js"
import commentRouter from "./comments/routers/comment.route.js"
import messageRouter from "./messages/routers/message.route.js"
import mongoose from "mongoose";  
import dotenv from "dotenv"
// process.on('uncaughtException', err => {
//   console.log(err.name,err.message)
//   console.log('uncaught Exception * Shutdown')
//   process.exit(1)
// })      
dotenv.config({ path: "./config/config.env" }); 
const port = process.env.PORT;
const DB = process.env.DATABASE; 
dotenv.config({ path: ".env" }); 
process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  }).then(()=> console.log(" Db connection done successfully"))
 
const app = express();
app.use(express.json());
app.use('/api/v1/', userRouter);
app.use('/api/v1/', blogRouter);
app.use('/api/v1/', commentRouter);
app.use('/api/v1/', messageRouter);
app.listen(port,()=>console.log(`server is running at port ${port}`))