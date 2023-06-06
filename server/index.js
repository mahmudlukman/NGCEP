import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import helmet from 'helmet';
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import productRouter from './routes/product.js'
import geographyRouter from './routes/geography.js'
import salesRouter from './routes/sales.js'
import generalRouter from './routes/general.js'

import Transaction from './models/Transaction.js';
import OverallStat from './models/overallStat.js';
import { dataTransaction, dataOverallStat } from "./data/index.js"

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


// ROUTES
app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/geography", geographyRouter)
app.use("/sales", salesRouter)
app.use("/general", generalRouter);


 // MONGOOSE SETUP
 const PORT = process.env.PORT || 5000;
 mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 }).then(() => {
   app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  //  Transaction.insertMany(dataTransaction);
  // OverallStat.insertMany(dataOverallStat);
 }).catch((error) => console.log(`${error} did not connect`))