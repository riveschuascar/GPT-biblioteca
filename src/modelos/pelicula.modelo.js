import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  director: { type: String, required: true },
  duracion: { type: String, required: true },
  tipo: { type: String, default: "pelicula" },
  estaDisponible: { type: Boolean, default: true }
});

export default mongoose.model("peliculas", peliculaSchema);
