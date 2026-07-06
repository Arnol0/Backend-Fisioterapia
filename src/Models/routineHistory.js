import mongoose from "mongoose";

const routineHistorySchema = new mongoose.Schema(
  {
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    rutina: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Routine",
      required: true,
    },

    fisioterapeuta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Physiotherapist",
      required: true,
    },

    fecha: {
      type: Date,
      default: Date.now,
    },

    ejerciciosCompletados: {
      type: Number,
      required: true,
      default: 0,
    },

    porcentajeCompletado: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    observaciones: {
      type: String,
      trim: true,
      default: "",
    },

    dolor: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    estado: {
      type: String,
      enum: ["Completada", "Incompleta", "Cancelada"],
      default: "Completada",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("RoutineHistory", routineHistorySchema);