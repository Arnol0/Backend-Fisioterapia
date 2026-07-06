import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    rutina: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Routine",
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

    series: {
      type: Number,
      required: true,
      min: 1,
    },

    repeticiones: {
      type: Number,
      required: true,
      min: 1,
    },

    duracion: {
      type: Number,
      required: true,
      min: 1,
    },

    descanso: {
      type: Number,
      default: 30,
      min: 0,
    },

    video: {
      type: String,
      default: "",
      trim: true,
    },

    imagen: {
      type: String,
      default: "",
      trim: true,
    },

    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Exercise", exerciseSchema);