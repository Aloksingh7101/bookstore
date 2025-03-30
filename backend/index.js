import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

// In your Express app (server.js/index.js)
const corsOptions = {
  origin: process.env.https://bookstore-nine-puce.vercel.app/|| "http://localhost:3000", // Must match your frontend URL exactly
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // MUST include OPTIONS
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  credentials: true, // If using cookies/tokens
  preflightContinue: false, // Let CORS handle preflight
  optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions)); // Enable preflight for all routes
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB Connection
(async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection Error:", error);
    process.exit(1);
  }
})();

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});