import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import helmet from 'helmet';
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

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


 // MONGOOSE SETUP
 const PORT = process.env.PORT || 5000;
 mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 }).then(() => {
   app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
 
 }).catch((error) => console.log(`${error} did not connect`))