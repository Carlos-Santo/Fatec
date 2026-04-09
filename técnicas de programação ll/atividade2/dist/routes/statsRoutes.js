"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsRoutes = void 0;
const express_1 = require("express");
const StructureStatsController_1 = require("../controllers/StructureStatsController");
const statsRoutes = (0, express_1.Router)();
exports.statsRoutes = statsRoutes;
const controller = new StructureStatsController_1.StructureStatsController();
statsRoutes.get("/", (req, res) => controller.getStats(req, res));
