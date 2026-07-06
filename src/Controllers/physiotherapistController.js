import Physiotherapist from "../Models/physiotherapist.js";

// Crear fisioterapeuta
export const createPhysiotherapist = async (req, res) => {
  try {
    const physiotherapist = new Physiotherapist(req.body);

    await physiotherapist.save();

    res.status(201).json({
      mensaje: "Fisioterapeuta registrado correctamente",
      physiotherapist,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener todos los fisioterapeutas
export const getPhysiotherapists = async (req, res) => {
  try {
    const physiotherapists = await Physiotherapist.find().populate("user");

    res.json(physiotherapists);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener un fisioterapeuta
export const getPhysiotherapist = async (req, res) => {
  try {
    const physiotherapist = await Physiotherapist.findById(req.params.id).populate("user");

    if (!physiotherapist) {
      return res.status(404).json({
        mensaje: "Fisioterapeuta no encontrado",
      });
    }

    res.json(physiotherapist);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Actualizar
export const updatePhysiotherapist = async (req, res) => {
  try {
    const physiotherapist = await Physiotherapist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!physiotherapist) {
      return res.status(404).json({
        mensaje: "Fisioterapeuta no encontrado",
      });
    }

    res.json({
      mensaje: "Fisioterapeuta actualizado",
      physiotherapist,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Eliminar
export const deletePhysiotherapist = async (req, res) => {
  try {
    const physiotherapist = await Physiotherapist.findByIdAndDelete(req.params.id);

    if (!physiotherapist) {
      return res.status(404).json({
        mensaje: "Fisioterapeuta no encontrado",
      });
    }

    res.json({
      mensaje: "Fisioterapeuta eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};