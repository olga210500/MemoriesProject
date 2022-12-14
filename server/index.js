import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());
app.use('/posts',postRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
