import { registerUser, loginUser } from "../Services/authservice.js";

export const register = async (req, res) => {
    
    try {
        const usuario = await registerUser(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({
            mensaje: error.message,
        });
    }
};

export const login = async (req, res) => {

    try {
        const { correo, password } = req.body;
        const usuario = await loginUser(correo, password);
        res.json(usuario);
    } catch (error) {
        res.status(401).json({
            mensaje: error.message,
        });
    }

};

export const perfil = async (req, res) => {

    res.json({
        id: req.user._id,
        nombre: req.user.nombre,
        apellido: req.user.apellido,
        correo: req.user.correo,
        telefono: req.user.telefono,
        rol: req.user.rol
    });

};