import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { shoesRouter } from './routes/shoes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${new Date().toLocaleTimeString('en-US', { hour12: false })}`);
  next();
});
app.use('/shoes', shoesRouter);

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
