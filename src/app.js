import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import patientRoutes from "./Routes/patientRoutes.js";
import authRoutes from "./Routes/authroutes.js";
import physiotherapistRoutes from "./Routes/physiotherapistRoutes.js";
import routineRoutes from "./Routes/routineRoutes.js";
import exerciseRoutes from "./Routes/exerciseRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/patients", patientRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/physiotherapists", physiotherapistRoutes);
app.use("/api/routines", routineRoutes);
app.use("/api/exercises", exerciseRoutes);
export default app;