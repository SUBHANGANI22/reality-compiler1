import express from "express";
import cors from "cors";
import compileRouter from "./routes/compile"; 

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_, res) => res.json({ status: "ok" }));

// Compile route
app.use("/compile", compileRouter);

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
