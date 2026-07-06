import Patient from "../Models/patient.js";

// Crear paciente
export const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);

    await patient.save();

    res.status(201).json({
      mensaje: "Paciente registrado correctamente",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener todos los pacientes
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("user");

    res.json(patients);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener un paciente por ID
export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate("user");

    if (!patient) {
      return res.status(404).json({
        mensaje: "Paciente no encontrado",
      });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Actualizar paciente
export const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!patient) {
      return res.status(404).json({
        mensaje: "Paciente no encontrado",
      });
    }

    res.json({
      mensaje: "Paciente actualizado correctamente",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Eliminar paciente
export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({
        mensaje: "Paciente no encontrado",
      });
    }

    res.json({
      mensaje: "Paciente eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};