import mongoose from "mongoose";

const usuariosCollection = "usuarios";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true, maxLength: 100 },
  apellido: { type: String, required: true, maxLength: 100 },
  dni: { type: String, required: true, maxLength: 100, unique: true },
});

export const Usuario = mongoose.model(usuariosCollection, usuarioSchema);
