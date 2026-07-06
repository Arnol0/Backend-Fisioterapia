import RoutineHistory from "../Models/routineHistory.js";

// Registrar historial
export const createRoutineHistory = async (req, res) => {
  try {
    const history = new RoutineHistory(req.body);

    await history.save();

    res.status(201).json({
      mensaje: "Historial registrado correctamente",
      history,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener todo el historial
export const getRoutineHistories = async (req, res) => {
  try {
    const histories = await RoutineHistory.find()
      .populate("paciente")
      .populate("rutina")
      .populate("fisioterapeuta");

    res.json(histories);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener historial por ID
export const getRoutineHistory = async (req, res) => {
  try {
    const history = await RoutineHistory.findById(req.params.id)
      .populate("paciente")
      .populate("rutina")
      .populate("fisioterapeuta");

    if (!history) {
      return res.status(404).json({
        mensaje: "Historial no encontrado",
      });
    }

    res.json(history);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Actualizar historial
export const updateRoutineHistory = async (req, res) => {
  try {
    const history = await RoutineHistory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!history) {
      return res.status(404).json({
        mensaje: "Historial no encontrado",
      });
    }

    res.json({
      mensaje: "Historial actualizado correctamente",
      history,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Eliminar historial
export const deleteRoutineHistory = async (req, res) => {
  try {
    const history = await RoutineHistory.findByIdAndDelete(req.params.id);

    if (!history) {
      return res.status(404).json({
        mensaje: "Historial no encontrado",
      });
    }

    res.json({
      mensaje: "Historial eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};