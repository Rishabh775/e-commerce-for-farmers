// import all necessary packages and defined variables
import * as dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import equipmentRoute from "./routes/equipmentRoute.js"
import adminRoute from "./routes/adminRoute.js"
import areaRoute from "./routes/areaRoute.js"
import bookingDtlRaoute from "./routes/bookingDtlRoute.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config()


const port = 3000
const app = express()

const url = process.env.DB_URL

// setting the app with ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// use bodyParser package
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public/`))

// connection from mongoDB
const connectDB = async () => {
   try {
      await mongoose.connect(url)
      console.log('connected to mongoDB');
   } catch {
      throw error
   }
}

// home route
app.get('/', (req, res) => {
   res.render('index')
   // res.send('hello world')
})

app.get('/register', (req, res) => {
   res.render('register')
})

app.get('/login', (req, res) => {
   res.render('login')
})

app.get('/contact', (req, res) => {
   res.render('contact')
})

app.use(cookieParser())
app.use(express.json())

// middleware
app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/admin', adminRoute)
app.use('/equipment', equipmentRoute)
app.use('/area', areaRoute)
app.use('/booking', bookingDtlRaoute)

// error status 
app.use((err, req, res, next) => {
   const errStatus = err.status || 500
   const errMessage = err.message || "somthing went wrong!"
   return res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMessage,
      stack: err.stack
   })
})

// server listem to the port
app.listen(port, (req, res) => {
   connectDB()
   console.log(`connected on port ${port}`)
})