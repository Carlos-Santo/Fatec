import "dotenv/config";
import express, { Request, Response } from "express";
import path from "path";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
