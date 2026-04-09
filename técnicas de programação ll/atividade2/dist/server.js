"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.routes);
app.use((_req, res) => {
    res.status(404).json({ erro: "Rota não encontrada." });
});
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});
