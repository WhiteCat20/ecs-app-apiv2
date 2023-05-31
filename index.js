import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/route.js";
import { checkApiKey } from "./middleware/checkApiKey.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(checkApiKey);
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
//middleware to enable access of the uploads folder
app.use("/uploads", express.static("uploads"));
app.use(router);

app.listen(4000, () => {
  console.log(`Server is running`);
});
