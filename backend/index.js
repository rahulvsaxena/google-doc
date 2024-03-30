import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const mongoDBURL = process.env.mongoDBURL;
const PORT = process.env.PORT;
import mongoose from 'mongoose';
import docRoutes from './routes/docRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.json());

app.use(cors());

app.get('/',(req,res) => {
  res.send("Backend of Google Docs, By Rahul Saxena");
})
app.use('/doc', docRoutes);
app.use('/user',userRoutes)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });