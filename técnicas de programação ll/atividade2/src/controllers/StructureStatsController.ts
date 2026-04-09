import { Request, Response } from "express";
import { StatsView } from "../views/StatsView";

export class StructureStatsController {
  private view = new StatsView();

  public getStats(_req: Request, res: Response): void {
    const response = this.view.getStats();
    res.status(response.status).json(response.data);
  }
}
