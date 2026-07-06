import mongoose from "mongoose";

const physiotherapistSchema = new mongoose.Schema(
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
      minlength: 8,
      maxlength: 8,
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

    especialidad: {
      type: String,
      required: true,
      trim: true,
    },

    colegiatura: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    experiencia: {
      type: Number,
      required: true,
      min: 0,
    },

    horario: {
      type: String,
      required: true,
    },

    contactoEmergencia: {
      nombre: {
        type: String,
        required: true,
        trim: true,
      },

      telefono: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 9,
      },

      parentesco: {
        type: String,
        required: true,
        trim: true,
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

export default mongoose.model("Physiotherapist", physiotherapistSchema);