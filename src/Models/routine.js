import mongoose from "mongoose";

const routineSchema = new mongoose.Schema(
  {
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    fisioterapeuta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Physiotherapist",
      required: true,
    },

    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    descripcion: {
      type: String,
      required: true,
      trim: true,
    },

    fechaInicio: {
      type: Date,
      required: true,
    },

    fechaFin: {
      type: Date,
      required: true,
    },

    frecuencia: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      enum: ["Pendiente", "En progreso", "Finalizada"],
      default: "Pendiente",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Routine", routineSchema);
