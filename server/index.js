import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import helmet from 'helmet';

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

 // MONGOOSE SETUP
 const PORT = process.env.PORT || 5000;
 mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 }).then(() => {
   app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
 
 }).catch((error) => console.log(`${error} did not connect`))