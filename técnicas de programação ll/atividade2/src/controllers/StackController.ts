import { Request, Response } from "express";
import { stack } from "../models/instances";
import { StackView } from "../views/StackView";

export class StackController {
  private view = new StackView();

  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      const response = this.view.errorInvalidItem();
      res.status(response.status).json(response.data);
      return;
    }

    stack.add(item);
    const response = this.view.add();
    res.status(response.status).json(response.data);
  }

  public remove(_req: Request, res: Response): void {
    const removed = stack.remove();
    const response = this.view.remove(removed);
    res.status(response.status).json(response.data);
  }

  public peek(_req: Request, res: Response): void {
    const top = stack.peek();
    const response = this.view.peek(top);
    res.status(response.status).json(response.data);
  }

  public getAll(_req: Request, res: Response): void {
    const response = this.view.getAll();
    res.status(response.status).json(response.data);
  }

  public clear(_req: Request, res: Response): void {
    stack.clear();
    const response = this.view.clear();
    res.status(response.status).json(response.data);
  }
}
