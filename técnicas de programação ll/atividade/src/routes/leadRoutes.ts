import { Router } from "express";
import { LeadController } from "../controllers/leadController";

const router = Router();

router.post("/leads", LeadController.create);
router.get("/leads", LeadController.list);
router.get("/leads/:id", LeadController.get);
router.put("/leads/:id/advance", LeadController.advance);
router.put("/leads/:id/finalize", LeadController.finalize);

export default router;