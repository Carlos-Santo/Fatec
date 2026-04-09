"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureStatsController = void 0;
const StatsView_1 = require("../views/StatsView");
class StructureStatsController {
    constructor() {
        this.view = new StatsView_1.StatsView();
    }
    getStats(_req, res) {
        const response = this.view.getStats();
        res.status(response.status).json(response.data);
    }
}
exports.StructureStatsController = StructureStatsController;
