import express from "express";

import {
  createExercise,
  getExercises,
  getExercise,
  updateExercise,
  deleteExercise,
} from "../Controllers/exerciseController.js";

import authMiddleware from "../Middlewares/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createExercise);

router.get("/", authMiddleware, getExercises);

router.get("/:id", authMiddleware, getExercise);

router.put("/:id", authMiddleware, updateExercise);

router.delete("/:id", authMiddleware, deleteExercise);

export default router;