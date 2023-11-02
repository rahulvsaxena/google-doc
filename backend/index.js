import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const mongoDBURL = process.env.mongoDBURL;
const PORT = process.env.PORT;
import mongoose from 'mongoose';
import docRoutes from './routes/docRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(req,res) => {
  res.send("Backend of Google Docs, By Rahul Saxena");
})
app.use('/doc', docRoutes);

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