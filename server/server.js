import  dotenv from 'dotenv'  
import  express  from "express";
import bodyparser from "body-parser"
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from "cors";

//rest object
const app = express();
dotenv.config();



// DB Connection
// mongoose.set("strictQuery", false);
mongoose.connect(`${process.env.MONGO_URL}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log("connected")).catch((err) => console.log(err + " error from DB"))


app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// app.use(morgan(dev));


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);






//rest api
app.get("/", (req, res) => {
    res.send("Welcome to ecommerce app");
  });

// middleware 
 app.use(express.json());
app.use(morgan("dev"));

 //PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });