import Exercise from "../Models/exercise.js";

// Crear ejercicio
export const createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);

    await exercise.save();

    res.status(201).json({
      mensaje: "Ejercicio creado correctamente",
      exercise,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener todos los ejercicios
export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find().populate("rutina");

    res.json(exercises);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Obtener un ejercicio
export const getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id).populate("rutina");

    if (!exercise) {
      return res.status(404).json({
        mensaje: "Ejercicio no encontrado",
      });
    }

    res.json(exercise);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Actualizar ejercicio
export const updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!exercise) {
      return res.status(404).json({
        mensaje: "Ejercicio no encontrado",
      });
    }

    res.json({
      mensaje: "Ejercicio actualizado correctamente",
      exercise,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};

// Eliminar ejercicio
export const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);

    if (!exercise) {
      return res.status(404).json({
        mensaje: "Ejercicio no encontrado",
      });
    }

    res.json({
      mensaje: "Ejercicio eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};