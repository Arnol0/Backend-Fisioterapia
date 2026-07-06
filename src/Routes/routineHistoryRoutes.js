import express from "express";

import {
  createRoutineHistory,
  getRoutineHistories,
  getRoutineHistory,
  updateRoutineHistory,
  deleteRoutineHistory,
} from "../Controllers/routineHistoryController.js";

import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createRoutineHistory);

router.get("/", authMiddleware, getRoutineHistories);

router.get("/:id", authMiddleware, getRoutineHistory);

router.put("/:id", authMiddleware, updateRoutineHistory);

router.delete("/:id", authMiddleware, deleteRoutineHistory);

export default router;