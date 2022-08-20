import mongoose from "mongoose";

const usuariosCollection = "usuarios";

const usuarioSchema = new mongoose.Schema({
    nombre: {type: String, required: true, maxLength: 100},
    apellido: {type: String, required: true, maxLength: [70, "ESTE APELLIDO ES MUY LARGO"]},
    email: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
});

export const Usuario = mongoose.model(usuariosCollection, usuarioSchema);
