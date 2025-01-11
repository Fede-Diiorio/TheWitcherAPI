import { Router } from "express";
import BeastController from "../controller/beasts.controller.js";

const router = Router();

// Obtener todos los usuarios
// router.get("/", async (req, res) => {});

router.get("/", async (_, res) => new BeastController().getAllBeasts(res));

export default router;
