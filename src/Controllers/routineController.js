import Routine from "../Models/routine.js";

// Crear rutina
export const createRoutine = async (req, res) => {
  try {
    const routine = new Routine(req.body);

    await routine.save();

    res.status(201).json({
      mensaje: "Rutina creada correctamente",
      routine,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener todas las rutinas
export const getRoutines = async (req, res) => {
  try {
    const routines = await Routine.find()
      .populate("paciente")
      .populate("fisioterapeuta");

    res.json(routines);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener una rutina por ID
export const getRoutine = async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id)
      .populate("paciente")
      .populate("fisioterapeuta");

    if (!routine) {
      return res.status(404).json({
        mensaje: "Rutina no encontrada",
      });
    }

    res.json(routine);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Actualizar rutina
export const updateRoutine = async (req, res) => {
  try {
    const routine = await Routine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!routine) {
      return res.status(404).json({
        mensaje: "Rutina no encontrada",
      });
    }

    res.json({
      mensaje: "Rutina actualizada correctamente",
      routine,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Eliminar rutina
export const deleteRoutine = async (req, res) => {
  try {
    const routine = await Routine.findByIdAndDelete(req.params.id);

    if (!routine) {
      return res.status(404).json({
        mensaje: "Rutina no encontrada",
      });
    }

    res.json({
      mensaje: "Rutina eliminada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};