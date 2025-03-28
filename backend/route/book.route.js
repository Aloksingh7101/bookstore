import express from "express";
import { getBook } from "../controller/book.controler.js";
const router = express.Router();

router.get("/", getBook);  // Calls getBook when a GET request is made to "/books"

export default router;