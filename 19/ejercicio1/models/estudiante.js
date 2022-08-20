import mongoose from "mongoose";

const estudiantesCollection = "estudiantes";

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true, maxLength: 100 },
  apellido: { type: String, required: true, maxLength: 100 },
  edad: { type: Number, required: true, maxLength: 100 },
  dni: { type: String, required: true, maxLength: 100, unique: true },
  curso: { type: String, required: true, maxLength: 100 },
  nota: { type: Number, required: true, maxLength: 100 },
  ingreso: { type: Boolean, required: false, maxLength: 100 },
});

export const Estudiante = mongoose.model(estudiantesCollection, estudianteSchema);
