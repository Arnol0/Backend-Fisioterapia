import express from "express";

import { register, login } from "../Controllers/authcontroller.js";
import authMiddleware from "../Middlewares/authmiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

// Ruta protegida
router.get("/perfil", authMiddleware, (req, res) => {
    res.json(req.user);
});

export default router;