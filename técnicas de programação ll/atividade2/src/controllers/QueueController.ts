import { Request, Response } from "express";
import { queue } from "../models/instances";
import { QueueView } from "../views/QueueView";

export class QueueController {
  private view = new QueueView();

  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      const response = this.view.errorInvalidItem();
      res.status(response.status).json(response.data);
      return;
    }

    queue.add(item);
    const response = this.view.add();
    res.status(response.status).json(response.data);
  }

  public remove(_req: Request, res: Response): void {
    const removed = queue.remove();
    const response = this.view.remove(removed);
    res.status(response.status).json(response.data);
  }

  public peek(_req: Request, res: Response): void {
    const front = queue.peek();
    const response = this.view.peek(front);
    res.status(response.status).json(response.data);
  }

  public getAll(_req: Request, res: Response): void {
    const response = this.view.getAll();
    res.status(response.status).json(response.data);
  }

  public clear(_req: Request, res: Response): void {
    queue.clear();
    const response = this.view.clear();
    res.status(response.status).json(response.data);
  }
}
