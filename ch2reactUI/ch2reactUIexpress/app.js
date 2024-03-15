import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import connectDB from "./database/database.js";
import dotenv from "dotenv";
import { join } from "path";
import upload from "./middleware/upload_middleware.js";
dotenv.config();

const port = process.env.PORT || 8000;
const url = process.env.URL;
const app = express();
app.use(cors());
// parse request of content type - application/x-www-form-urlencoded and multipart/form-data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
connectDB(url);
app.use(express.static(join(process.cwd(), "public",'uploads', "images")));
app.use(express.static(join(process.cwd(), "public",'uploads', "doc")));
app.use(
  upload.fields([
    //single file save garna ho vane upload.single use garne natra upload.field
    { name: "images", maxCount: 1 },
              { name: "doc", maxCount: 1 }, ])
); //for multiple images to be uploaded at once

app.use("/home", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
