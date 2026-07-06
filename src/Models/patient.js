import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    dni: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fechaNacimiento: {
      type: Date,
      required: true,
    },

    sexo: {
      type: String,
      enum: ["Masculino", "Femenino", "Otro"],
      required: true,
    },

    direccion: {
      type: String,
      required: true,
      trim: true,
    },

    peso: {
      type: Number,
      required: true,
    },

    altura: {
      type: Number,
      required: true,
    },

    contactoEmergencia: {
      nombre: {
        type: String,
        required: true,
      },
      telefono: {
        type: String,
        required: true,
      },
      parentesco: {
        type: String,
        required: true,
      },
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

export default mongoose.model("Patient", patientSchema);