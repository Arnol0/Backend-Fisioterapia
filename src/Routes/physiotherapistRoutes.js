import express from "express";

import {
  createPhysiotherapist,
  getPhysiotherapists,
  getPhysiotherapist,
  updatePhysiotherapist,
  deletePhysiotherapist,
} from "../Controllers/physiotherapistController.js";

import authMiddleware from "../Middlewares/authmiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, createPhysiotherapist);

router.get("/", authMiddleware, getPhysiotherapists);

router.get("/:id", authMiddleware, getPhysiotherapist);

router.put("/:id", authMiddleware, updatePhysiotherapist);

router.delete("/:id", authMiddleware, deletePhysiotherapist);

export default router;
