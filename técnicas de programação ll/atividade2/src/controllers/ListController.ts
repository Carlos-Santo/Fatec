import { Request, Response } from "express";
import { list } from "../models/instances";
import { ListView } from "../views/ListView";

export class ListController {
  private view = new ListView();

  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      const response = this.view.errorInvalidItem();
      res.status(response.status).json(response.data);
      return;
    }

    list.add(item);
    const response = this.view.add();
    res.status(response.status).json(response.data);
  }

  public remove(_req: Request, res: Response): void {
    const removed = list.remove();
    const response = this.view.remove(removed);
    res.status(response.status).json(response.data);
  }

  public removeAt(req: Request, res: Response): void {
    const index = Number(req.params.index);

    if (Number.isNaN(index)) {
      const response = this.view.errorInvalidIndex();
      res.status(response.status).json(response.data);
      return;
    }

    const removed = list.removeAt(index);
    const response = this.view.removeAt(removed, index);
    res.status(response.status).json(response.data);
  }

  public getAt(req: Request, res: Response): void {
    const index = Number(req.params.index);

    if (Number.isNaN(index)) {
      const response = this.view.errorInvalidIndex();
      res.status(response.status).json(response.data);
      return;
    }

    const item = list.getAt(index);
    const response = this.view.getAt(item, index);
    res.status(response.status).json(response.data);
  }

  public peek(_req: Request, res: Response): void {
    const last = list.peek();
    const response = this.view.peek(last);
    res.status(response.status).json(response.data);
  }

  public getAll(_req: Request, res: Response): void {
    const response = this.view.getAll();
    res.status(response.status).json(response.data);
  }

  public clear(_req: Request, res: Response): void {
    list.clear();
    const response = this.view.clear();
    res.status(response.status).json(response.data);
  }
}
