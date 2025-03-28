import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";



dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT||4000;
const URI = process.env.MongoDBURI;
try {
      mongoose.connect(URI, {
            useNewUrlParser: true, // Fixed property name (NewUriParser -> NewUrlParser)
            useUnifiedTopology: true // Removed semicolon, replaced with a comma if adding more options
      });
      console.log("Connected to MongoDB");
} catch (error) {
      console.log("Error", error);
}
// difining route
app.use("/book",bookRoute)
app.use("/user",userRoute)

    

app.listen(PORT,()=>{
      console.log(`server run suucesfully ${PORT}`);
});