import { Request, Response } from "express";
import { LeadFacade } from "../facade/leadFacade";

export class LeadController {
  static create(req: Request, res: Response) {
    res.json(LeadFacade.create(req.body));
  }

  static list(req: Request, res: Response) {
    res.json(LeadFacade.list());
  }

  static get(req: Request, res: Response) {
    res.json(LeadFacade.get(Number(req.params.id)));
  }

  static advance(req: Request, res: Response) {
    res.json(LeadFacade.advance(Number(req.params.id)));
  }

  static finalize(req: Request, res: Response) {
    res.json(
      LeadFacade.finalize(Number(req.params.id), req.body.success)
    );
  }
}