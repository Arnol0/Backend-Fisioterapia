import express from "express";

import {
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
} from "../Controllers/patientController.js";

import authMiddleware from "../Middlewares/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPatient);

router.get("/", authMiddleware, getPatients);

router.get("/:id", authMiddleware, getPatient);

router.put("/:id", authMiddleware, updatePatient);

router.delete("/:id", authMiddleware, deletePatient);

export default router;