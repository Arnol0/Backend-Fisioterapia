import express from "express";

import {
  createRoutine,
  getRoutines,
  getRoutine,
  updateRoutine,
  deleteRoutine,
} from "../Controllers/routineController.js";

import authMiddleware from "../Middlewares/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createRoutine);

router.get("/", authMiddleware, getRoutines);

router.get("/:id", authMiddleware, getRoutine);

router.put("/:id", authMiddleware, updateRoutine);

router.delete("/:id", authMiddleware, deleteRoutine);

export default router;
