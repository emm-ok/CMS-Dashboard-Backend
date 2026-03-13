import express from "express";
import dotenv from "dotenv";
import subjectsRouter from "./routes/subjects";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});