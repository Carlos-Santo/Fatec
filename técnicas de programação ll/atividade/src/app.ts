import express from "express";
import cors from "cors";
import leadRoutes from "./routes/leadRoutes";

const app = express();

app.use(cors()); // 👈 ISSO RESOLVE
app.use(express.json());
app.use(leadRoutes);

export default app;