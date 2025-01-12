import { Router } from "express";
import BeastController from "../controller/beasts.controller.js";

const router = Router();

router.get("/", async (req, res) =>
  new BeastController().getAllBeasts(req, res)
);

export default router;
