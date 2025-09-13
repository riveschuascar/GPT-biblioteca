import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  isb: { type: String, required: true },
  paginas: { type: Number, required: true },
  tipo: { type: String, default: "libro" },
  estaDisponible: { type: Boolean, default: true }
});

export default mongoose.model("libros", libroSchema);