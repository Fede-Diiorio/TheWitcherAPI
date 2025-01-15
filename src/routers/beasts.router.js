import { Router } from "express";
import BeastController from "../controller/beasts.controller.js";

const router = Router();

router.get("/", async (req, res) =>
  new BeastController().getAllBeasts(req, res)
);

router.get("/:beastId", (req, res) =>
  new BeastController().getBeastById(req, res)
);

router.get("/category/:beastCategory", (req, res) =>
  new BeastController().getBeastsByCategory(req, res)
);
export default router;
