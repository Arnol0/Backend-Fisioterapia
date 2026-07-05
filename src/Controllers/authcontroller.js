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