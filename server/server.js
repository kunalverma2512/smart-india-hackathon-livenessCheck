import express from 'express';
import cors from "cors";
import { configDotenv } from 'dotenv';
import mailRouter from './routes/mailRoutes.js';
configDotenv();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());




app.use("/send-mail",mailRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});