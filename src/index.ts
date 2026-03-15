import express from "express";
import dotenv from "dotenv";
import subjectsRouter from "./routes/subjects";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

if(!process.env.CLIENT_URL){
  throw new Error("CLIENT_URL is not set in .env file");
}
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.use(express.json());
  
app.use("/api/subjects", subjectsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});