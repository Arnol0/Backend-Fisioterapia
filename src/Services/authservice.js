import bcrypt from "bcryptjs";
import User from "../Models/user.js";
import generateJWT from "../Utils/jwt.js";

export const registerUser = async (data) => {

    const { nombre, apellido, correo, password, telefono, edad } = data;

    const existe = await User.findOne({ correo });

    if (existe) {
        throw new Error("El correo ya está registrado");
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const usuario = await User.create({
        nombre,
        apellido,
        correo,
        password: passwordHash,
        telefono,
        rol: "paciente"
    });

    return {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
        token: generateJWT(usuario._id),
    };
};

export const loginUser = async (correo, password) => {

    const usuario = await User.findOne({ correo });

    if (!usuario) {
        throw new Error("Correo incorrecto");
    }

    const valido = await bcrypt.compare(password, usuario.password);

    if (!valido) {
        throw new Error("Contraseña incorrecta");
    }

    return {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
        token: generateJWT(usuario._id),
    };
};