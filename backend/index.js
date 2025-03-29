import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
dotenv.config();
// console.log(process.env.MongoDBURI,'dak;lfa;f')
const app=express();
app.use(cors({
  origin: "*", // Allow all origins (or replace with ["http://example.com", "https://yourfrontend.com"])
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI; 

// Use async/await for better error handling
(async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection Error:", error);
    process.exit(1); // Exit if DB connection fails
  }
})();
// difining route
app.use("/book",bookRoute)
app.use("/user",userRoute)

    

app.listen(PORT,()=>{
      console.log(`server run suucesfully ${PORT}`);
});