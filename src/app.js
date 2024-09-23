import express from 'express';
import router from "./routes/index.js"
import cors from "cors";
const app = express();
   

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    message: 'welcome_message',
  });
});
app.use('/api/v1/', router);

export default app
