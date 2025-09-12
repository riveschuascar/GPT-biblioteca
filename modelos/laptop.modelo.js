const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema({
  titulo: String,
  director: String,
  fechaLanzamiento: Date,
  genero: String,
  reservado: { type: Boolean, default: false }
});

module.exports = mongoose.model("pelicula", PeliculaSchema);